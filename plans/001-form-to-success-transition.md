# 001 — Bridge the form-to-success transition

- **Status**: DONE
- **Commit**: unversioned workspace (no Git repository present)
- **Severity**: MEDIUM
- **Category**: Missed opportunities / Accessibility
- **Estimated scope**: 3 files, approximately 55 changed lines

## Problem

Submitting the visit form swaps two substantially different dialog states in one
frame. The form and its heading are removed with `hidden`, the success message is
shown, and keyboard focus jumps to its close button immediately. This makes a
rare, positive state change feel like a layout glitch instead of confirmation.

```js
// peach-orchard/script.js:303 — current
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  dialogCopy.hidden = true;
  success.hidden = false;
  success.querySelector('button')?.focus();
  form.reset();
});
```

The same `hidden` toggles are reset every time the dialog opens:

```js
// peach-orchard/script.js:284 — current
document.querySelectorAll('[data-open-visit]').forEach((button) => {
  button.addEventListener('click', () => {
    closeMenu();
    form.hidden = false;
    dialogCopy.hidden = false;
    success.hidden = true;
    dialog.showModal();
    requestAnimationFrame(() => dialog.querySelector('input')?.focus());
  });
});
```

The success block is currently removed from layout and the accessibility tree:

```html
<!-- peach-orchard/index.html:195 — current -->
<div class="form-success" hidden>
  <span aria-hidden="true">✓</span>
  <h2 data-i18n="successTitle">We’ll save you a peach.</h2>
  <p data-i18n="successBody">Thanks for the note. In a live version, this would now reach the orchard.</p>
  <button class="text-link" type="button" data-close-dialog data-i18n="close">Close</button>
</div>
```

There are no transition states for either surface:

```css
/* peach-orchard/styles.css:205–213 — current */
.visit-form { padding: 32px 56px 44px; display: grid; gap: 20px; }
.form-success { padding: 70px 56px; text-align: center; }
.form-success > span { display: grid; width: 54px; height: 54px; margin: auto; place-items: center; border-radius: 50%; background: var(--leaf); color: white; font-size: 24px; }
.form-success p { margin: 16px auto 28px; max-width: 420px; opacity: .7; }
```

## Target

Keep both dialog states in the same CSS grid cell so the modal retains the form
state's height during the transition. Animate only `opacity` and `transform`:

- Form state exits from `opacity: 1; transform: translateY(0)` to
  `opacity: 0; transform: translateY(-8px)` over `160ms var(--ease-out)`.
- Success state enters from `opacity: 0; transform: translateY(12px)` to
  `opacity: 1; transform: translateY(0)` over `220ms var(--ease-out)`.
- Delay the success entrance by `110ms`, creating a restrained `50ms` overlap
  with the form's `160ms` exit rather than a full double exposure.
- The success icon follows its parent and additionally moves from `scale(.94)`
  to `scale(1)` over `260ms var(--ease-out)`, also delayed by `110ms`.
- Do not animate `height`, `width`, padding, grid tracks, or other layout
  properties.
- Switch focusability and screen-reader exposure immediately with `inert` and
  `aria-hidden`; visual opacity must never be the only accessibility state.
- In reduced-motion mode, remove all translation and scale. Keep a `120ms`
  opacity crossfade with no delay.

Use the existing tokens verbatim:

```css
/* peach-orchard/styles.css:11–12 — existing */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
```

The target CSS is:

```css
.visit-dialog__stage {
  display: grid;
}

.dialog-form-state,
.form-success {
  grid-area: 1 / 1;
}

.dialog-form-state {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 160ms var(--ease-out), transform 160ms var(--ease-out);
}

.form-success {
  align-self: center;
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: opacity 220ms var(--ease-out) 110ms,
              transform 220ms var(--ease-out) 110ms;
}

.form-success > span {
  transform: scale(.94);
  transition: transform 260ms var(--ease-out) 110ms;
}

.visit-dialog[data-state="success"] .dialog-form-state {
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
}

.visit-dialog[data-state="success"] .form-success {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.visit-dialog[data-state="success"] .form-success > span {
  transform: scale(1);
}
```

The target reduced-motion override belongs inside the existing
`@media (prefers-reduced-motion: reduce)` block:

```css
.dialog-form-state,
.form-success {
  transform: none;
  transition: opacity 120ms var(--ease-out);
}

.form-success > span {
  transform: none;
  transition: none;
}
```

## Repo conventions to follow

- Motion tokens live at `peach-orchard/styles.css:11–12`. Reuse
  `var(--ease-out)`; do not add another cubic-bezier or a dependency.
- UI press feedback uses short CSS transitions, for example
  `peach-orchard/styles.css:73`:

  ```css
  .nav-cta:active, .visit-button:active, .submit-button:active { transform: scale(.97); }
  ```

- Reduced-motion handling already lives in one media block at
  `peach-orchard/styles.css:297–301`. Extend that block rather than creating a
  separate competing policy.
- Dialog behavior is plain DOM code in `peach-orchard/script.js:279–310`.
  Continue using DOM attributes and CSS transitions; do not introduce WAAPI,
  animation libraries, or keyframes for this interruptible state.

## Steps

1. In `peach-orchard/index.html`, add `data-state="form"` to
   `.visit-dialog`. After the existing `.dialog-close`, add a
   `.visit-dialog__stage` wrapper. Inside it, wrap the existing `.dialog-copy`
   and `.visit-form` in one `.dialog-form-state` element. Keep `.form-success`
   as the second child of `.visit-dialog__stage` so both states can share grid
   area `1 / 1`.

2. Remove the `hidden` attribute from `.form-success`. Add
   `aria-live="polite"`, `aria-atomic="true"`, `aria-hidden="true"`, and the
   boolean `inert` attribute to it. Do not change any translated text or field
   markup.

3. In `peach-orchard/styles.css`, add the stage, state, transition, and
   `data-state="success"` rules from the Target section immediately after the
   current `.visit-dialog[open]` rule. Preserve the existing padding and
   typography rules for `.dialog-copy`, `.visit-form`, and `.form-success`.

4. In the existing reduced-motion media query at the bottom of
   `peach-orchard/styles.css`, add the exact reduced-motion rules from the
   Target section. Do not modify the site's other reveal or video behavior.

5. In `peach-orchard/script.js`, after selecting `dialog`, `form`,
   `dialogCopy`, and `success`, select the new wrapper and create a focus timer:

   ```js
   const formState = dialog?.querySelector('.dialog-form-state');
   let successFocusTimer;
   ```

   Keep the `dialogCopy` selection because it is useful as a structural sanity
   check, but it must no longer receive `hidden`.

6. Add one state helper next to those selectors. It must coordinate the visual,
   keyboard, and accessibility states:

   ```js
   const setDialogState = (state) => {
     const showingSuccess = state === 'success';
     dialog.dataset.state = state;
     formState.toggleAttribute('inert', showingSuccess);
     formState.setAttribute('aria-hidden', String(showingSuccess));
     success.toggleAttribute('inert', !showingSuccess);
     success.setAttribute('aria-hidden', String(!showingSuccess));
   };
   ```

7. In every `[data-open-visit]` handler, replace the three current `hidden`
   assignments with:

   ```js
   window.clearTimeout(successFocusTimer);
   setDialogState('form');
   form.reset();
   ```

   Keep `dialog.showModal()` and the existing next-frame focus on the first
   input unchanged.

8. Replace the submit handler's three `hidden` assignments and immediate focus
   call with:

   ```js
   setDialogState('success');
   form.reset();
   successFocusTimer = window.setTimeout(() => {
     success.querySelector('button')?.focus();
   }, reduceMotion ? 0 : 110);
   ```

   The timeout matches the success transition delay. It must be stored so a
   rapid close cannot focus content inside a closed dialog.

9. Add a `close` listener to the dialog:

   ```js
   dialog?.addEventListener('close', () => {
     window.clearTimeout(successFocusTimer);
     setDialogState('form');
   });
   ```

   This makes reopening deterministic whether the previous close happened from
   the X button, success button, backdrop, or Escape key.

10. Confirm the new wrapper does not invalidate the existing mobile rule
    `.dialog-copy, .visit-form, .form-success { padding-left: 24px; padding-right: 24px; }`.
    No selector change should be necessary.

## Boundaries

- Do NOT change `peach-orchard/assets/`, translation strings, form fields,
  validation, dialog opening animation, dialog closing behavior, or video.
- Do NOT animate layout properties or use `transition: all`.
- Do NOT use `setTimeout` to hide either visual state; both remain in the grid
  so the dialog height stays stable. The only timeout is for focus timing.
- Do NOT add dependencies, keyframes, canvas effects, confetti, bounce, blur,
  sound, or haptic effects.
- Do NOT change the close button's current handlers beyond adding the shared
  dialog `close` cleanup listener.
- If the cited selectors, DOM order, or submit handler no longer match the code,
  STOP and report plan drift instead of improvising.

## Verification

- **Mechanical**:
  - Run `node --check peach-orchard/script.js`; expect exit code 0.
  - Confirm CSS brace balance with
    `test "$(tr -cd '{' < peach-orchard/styles.css | wc -c)" = "$(tr -cd '}' < peach-orchard/styles.css | wc -c)"`;
    expect exit code 0.
  - Run
    `rg -n "hidden|data-state|dialog-form-state|form-success|successFocusTimer" peach-orchard/index.html peach-orchard/styles.css peach-orchard/script.js`.
    Confirm `.form-success` has no `hidden` attribute and that no submit/open
    handler assigns `.hidden` to the form, copy, or success elements.

- **Feel check**:
  - Serve `peach-orchard/` locally with `python3 -m http.server 4173` and submit
    valid name/email values.
  - Confirm the form begins leaving immediately; the success state starts after
    `110ms`; the modal never collapses or jumps in height.
  - In the browser DevTools Animations panel, set playback to 10%. Confirm the
    two states overlap only briefly and the success icon starts at `.94`, never
    `scale(0)`.
  - Press Escape during the transition, reopen the dialog, and confirm the form
    is visible, enabled, accessible, and focused; no delayed focus returns to
    the closed success state.
  - Submit, then press Tab. Confirm focus remains within the success state and
    none of the hidden form fields receive focus.
  - Switch EN/UA before opening and while the form is open. Confirm both form and
    success translations remain correct.
  - Emulate `prefers-reduced-motion: reduce` in the Rendering panel. Confirm the
    transition is a `120ms` opacity-only crossfade with no translation, icon
    scaling, or delay.
  - Check at 360px, 768px, and 1365px viewport widths. The success state should
    remain centered and the dialog should not exceed the viewport.

- **Done when**: submitting produces one stable, responsive crossfade from the
  full form state to the success message; focus and screen readers switch to the
  success state; closing or interrupting the transition cannot leave stale
  focus or state; reduced-motion users receive opacity feedback without spatial
  movement.

## Execution result

Implemented and reviewed on 2026-08-12. The implementation passed syntax, CSS
balance, diff, desktop/mobile rendering, and reduced-motion checks. Review found
and corrected one reduced-motion specificity issue before approval.
