const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const translations = {
  en: {
    pageTitle: 'The Peach Plot — Raised close to home',
    description: 'A small family peach orchard in Kherson Oblast, raised by two brothers on the wide southern steppe.',
    languageSwitch: 'Switch language to Ukrainian',
    skip: 'Skip to content',
    brandHome: 'The Peach Plot, home',
    primaryNav: 'Primary navigation',
    menuToggle: 'Toggle navigation',
    navStory: 'Our story',
    navSeason: 'The season',
    navPeople: 'The brothers',
    planVisit: 'Plan a visit',
    heroEyebrow: 'Kherson steppe · Family grown',
    heroLineOne: 'Peaches, raised',
    heroLineTwo: 'close to home.',
    heroBottom: 'Two brothers. One modest plot.<br />Every tree known by heart.',
    readStory: 'Read our story',
    heroSide: 'Harvest notes / 01',
    plotIndex: '01 / THE PLOT',
    plotLead: 'Good fruit has nowhere to hide.',
    plotTitle: 'Our fertile ground and their daily work meet in a peach that is <em>sweet, fragrant, and alive.</em>',
    plotBody: 'The orchard sits close to the family home in Kherson Oblast, where fertile ground meets the wide, open southern steppe. Small enough to care for closely, large enough to keep two brothers busy every day.',
    seeHow: 'See how we grow',
    seasonIndex: '02 / THE SEASON',
    seasonTitle: 'Care, repeated<br /><em>until it tastes right.</em>',
    orchardVideo: 'A slow walk past peach trees in the family orchard',
    rowsCaption: 'In the rows / late summer',
    careOneTitle: 'Fertilize with purpose',
    careOneBody: 'Good fruit starts below the surface. The soil and every tree are fed at the right stage, giving roots the nutrients they need without wasting what the land provides.',
    careTwoTitle: 'Protect the trees',
    careTwoBody: 'Disease and pests never take a season off. The orchard is watched constantly, then treated with the right crop protection at the right moment — carefully measured and never used blindly.',
    careThreeTitle: 'Watch the water',
    careThreeBody: 'Heat changes quickly here. Irrigation is checked, adjusted, and checked again so the roots receive what they need, when they need it.',
    careFourTitle: 'Prune & thin',
    careFourBody: 'Branches are opened to light and crowded fruit is thinned by hand. Fewer peaches on the tree means more strength, sweetness, and size in each one.',
    careFiveTitle: 'Pick by hand',
    careFiveBody: 'Color is only the first clue. A peach is ready when it gives just enough beneath your thumb.',
    proofIndex: '03 / THE PROOF',
    proofTitle: 'No slogans.<br /><em>Just take a bite.</em>',
    biteAlt: 'A freshly bitten yellow peach showing its juicy flesh',
    biteCaption: 'Juice on your hands',
    biteNote: 'The honest quality test',
    quote: 'There is not much to add. Come and taste it for yourself.',
    quoteBy: '— The family rule',
    bucketsAlt: 'Two large buckets filled with freshly picked yellow and red peaches',
    harvestCaption: 'Today’s pick',
    harvestNote: 'Never waiting in a warehouse',
    brothersAlt: 'Igor and Vitalii shaking hands in their peach orchard',
    peopleIndex: '04 / THE BROTHERS',
    peopleIntro: 'Brothers, growers, and the two pairs of hands behind every harvest.',
    peopleBodyOne: 'They fertilize, water, prune, mend, carry, and begin again the next morning. The work is ordinary. The care is not.',
    peopleBodyTwo: 'This orchard was never designed to be the biggest. It was built to produce something the family would be proud to put on its own table.',
    signatureLabel: 'Igor and Vitalii, since day one',
    visitEyebrow: 'When the peaches are ready',
    visitTitle: 'Come by.<br /><em>Leave convinced.</em>',
    visitBody: 'Visits are simple and personal, just like the orchard. Let us know before you set out.',
    footerTagline: 'Kherson Oblast.<br />On the wide southern steppe.',
    footerSeason: 'Family grown',
    footerVisits: 'Picked by hand in season',
    closeForm: 'Close visit form',
    dialogEyebrow: 'A good day out',
    dialogTitle: 'Come meet the orchard.',
    dialogBody: 'Leave your details and the family will help arrange a time during harvest season.',
    formName: 'Name',
    namePlaceholder: 'Your name',
    formEmail: 'Email',
    emailPlaceholder: 'you@example.com',
    formReason: 'What brings you by?',
    messagePlaceholder: 'A family visit, a box of peaches…',
    sendNote: 'Send a visit note',
    formNote: 'Portfolio demo — no message is transmitted.',
    successTitle: 'We’ll save you a peach.',
    successBody: 'Thanks for the note. In a live version, this would now reach the orchard.',
    close: 'Close',
  },
  uk: {
    pageTitle: 'The Peach Plot — Персики, вирощені поруч із домом',
    description: 'Невеликий родинний персиковий сад у Херсонській області, який двоє братів вирощують серед просторого південного степу.',
    languageSwitch: 'Перемкнути мову на англійську',
    skip: 'Перейти до вмісту',
    brandHome: 'The Peach Plot, головна',
    primaryNav: 'Головна навігація',
    menuToggle: 'Відкрити або закрити навігацію',
    navStory: 'Наша історія',
    navSeason: 'Сезон',
    navPeople: 'Брати',
    planVisit: 'Запланувати візит',
    heroEyebrow: 'Херсонський степ · Родинна справа',
    heroLineOne: 'Персики, вирощені',
    heroLineTwo: 'поруч із домом.',
    heroBottom: 'Два брати. Один невеликий сад.<br />Кожне дерево знають напам’ять.',
    readStory: 'Прочитати нашу історію',
    heroSide: 'Нотатки врожаю / 01',
    plotIndex: '01 / САД',
    plotLead: 'Якісний плід нічого не приховає.',
    plotTitle: 'Наша родюча земля та їхня щоденна праця поєднуються в персику — <em>солодкому, духмяному й живому.</em>',
    plotBody: 'Сад розташований неподалік від родинного дому в Херсонській області — там, де родюча земля зустрічається з простором безкрайніх південних степів. Достатньо малий, щоб дбати про кожне дерево, і достатньо великий, щоб щодня давати роботу двом братам.',
    seeHow: 'Погляньте, як ми вирощуємо',
    seasonIndex: '02 / СЕЗОН',
    seasonTitle: 'Догляд, день за днем<br /><em>до правильного смаку.</em>',
    orchardVideo: 'Повільна прогулянка поміж персикових дерев у родинному саду',
    rowsCaption: 'Поміж рядами / кінець літа',
    careOneTitle: 'Удобрювати з розумом',
    careOneBody: 'Добрий плід починається під землею. Ґрунт і кожне дерево отримують поживні речовини у правильний момент — рівно стільки, скільки потрібно корінню.',
    careTwoTitle: 'Захищати дерева',
    careTwoBody: 'Хвороби й шкідники не мають вихідних. За садом постійно спостерігають і вчасно застосовують правильний захист — точно відміряний, а не використаний навмання.',
    careThreeTitle: 'Стежити за водою',
    careThreeBody: 'Спека тут змінюється швидко. Полив перевіряють, налаштовують і перевіряють знову, щоб коріння отримало потрібну кількість води у потрібний час.',
    careFourTitle: 'Обрізати й проріджувати',
    careFourBody: 'Гілки відкривають сонцю, а надто густі плоди проріджують вручну. Менше персиків на дереві — більше сили, солодкості й розміру в кожному.',
    careFiveTitle: 'Збирати вручну',
    careFiveBody: 'Колір — лише перша ознака. Персик готовий, коли м’яко піддається під пальцями.',
    proofIndex: '03 / ДОКАЗ',
    proofTitle: 'Без гасел.<br /><em>Просто скуштуйте.</em>',
    biteAlt: 'Свіжий надкушений жовтий персик із соковитою м’якоттю',
    biteCaption: 'Сік на долонях',
    biteNote: 'Найчесніша перевірка якості',
    quote: 'Тут нічого додати. Приїжджайте й переконайтеся самі.',
    quoteBy: '— Родинне правило',
    bucketsAlt: 'Два великі відра зі свіжозібраними жовто-червоними персиками',
    harvestCaption: 'Сьогоднішній збір',
    harvestNote: 'Без очікування на складі',
    brothersAlt: 'Ігор і Віталій тиснуть руки у своєму персиковому саду',
    peopleIndex: '04 / БРАТИ',
    peopleIntro: 'Брати, садівники й дві пари рук за кожним урожаєм.',
    peopleBodyOne: 'Вони удобрюють, поливають, обрізають, ремонтують, носять — і наступного ранку починають знову. Робота звичайна. Турбота — ні.',
    peopleBodyTwo: 'Цей сад ніколи не мав бути найбільшим. Його створили, щоб вирощувати те, що родина з гордістю поставить на власний стіл.',
    signatureLabel: 'Ігор і Віталій, разом від самого початку',
    visitEyebrow: 'Коли персики дозріли',
    visitTitle: 'Завітайте.<br /><em>І переконайтеся.</em>',
    visitBody: 'Візити тут прості й особисті — як сам сад. Повідомте нам, перш ніж вирушати.',
    footerTagline: 'Херсонська область.<br />Серед просторого південного степу.',
    footerSeason: 'Вирощено родиною',
    footerVisits: 'Зібрано вручну в сезон',
    closeForm: 'Закрити форму візиту',
    dialogEyebrow: 'Гарний день у саду',
    dialogTitle: 'Познайомтеся із садом.',
    dialogBody: 'Залиште свої дані, і родина допоможе узгодити час візиту протягом сезону врожаю.',
    formName: 'Ім’я',
    namePlaceholder: 'Ваше ім’я',
    formEmail: 'Електронна пошта',
    emailPlaceholder: 'you@example.com',
    formReason: 'З якою метою хочете завітати?',
    messagePlaceholder: 'Родинний візит, ящик персиків…',
    sendNote: 'Надіслати запит',
    formNote: 'Демонстрація для портфоліо — повідомлення не надсилається.',
    successTitle: 'Збережемо для вас персик.',
    successBody: 'Дякуємо за повідомлення. У робочій версії воно вже надійшло б до саду.',
    close: 'Закрити',
  },
};

const languageToggle = document.querySelector('[data-language-toggle]');

const applyLanguage = (language, { persist = true } = {}) => {
  const nextLanguage = translations[language] ? language : 'en';
  const copy = translations[nextLanguage];

  document.documentElement.lang = nextLanguage;
  document.title = copy.pageTitle;
  document.querySelector('[data-i18n-meta="description"]')?.setAttribute('content', copy.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', copy[element.dataset.i18nAlt]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', copy[element.dataset.i18nPlaceholder]);
  });

  languageToggle.dataset.language = nextLanguage;
  languageToggle.setAttribute('aria-pressed', String(nextLanguage === 'uk'));
  languageToggle.setAttribute('aria-label', copy.languageSwitch);
  languageToggle.title = copy.languageSwitch;

  if (persist) {
    try {
      localStorage.setItem('peach-orchard-language', nextLanguage);
    } catch {}
  }
};

let savedLanguage = 'en';
try {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  savedLanguage = requestedLanguage || localStorage.getItem('peach-orchard-language') || 'en';
} catch {}
applyLanguage(savedLanguage, { persist: false });

languageToggle?.addEventListener('click', () => {
  applyLanguage(languageToggle.dataset.language === 'en' ? 'uk' : 'en');
});

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

const closeMenu = () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  nav.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const revealItems = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('is-pending');
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 3) * 55}ms`;
    if (item.getBoundingClientRect().top < window.innerHeight * 0.93) {
      item.classList.add('is-visible');
    } else {
      item.classList.add('is-pending');
      observer.observe(item);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const progress = document.querySelector('.scroll-progress span');
const heroImage = document.querySelector('.hero__media img');
let ticking = false;

const updateScrollEffects = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  progress.style.transform = `scaleX(${ratio})`;

  if (!reduceMotion && heroImage && window.scrollY < window.innerHeight * 1.15) {
    heroImage.style.transform = `translate3d(0, ${window.scrollY * 0.11}px, 0) scale(1.03)`;
  }
  ticking = false;
};

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateScrollEffects);
}, { passive: true });
updateScrollEffects();

const dialog = document.querySelector('.visit-dialog');
const form = dialog?.querySelector('.visit-form');
const dialogCopy = dialog?.querySelector('.dialog-copy');
const success = dialog?.querySelector('.form-success');

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

dialog?.querySelectorAll('[data-close-dialog]').forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});

dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  dialogCopy.hidden = true;
  success.hidden = false;
  success.querySelector('button')?.focus();
  form.reset();
});

if (reduceMotion) {
  document.querySelectorAll('video').forEach((video) => video.pause());
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
