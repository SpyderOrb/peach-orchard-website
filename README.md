# The Peach Plot

A bilingual portfolio concept for a small family peach orchard in Kherson Oblast. It uses generated editorial photography alongside optimized versions of the supplied orchard footage.

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

No build step or dependencies are required.

## Languages

The header toggle switches the complete interface between English and Ukrainian and remembers the visitor's choice. A Ukrainian view can also be opened directly with `?lang=uk`.

## Season journal

The season section includes an illustrated orchard notebook with four chapters: blossom, growing, harvest and rest. Native radio controls support keyboard navigation; the illustration and text follow the selected chapter, which stays selected when switching languages. All four chapters remain readable without JavaScript.

The journal describes the orchard's annual cycle, not a live harvest schedule.
