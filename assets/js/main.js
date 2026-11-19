/* Armor Key — общие компоненты и интерактив прототипа.
   Шапка/подвал вставляются в [data-include] — при переносе на 1С-Битрикс
   эта разметка уходит в header.php / footer.php шаблона. */

const SITE = {
  phone: '8 (812) 926-40-48',
  phoneHref: 'tel:+78129264048',
  mobile: '+7 (911) 233-80-07',
  email: '79112338007@yandex.ru',
  address: 'Санкт-Петербург, пр. Юрия Гагарина, 34 к2, лит. А',
  addressNote: 'вход в ТЦ «Лента», справа от входа',
  hours: 'Ежедневно 10:00–20:00',
  wa: 'https://wa.me/79112338007',
  tg: '#', // TODO: уточнить username у клиента
  max: '#', // TODO: уточнить ссылку у клиента
  vk: 'https://vk.com/armorkey',
  img: 'https://armor-key.ru' // изображения пока берём со старого сайта клиента
};

/* --- Иконки (stroke 1.75, 24×24) ----------------------------------------- */
const P = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  cart: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20.5" r="1"/><circle cx="17" cy="20.5" r="1"/>',
  heart: '<path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6.1a5 5 0 1 1 7.5 6.5z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M17 6l3 3M14.5 8.5l2 2"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.2"/>',
  unlock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.7-1.5"/><circle cx="12" cy="16" r="1.2"/>',
  door: '<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17"/><path d="M3 21h18"/><circle cx="15" cy="12" r="1"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5M3 21v-5h5"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 1.7-1.3a4 4 0 0 0-5-5L3 10l3-3 1.3 1.7z" transform="translate(0 -1)"/>',
  car: '<path d="M5 17h14M5 17a2 2 0 1 1-4 0v-5l2.5-5.5A2 2 0 0 1 5.3 5h13.4a2 2 0 0 1 1.8 1.5L23 12v5a2 2 0 1 1-4 0"/><path d="M3 12h18"/><circle cx="7" cy="15" r=".6"/><circle cx="17" cy="15" r=".6"/>',
  network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5V12M12 12l-5.5 4.8M12 12l5.5 4.8"/>',
  safe: '<rect x="3" y="3" width="18" height="17" rx="2"/><circle cx="12" cy="11.5" r="3.5"/><path d="M12 8v1M12 14v1M5 20v1.5M19 20v1.5"/>',
  cylinder: '<rect x="2.5" y="8" width="19" height="8" rx="4"/><circle cx="7" cy="12" r="1.6"/><path d="M11 12h7"/>',
  plate: '<rect x="6" y="2.5" width="12" height="19" rx="6"/><circle cx="12" cy="9" r="2"/><path d="M12 11v3"/>',
  truck: '<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
  medal: '<circle cx="12" cy="9" r="6"/><path d="m9 14.5-1.5 7L12 19l4.5 2.5-1.5-7"/><path d="m10 9 1.5 1.5L14.5 7.5"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  star: '<path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.3l-5.6 2.9 1.1-6.3L2.9 9.5l6.3-.9z" fill="currentColor" stroke="none"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
  ruble: '<path d="M8 21V3h6a4.5 4.5 0 0 1 0 9H6M6 16h9"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
  wa: '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2.1 1.3 2.4 1.4.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/>',
  tg: '<path fill="currentColor" stroke="none" d="M21.4 4.3 2.9 11.4c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.8-1.4-1.5zM9.3 14.3l8.6-5.4c.4-.3.8-.1.5.2l-7.2 6.6-.3 3-1.6-4.4z"/>',
  max: '<path fill="currentColor" stroke="none" d="M12 2.5c-5.4 0-9.5 3.9-9.5 9.1 0 2.3.8 4.5 2.4 6.2l-.6 3.7 3.6-1.5c1.2.5 2.6.8 4.1.8 5.4 0 9.5-3.9 9.5-9.2S17.4 2.5 12 2.5zm0 14.6a5.4 5.4 0 1 1 0-10.9 5.4 5.4 0 0 1 0 10.9z"/>',
  vk: '<path fill="currentColor" stroke="none" d="M13.1 18c-6 0-9.5-4.1-9.6-11h3c.1 5 2.3 7.2 4.1 7.6V7h2.8v4.3c1.8-.2 3.6-2.2 4.2-4.3h2.8a8.3 8.3 0 0 1-3.8 5.4 8.6 8.6 0 0 1 4.4 5.6h-3.1c-.7-2.1-2.4-3.8-4.5-4V18z"/>'
};
const icon = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;

/* Временный логотип-знак (до получения вектора от клиента) */
const LOGO_MARK = `<svg class="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
  <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3A7BEA"/><stop offset="1" stop-color="#1846A8"/></linearGradient></defs>
  <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#lg)"/>
  <circle cx="18" cy="24" r="8.5" fill="none" stroke="#fff" stroke-width="3"/>
  <circle cx="18" cy="24" r="2.6" fill="#E9C98B"/>
  <path d="M26.5 24H38v5M33 24v4" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* --- Данные каталога (демо из реального ассортимента) -------------------- */
const PRODUCTS = [
  { id: 1, cat: 'vreznye', brand: 'Apecs', title: 'Замок врезной Apecs 1423-G', price: 1750, img: '/upload/resize_cache/iblock/311/350_350_1/idpavqtlnd7vdp7t6d8vvcqf726riwez.jpg', badges: ['sale'], stock: 'Много', cls: '3 класс' },
  { id: 2, cat: 'vreznye', brand: 'Securemme', title: 'Замок Securemme 1433 двухсистемный: сувальдная и цилиндровая часть', price: null, img: '/upload/resize_cache/iblock/4b1/350_350_1/zx69vsk19x2tnx00dbq622js6h7xmicr.jpg', badges: ['hit'], stock: 'Много', cls: '4 класс' },
  { id: 3, cat: 'vreznye', brand: 'Меттэм', title: 'Замок Mettem врезной сувальдный с задвижкой ЗВ8 142.0.0, 5 кл.', price: null, img: '/upload/resize_cache/iblock/3bd/350_350_1/wobwnn81s2usvlwi3wvnb8h5vhm94soi.jpg', badges: ['new'], stock: 'Много', cls: '4 класс' },
  { id: 4, cat: 'vreznye', brand: 'Border', title: 'Замок врезной Border сувальдный ЗВ8-8 К5/15, 5 кл.', price: null, img: '/upload/resize_cache/iblock/e14/350_350_1/69mh53raqv23q2du8vsv07vdvn6h6p3r.jpg', badges: [], stock: 'Достаточно', cls: '3 класс' },
  { id: 5, cat: 'vreznye', brand: 'Апекс', title: 'Замок врезной 1023/60-CR «Апекс»', price: 3150, img: '/upload/resize_cache/iblock/e14/350_350_1/69mh53raqv23q2du8vsv07vdvn6h6p3r.jpg', badges: [], stock: 'Достаточно', cls: '2 класс' },
  { id: 6, cat: 'vreznye', brand: 'Апекс', title: 'Замок врезной T-05-CR «Апекс»', price: 2580, img: '/upload/resize_cache/iblock/311/350_350_1/idpavqtlnd7vdp7t6d8vvcqf726riwez.jpg', badges: [], stock: 'Много', cls: '2 класс' },
  { id: 7, cat: 'cyl', brand: 'Нора-М', title: 'Личина Н-М ЛПУ-80 (золото)', price: 1350, img: '/upload/resize_cache/iblock/0f2/350_350_1/9pjy6fxvje3ickj0sneh9idq94qckrw5.png', badges: [], stock: 'Много', cls: '' },
  { id: 8, cat: 'cyl', brand: 'Нора-М', title: 'Личина Н-М ЛПУ-90 (55-35), хром', price: 1450, img: '/upload/resize_cache/iblock/eab/350_350_1/bb715bya67861fz2s2kplg576kt1x400.png', badges: ['hit'], stock: 'Много', cls: '' },
  { id: 9, cat: 'cyl', brand: 'EVVA', title: 'Цилиндр EVVA ICS 102 мм (46+56), хром / латунь', price: null, img: '/upload/resize_cache/iblock/627/350_350_1/gizk16oze26i2aqgqqkvzi4ap2ma4nx2.jpg', badges: ['new'], stock: 'Под заказ', cls: '' },
  { id: 10, cat: 'cyl', brand: 'EVVA', title: 'Цилиндр EVVA 3KS 102 мм с картой владельца', price: null, img: '/upload/resize_cache/iblock/31c/350_350_1/212gmdz46af2g4x8lda4qovndqu15efd.jpg', badges: ['hit'], stock: 'Много', cls: '' },
  { id: 11, cat: 'cyl', brand: 'Mul-T-Lock', title: 'Цилиндр Mul-T-Lock MTL-600 Interactive+ 85 мм', price: null, img: '/upload/resize_cache/iblock/885/350_350_1/tfybqk40wsaeifuhe1nhrlprremapqi8.jpg', badges: [], stock: 'Много', cls: '' },
  { id: 12, cat: 'cyl', brand: 'Mottura', title: 'Цилиндр Mottura 92 мм (41+10+41), сатин-никель, 5+1 кл.', price: null, img: '/upload/resize_cache/iblock/b7e/350_350_1/jygjo2xz0rq1no97xx8z6dnrebtta38s.jpg', badges: [], stock: 'Много', cls: '' },
  { id: 14, cat: 'vreznye', brand: 'Ассистент', title: 'Замок врезной ЗВ-А30-4Л-Хп, сувальдный, 4 ключа', price: 2500, img: '/upload/resize_cache/iblock/3bd/350_350_1/wobwnn81s2usvlwi3wvnb8h5vhm94soi.jpg', badges: [], stock: 'Много', cls: '2 класс' },
  { id: 15, cat: 'vreznye', brand: 'Апекс', title: 'Замок для роллет RSL-30x120 «Апекс»', price: 1270, img: '/upload/resize_cache/iblock/e14/350_350_1/69mh53raqv23q2du8vsv07vdvn6h6p3r.jpg', badges: [], stock: 'Много', cls: '' },
  { id: 16, cat: 'cyl', brand: 'Mottura', title: 'Цилиндр Mottura C39 72 мм, длинный шток', price: null, img: '/upload/resize_cache/iblock/f9c/350_350_1/hc3b27o4oai7o79exvq0u1k4ql7fei38.jpg', badges: [], stock: 'Мало', cls: '' }
];
const SECTION = {
  1: 'zamki/vreznye-zamki', 2: 'zamki/vreznye-zamki', 3: 'zamki/vreznye-zamki', 4: 'zamki/vreznye-zamki', 5: 'zamki/vreznye-zamki', 6: 'zamki/vreznye-zamki',
  7: 'bronenakladki-i-komplektuyushchie/bronenakladki-i-plastiny', 8: 'bronenakladki-i-komplektuyushchie/bronenakladki-i-plastiny',
  9: 'tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-evva-avstriya', 10: 'tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-evva-avstriya',
  11: 'tsilindrovye-mekhanizmy/tsilindrovye-mekhanizmy-mul-t-lock', 12: 'tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-mottura-italiya',
  14: 'zamki/vreznye-zamki', 15: 'zamki/vreznye-zamki', 16: 'tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-mottura-italiya'
};
PRODUCTS.forEach(p => { p.sec = SECTION[p.id]; });
// в прототипе одна демо-карточка товара; в Битриксе — DETAIL_PAGE_URL элемента
const PRODUCT_URL = '/armor-key-preview/catalog/zamki/vreznye-zamki/zamok-vreznoy-apecs-1423-g/';
// приоритетные бренды заказчика — первыми в выдаче
const BRAND_PRIORITY = ['Cisa', 'Mottura', 'Securemme', 'Mul-T-Lock'];
const brandRank = b => { const i = BRAND_PRIORITY.indexOf(b); return i < 0 ? 99 : i; };
const fmt = n => n.toLocaleString('ru-RU').replace(/,/g, ' ');
const BADGE = { sale: ['badge--sale', 'Акция'], new: ['badge--new', 'Новинка'], hit: ['badge--hit', 'Хит'] };

function productCard(p) {
  const priceHtml = p.price
    ? `<div><div class="price">${fmt(p.price)} ₽</div>${p.old ? `<div class="price--old">${fmt(p.old)} ₽</div>` : ''}</div>`
    : `<div class="price price--request">Цена по запросу</div>`;
  return `<article class="card card--hover product" data-brand="${p.brand}" data-price="${p.price || 0}">
    <a href="${PRODUCT_URL}" class="product__media">
      <img src="${SITE.img}${p.img}" alt="${p.title}" loading="lazy" width="280" height="280">
      <div class="product__badges">${p.badges.map(b => `<span class="badge ${BADGE[b][0]}">${BADGE[b][1]}</span>`).join('')}</div>
    </a>
    <button class="product__fav" aria-label="В избранное" data-fav>${icon('heart')}</button>
    <div class="product__body">
      <span class="product__brand">${p.brand}</span>
      <a href="${PRODUCT_URL}" class="product__title">${p.title}</a>
      <div class="product__meta"><span class="badge badge--stock">${p.stock}</span>${p.cls ? `<span>${p.cls}</span>` : ''}</div>
      <div class="product__foot">${priceHtml}
        <button class="add-btn" aria-label="${p.price ? 'В корзину' : 'Запросить цену'}" ${p.price ? `data-add="${p.id}"` : 'data-modal="callback"'}>${icon(p.price ? 'cart' : 'phone')}</button>
      </div>
    </div>
  </article>`;
}

/* --- Партиалы ------------------------------------------------------------ */
const NAV = [
  ['/armor-key-preview/services/', 'Услуги'],
  ['/armor-key-preview/info/brands/', 'Бренды'],
  ['/armor-key-preview/sale/', 'Акции'],
  ['/armor-key-preview/help/delivery/', 'Доставка'],
  ['/armor-key-preview/contacts/', 'Контакты']
];

const partials = {
  header: () => `
  <div class="topbar">
    <div class="container">
      <div class="topbar__left">
        <span class="topbar__item"><span class="dot-live"></span>Мастерская открыта · ${SITE.hours}</span>
        <span class="topbar__item">${icon('pin')}${SITE.address.replace('Санкт-Петербург, ', '')}</span>
      </div>
      <div class="topbar__right">
        <a class="topbar__item" href="/armor-key-preview/services/vskrytie-zamkov/">${icon('unlock')}Срочное вскрытие</a>
        <a class="topbar__item" href="/armor-key-preview/company/">О компании</a>
        <a class="topbar__item" href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
        <a class="topbar__item" href="${SITE.tg}">${icon('tg')}Telegram</a>
        <a class="topbar__item" href="#" data-modal="callback">Заказать звонок</a>
      </div>
    </div>
  </div>
  <header class="header" id="header">
    <div class="container">
      <a class="logo" href="/armor-key-preview/" aria-label="Armor Key — на главную">${LOGO_MARK}
        <span class="logo__text"><span class="logo__name">ARMOR<b>KEY</b></span><span class="logo__sub">Замки · ключи · мастерская</span></span>
      </a>
      <nav class="nav" aria-label="Основное меню">
        <a class="nav__link nav__catalog" href="/armor-key-preview/catalog/" data-mega>${icon('grid')}Каталог</a>
        ${NAV.map(([h, t]) => `<a class="nav__link" href="${h}">${t}</a>`).join('')}
      </nav>
      <div class="header__actions">
        <div class="header__phone"><a href="${SITE.phoneHref}">${SITE.phone}</a><span>Перезвоним за 5 минут</span></div>
        <a class="icon-btn icon-btn--hide-sm" href="/armor-key-preview/search/" aria-label="Поиск">${icon('search')}</a>
        <a class="icon-btn icon-btn--hide-sm" href="#" aria-label="Избранное">${icon('heart')}<span class="icon-btn__count" data-fav-count hidden>0</span></a>
        <a class="icon-btn" href="/armor-key-preview/basket/" aria-label="Корзина">${icon('cart')}<span class="icon-btn__count" data-cart-count hidden>0</span></a>
        <button class="icon-btn burger" aria-label="Меню" data-drawer-open>${icon('menu')}</button>
      </div>
    </div>
    <div class="mega" id="mega">
      <div class="container">
        <div class="mega__col"><h4><span class="ico">${icon('lock')}</span>Замки</h4><ul>
          <li><a href="/armor-key-preview/catalog/zamki/vreznye-zamki/">Врезные замки</a></li><li><a href="/armor-key-preview/catalog/zamki/nakladnye-zamki/">Накладные замки</a></li>
          <li><a href="/armor-key-preview/catalog/zamki/navesnye-zamki/">Навесные замки</a></li>
          <li><a class="accent" href="/armor-key-preview/services/perekodirovka-zamkov/"><b>Перекодировка замков</b></a></li></ul></div>
        <div class="mega__col"><h4><span class="ico">${icon('cylinder')}</span>Цилиндры</h4><ul>
          <li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-cisa-italiya/">Cisa (Италия)</a></li><li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-mottura-italiya/">Mottura (Италия)</a></li>
          <li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/securemme/">Securemme</a></li><li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/tsilindrovye-mekhanizmy-mul-t-lock/">Mul-T-Lock</a></li>
          <li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-evva-avstriya/">EVVA (Австрия)</a></li><li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/tsilindrovyy-mekhanizm-kale-kilit-turtsiya/">Kale Kilit (Турция)</a></li>
          <li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/apeks/">Апекс</a></li><li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/tsilindrovye-mekhanizmy-rav-bariach1/">Rav-Bariach</a></li><li><a class="accent" href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/#podbor"><b>Подбор по размеру</b></a></li></ul></div>
        <div class="mega__col"><h4><span class="ico">${icon('plate')}</span>Броненакладки</h4><ul>
          <li><a href="/armor-key-preview/catalog/bronenakladki-i-komplektuyushchie/bronenakladki-i-plastiny/">Броненакладки и пластины</a></li><li><a href="/armor-key-preview/catalog/bronenakladki-i-komplektuyushchie/magnitnye-bronenakladki/">Магнитные броненакладки</a></li>
          <li><a href="/armor-key-preview/catalog/bronenakladki-i-komplektuyushchie/perekodirovochnye-kompekty-dlya-zamkov/">Перекодировочные комплекты</a></li></ul></div>
        <div class="mega__col"><h4><span class="ico">${icon('network')}</span>Системы</h4><ul>
          <li><a href="/armor-key-preview/catalog/master-sistema-pod-odin-klyuch/">Мастер-система: один ключ для всех дверей</a></li><li><a href="/armor-key-preview/catalog/dopolnitelnye-optsii/evva/">Опции EVVA</a></li>
          <li><a href="/armor-key-preview/catalog/dopolnitelnye-optsii/mul-t-lock/">Опции Mul-T-Lock</a></li></ul></div>
        <div class="mega__promo">
          <span class="seal">${icon('camera')}Подбор по фото</span>
          <h4 class="h3">Не знаете, какой замок подойдёт?</h4>
          <p>Пришлите фото замка или личинки в мессенджер — подберём замену и проконсультируем бесплатно.</p>
          <div class="mega__msg">
            <a class="msg-btn msg-btn--wa" href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
            <a class="msg-btn msg-btn--tg" href="${SITE.tg}">${icon('tg')}Telegram</a>
            <a class="msg-btn msg-btn--max" href="${SITE.max}">${icon('max')}Max</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer__overlay" data-drawer-close></div>
    <aside class="drawer__panel" aria-label="Мобильное меню">
      <div class="drawer__head"><a class="logo" href="/armor-key-preview/">${LOGO_MARK}<span class="logo__text"><span class="logo__name">ARMOR<b>KEY</b></span></span></a>
        <button class="icon-btn" aria-label="Закрыть" data-drawer-close>${icon('x')}</button></div>
      <nav class="drawer__nav">
        <details><summary>Каталог ${icon('chevron')}</summary>
          <a href="/armor-key-preview/catalog/">Весь каталог</a><a href="/armor-key-preview/catalog/zamki/">Замки</a><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/">Цилиндровые механизмы</a><a href="/armor-key-preview/catalog/bronenakladki-i-komplektuyushchie/">Броненакладки</a><a href="/armor-key-preview/catalog/master-sistema-pod-odin-klyuch/">Мастер-системы</a><a href="/armor-key-preview/services/perekodirovka-zamkov/">Перекодировка замков</a>
        </details>
        <details><summary>Услуги ${icon('chevron')}</summary>
          <a href="/armor-key-preview/services/">Все услуги и цены</a><a href="/armor-key-preview/services/vskrytie-zamkov/">Вскрытие замков</a><a href="/armor-key-preview/services/izgotovlenie-klyuchey/">Изготовление ключей</a><a href="/armor-key-preview/services/zamena-zamkov/">Замена замков</a><a href="/armor-key-preview/services/ustanovka-zamkov/">Установка замков</a><a href="/armor-key-preview/services/perekodirovka-zamkov/">Перекодировка</a><a href="/armor-key-preview/services/izgotovlenie-avtoklyuchey/">Автоключи</a><a href="/armor-key-preview/services/izgotovlenie-master-sistem/">Мастер-системы</a>
        </details>
        <a href="/armor-key-preview/info/brands/">Бренды</a><a href="/armor-key-preview/sale/">Акции</a><a href="/armor-key-preview/help/delivery/">Доставка и оплата</a><a href="/armor-key-preview/help/warranty/">Гарантия и возврат</a><a href="/armor-key-preview/company/">О компании</a><a href="/armor-key-preview/contacts/">Контакты</a><a href="/armor-key-preview/search/">Поиск по сайту</a>
      </nav>
      <div class="drawer__contacts">
        <a class="btn btn--primary btn--block" href="${SITE.phoneHref}">${icon('phone')}${SITE.phone}</a>
        <a class="btn btn--ghost btn--block" href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}Написать в WhatsApp</a>
        <p class="text-muted" style="font-size:13px;text-align:center">${SITE.hours} · ${SITE.address}</p>
      </div>
    </aside>
  </div>`,

  footer: () => `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__about">
          <a class="logo" href="/armor-key-preview/">${LOGO_MARK}<span class="logo__text"><span class="logo__name">ARMOR<b>KEY</b></span><span class="logo__sub">Замки · ключи · мастерская</span></span></a>
          <p>Магазин замков и мастерская в Санкт-Петербурге. Прямые поставки Cisa, Mottura, Securemme и Mul-T-Lock — цены ниже, чем на маркетплейсах.</p>
          <div class="footer__social">
            <a href="${SITE.vk}" target="_blank" rel="noopener" aria-label="ВКонтакте">${icon('vk')}</a>
            <a href="${SITE.wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('wa')}</a>
            <a href="${SITE.tg}" aria-label="Telegram">${icon('tg')}</a>
            <a href="${SITE.max}" aria-label="Max">${icon('max')}</a>
          </div>
        </div>
        <div><h4>Каталог</h4><ul>
          <li><a href="/armor-key-preview/catalog/zamki/vreznye-zamki/">Врезные замки</a></li><li><a href="/armor-key-preview/catalog/tsilindrovye-mekhanizmy/">Цилиндры</a></li>
          <li><a href="/armor-key-preview/catalog/bronenakladki-i-komplektuyushchie/">Броненакладки</a></li><li><a href="/armor-key-preview/catalog/master-sistema-pod-odin-klyuch/">Мастер-системы</a></li><li><a href="/armor-key-preview/services/perekodirovka-zamkov/">Перекодировка замков</a></li><li><a href="/armor-key-preview/sale/">Акции</a></li><li><a href="/armor-key-preview/info/brands/">Бренды</a></li></ul></div>
        <div><h4>Услуги</h4><ul>
          <li><a href="/armor-key-preview/services/vskrytie-zamkov/">Вскрытие замков</a></li><li><a href="/armor-key-preview/services/izgotovlenie-klyuchey/">Изготовление ключей</a></li>
          <li><a href="/armor-key-preview/services/zamena-zamkov/">Замена замков</a></li><li><a href="/armor-key-preview/services/perekodirovka-zamkov/">Перекодировка</a></li><li><a href="/armor-key-preview/services/izgotovlenie-avtoklyuchey/">Автоключи</a></li></ul></div>
        <div><h4>Покупателям</h4><ul>
          <li><a href="/armor-key-preview/help/delivery/">Доставка</a></li><li><a href="/armor-key-preview/help/delivery/#pay">Оплата</a></li>
          <li><a href="/armor-key-preview/help/warranty/">Гарантия и возврат</a></li><li><a href="/armor-key-preview/company/">О компании</a></li><li><a href="/armor-key-preview/contacts/">Контакты</a></li></ul></div>
        <div class="footer__contact"><h4>Контакты</h4>
          <a href="${SITE.phoneHref}"><b>${SITE.phone}</b></a>
          <a href="mailto:${SITE.email}" class="text-muted">${SITE.email}</a>
          <span class="text-muted">${SITE.address}<br>${SITE.addressNote}</span>
          <span class="text-muted">${SITE.hours}</span>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} Armor Key. ИП Тюрин В. Е., ИНН 780620136192</span>
        <span><a href="/armor-key-preview/privacy/">Политика конфиденциальности</a> · <a href="/armor-key-preview/help/delivery/#requisites">Реквизиты</a> · <a href="/armor-key-preview/help/warranty/">Гарантия и возврат</a></span>
      </div>
    </div>
  </footer>
  <nav class="tabbar" aria-label="Быстрые действия">
    <a href="${SITE.phoneHref}" class="is-call">${icon('phone')}Позвонить</a>
    <a href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
    <a href="/armor-key-preview/catalog/">${icon('grid')}Каталог</a>
    <a href="/armor-key-preview/basket/">${icon('cart')}Корзина</a>
  </nav>
  <div class="modal" id="modal-callback" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="mc-title">
    <div class="modal__overlay" data-modal-close></div>
    <div class="modal__box">
      <button class="icon-btn modal__close" aria-label="Закрыть" data-modal-close>${icon('x')}</button>
      <h3 id="mc-title">Перезвоним за 5 минут</h3>
      <p>Оставьте номер — мастер ответит на вопросы и назовёт точную цену.</p>
      <form class="form" data-form>
        <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off">
        <div class="field"><label for="mc-name">Имя</label><input class="input" id="mc-name" name="name" placeholder="Как к вам обращаться"></div>
        <div class="field"><label for="mc-phone">Телефон *</label><input class="input" id="mc-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required data-phone></div>
        <label class="check"><input type="checkbox" required checked> <span>Согласен на обработку <a href="/armor-key-preview/privacy/">персональных данных</a></span></label>
        <button class="btn btn--primary btn--block" type="submit">Жду звонка</button>
      </form>
      <div class="success"><div class="ico ico--green">${icon('check')}</div><h3>Заявка принята</h3><p class="text-muted">Мастер перезвонит в течение 5 минут в рабочее время.</p></div>
    </div>
  </div>
  <div class="toast" id="toast">${icon('checkCircle')}<span></span></div>`
};

/* --- Инициализация ------------------------------------------------------- */
document.querySelectorAll('[data-include]').forEach(el => { el.outerHTML = partials[el.dataset.include](); });
document.querySelectorAll('[data-icon]').forEach(el => { el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)); });
document.querySelectorAll('[data-products]').forEach(el => {
  // формат: "all:8", "cyl:4", "b=EVVA:8" (бренд), "sec=zamki/vreznye-zamki:4" (раздел)
  const [key, n] = el.dataset.products.split(':');
  const match = p => key === 'all' || p.cat === key || key === 'b=' + p.brand || (key.startsWith('sec=') && (p.sec + '/').startsWith(key.slice(4) + '/'));
  // приоритетные бренды — первыми (sort стабилен: внутри бренда порядок сохраняется)
  const list = PRODUCTS.filter(match).sort((a, b) => brandRank(a.brand) - brandRank(b.brand)).slice(0, +n || 99);
  el.innerHTML = list.map(productCard).join('');
  if (!list.length) el.closest('[data-products-wrap]')?.setAttribute('hidden', '');
});

// активный пункт меню
const here = location.pathname;
document.querySelectorAll('.nav__link').forEach(a => { const h = a.getAttribute('href'); if (h !== '/' && here.startsWith(h)) a.classList.add('is-active'); });

// шапка при скролле
const header = document.getElementById('header');
const onScroll = () => header && header.classList.toggle('is-scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// мега-меню
const mega = document.getElementById('mega');
const megaBtn = document.querySelector('[data-mega]');
if (mega && megaBtn) {
  let t;
  const open = () => { clearTimeout(t); mega.classList.add('is-open'); };
  const close = () => { t = setTimeout(() => mega.classList.remove('is-open'), 160); };
  [megaBtn, mega].forEach(el => { el.addEventListener('mouseenter', open); el.addEventListener('mouseleave', close); });
  addEventListener('keydown', e => e.key === 'Escape' && mega.classList.remove('is-open'));
}

// мобильное меню
const drawer = document.getElementById('drawer');
const setDrawer = on => { drawer.classList.toggle('is-open', on); drawer.setAttribute('aria-hidden', !on); document.body.style.overflow = on ? 'hidden' : ''; };
document.addEventListener('click', e => {
  if (e.target.closest('[data-drawer-open]')) setDrawer(true);
  if (e.target.closest('[data-drawer-close]')) setDrawer(false);
});

// модалки
const openModal = id => {
  const m = document.getElementById('modal-' + id); if (!m) return;
  m.querySelector('.modal__box').classList.remove('is-sent');
  m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false');
  setTimeout(() => m.querySelector('input:not(.hp)')?.focus(), 120);
};
const closeModals = () => document.querySelectorAll('.modal.is-open').forEach(m => { m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true'); });
document.addEventListener('click', e => {
  const t = e.target.closest('[data-modal]');
  if (t) { e.preventDefault(); setDrawer(false); openModal(t.dataset.modal); }
  if (e.target.closest('[data-modal-close]')) closeModals();
});
addEventListener('keydown', e => { if (e.key === 'Escape') { closeModals(); setDrawer(false); } });

// формы (в прототипе — без отправки; на проде: обработчик Битрикс + Telegram-бот)
document.addEventListener('submit', e => {
  const f = e.target.closest('[data-form]'); if (!f) return;
  e.preventDefault();
  if (f.website && f.website.value) return; // honeypot
  const box = f.closest('.modal__box');
  if (box) box.classList.add('is-sent'); else { toast('Спасибо! Мы перезвоним в течение 5 минут'); f.reset(); }
});

// маска телефона
document.addEventListener('input', e => {
  if (!e.target.matches('[data-phone]')) return;
  let d = e.target.value.replace(/\D/g, '');
  if (d.startsWith('8')) d = '7' + d.slice(1);
  if (!d.startsWith('7')) d = '7' + d;
  d = d.slice(0, 11);
  const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
  e.target.value = '+7' + (p[0] ? ` (${p[0]}` : '') + (p[0].length === 3 ? ')' : '') + (p[1] ? ` ${p[1]}` : '') + (p[2] ? `-${p[2]}` : '') + (p[3] ? `-${p[3]}` : '');
});

// toast
let toastT;
function toast(msg) {
  const el = document.getElementById('toast'); if (!el) return;
  el.querySelector('span').textContent = msg; el.classList.add('is-show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('is-show'), 2600);
}

/* --- Корзина (прототип: хранится в браузере; на проде — sale.basket Битрикса) --- */
const CART_KEY = 'ak-cart';
const FREE_FROM = 10000;
const store = {
  get() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { return store._mem || {}; } },
  set(v) { store._mem = v; try { localStorage.setItem(CART_KEY, JSON.stringify(v)); } catch (e) { /* приватный режим */ } }
};
let fav = 0;
const setCount = (sel, n) => document.querySelectorAll(sel).forEach(el => { el.textContent = n; el.hidden = n === 0; });
const cartQty = () => Object.values(store.get()).reduce((s, q) => s + q, 0);
const syncCartCount = () => setCount('[data-cart-count]', cartQty());
function cartAdd(id, q = 1) { const c = store.get(); c[id] = (c[id] || 0) + q; store.set(c); syncCartCount(); }
function cartSet(id, q) { const c = store.get(); if (q > 0) c[id] = q; else delete c[id]; store.set(c); syncCartCount(); renderCart(); }
syncCartCount();

document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) {
    e.preventDefault();
    const q = add.classList.contains('btn') ? +(document.querySelector('[data-qty]')?.value || 1) : 1;
    cartAdd(+add.dataset.add, q);
    if (add.classList.contains('add-btn')) { add.classList.add('is-added'); add.innerHTML = icon('check'); }
    toast('Товар добавлен в корзину');
  }
  const f = e.target.closest('[data-fav]');
  if (f) { e.preventDefault(); f.classList.toggle('is-on'); fav += f.classList.contains('is-on') ? 1 : -1; setCount('[data-fav-count]', fav); }
  const qb = e.target.closest('[data-qty-btn]');
  if (qb) { const i = document.querySelector('[data-qty]'); i.value = Math.max(1, +i.value + +qb.dataset.qtyBtn); }
  const cq = e.target.closest('[data-cart-qty]');
  if (cq) { const [id, d] = cq.dataset.cartQty.split(':'); cartSet(id, (store.get()[id] || 0) + +d); }
  const del = e.target.closest('[data-cart-del]');
  if (del) { cartSet(del.dataset.cartDel, 0); toast('Товар удалён из корзины'); }
  const demo = e.target.closest('[data-cart-demo]');
  if (demo) { store.set({ 1: 1, 6: 2, 7: 1 }); syncCartCount(); renderCart(); }
});

function renderCart() {
  const root = document.querySelector('[data-cart]'); if (!root) return;
  const c = store.get();
  const items = Object.entries(c).map(([id, q]) => ({ p: PRODUCTS.find(x => x.id === +id), q })).filter(x => x.p && x.p.price);
  const sub = items.reduce((s, x) => s + x.p.price * x.q, 0);
  const qty = items.reduce((s, x) => s + x.q, 0);
  const listEl = root.querySelector('[data-cart-list]');
  const layout = root.querySelector('[data-cart-layout]');
  const empty = root.querySelector('[data-cart-empty]');
  layout.hidden = !items.length; empty.hidden = !!items.length;
  document.querySelectorAll('[data-cart-qty-label]').forEach(el => (el.textContent = qty));
  if (!items.length) return;
  listEl.innerHTML = items.map(({ p, q }) => `
    <article class="card cart-item">
      <a class="cart-item__img" href="${PRODUCT_URL}"><img src="${SITE.img}${p.img}" alt=""></a>
      <div><a class="cart-item__title" href="${PRODUCT_URL}">${p.title}</a><div class="cart-item__unit">${p.brand} · ${fmt(p.price)} ₽ / шт</div></div>
      <div class="qty"><button type="button" data-cart-qty="${p.id}:-1" aria-label="Меньше">−</button><input value="${q}" readonly aria-label="Количество"><button type="button" data-cart-qty="${p.id}:1" aria-label="Больше">+</button></div>
      <div class="cart-item__sum">${fmt(p.price * q)} ₽</div>
      <button class="cart-item__del" type="button" data-cart-del="${p.id}" aria-label="Удалить">${icon('x')}</button>
    </article>`).join('');
  const method = root.querySelector('input[name=delivery]:checked');
  let ship = method ? +method.dataset.cost : 0;
  let shipText = ship ? fmt(ship) + ' ₽' : 'Бесплатно';
  if (method?.value === 'courier' && sub >= FREE_FROM) { ship = 0; shipText = 'Бесплатно'; }
  if (method?.value === 'cdek') { shipText = 'По тарифу СДЭК'; ship = 0; }
  root.querySelector('[data-sum-sub]').textContent = fmt(sub) + ' ₽';
  root.querySelector('[data-sum-ship]').textContent = shipText;
  root.querySelector('[data-sum-total]').textContent = fmt(sub + ship) + ' ₽';
  const left = Math.max(0, FREE_FROM - sub);
  root.querySelector('[data-free-bar]').style.width = Math.min(100, (sub / FREE_FROM) * 100) + '%';
  root.querySelector('[data-free-text]').innerHTML = left ? `До бесплатной доставки по СПб осталось <b>${fmt(left)} ₽</b>` : '<b>Доставка по СПб — бесплатно</b>';
}
document.addEventListener('change', e => { if (e.target.name === 'delivery') renderCart(); });
document.addEventListener('submit', e => {
  const f = e.target.closest('[data-checkout]'); if (!f) return;
  e.preventDefault(); e.stopImmediatePropagation();
  const no = 'AK-' + String(Date.now()).slice(-6);
  store.set({}); syncCartCount();
  // отдельная страница «Спасибо» — на ней срабатывает цель Метрики «Заказ оформлен»
  location.href = '/armor-key-preview/thanks/?order=' + no;
}, true);
renderCart();

// табы
document.querySelectorAll('[data-tabs]').forEach(root => {
  const btns = root.querySelectorAll('.tabs__nav button'), panels = root.querySelectorAll('.tabs__panel');
  btns.forEach((b, i) => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('is-active')); panels.forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); panels[i].classList.add('is-active');
  }));
});

// галерея
document.querySelectorAll('.gallery__thumbs button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.gallery__thumbs button').forEach(x => x.classList.remove('is-active'));
  b.classList.add('is-active');
  document.querySelector('.gallery__main img').src = b.querySelector('img').src;
}));

// фильтры каталога (клиентская демо-фильтрация; в Битриксе — catalog.smart.filter)
const grid = document.querySelector('[data-catalog]');
if (grid) {
  const sec = grid.dataset.catalog;
  const base = PRODUCTS.filter(p => !sec || (p.sec + '/').startsWith(sec + '/'));
  const brandBox = document.querySelector('[data-f-brands]');
  if (brandBox) {
    const brands = [...new Set(base.map(p => p.brand))].sort((a, b) => brandRank(a) - brandRank(b) || a.localeCompare(b, 'ru'));
    brandBox.innerHTML = brands.map(b => `<label><input type="checkbox" value="${b}" data-f-brand> ${b} <span>${base.filter(p => p.brand === b).length}</span></label>`).join('');
    brandBox.closest('details').hidden = brands.length < 2;
  }
  const empty = `<div class="empty empty--cta"><span class="ico ico--brass">${icon('camera')}</span><h3>Подберём модель под вашу дверь</h3><p>Наличие и цены в этом разделе уточняйте у мастера: пришлите фото замка или двери — ответим за 10 минут.</p><div class="hero__actions"><a class="btn btn--primary" href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}Отправить фото</a><a class="btn btn--ghost" href="#" data-modal="callback">Заказать звонок</a></div></div>`;
  const render = () => {
    const brands = [...document.querySelectorAll('[data-f-brand]:checked')].map(i => i.value);
    const min = +document.querySelector('[data-f-min]').value || 0;
    const max = +document.querySelector('[data-f-max]').value || Infinity;
    const onlyPrice = document.querySelector('[data-f-price]')?.checked;
    const sort = document.querySelector('[data-sort]').value;
    let list = base.filter(p => (!brands.length || brands.includes(p.brand)) && (!onlyPrice || p.price) && (!p.price || (p.price >= min && p.price <= max)));
    if (sort === 'asc') list.sort((a, b) => (a.price || 1e9) - (b.price || 1e9));
    if (sort === 'desc') list.sort((a, b) => (b.price || 0) - (a.price || 0));
    grid.innerHTML = list.length ? list.map(productCard).join('') : (base.length ? '<div class="empty">Ничего не нашлось — попробуйте изменить фильтры</div>' : empty);
    document.querySelector('[data-found]').textContent = list.length;
    const toolbar = document.querySelector('.catalog'); if (toolbar) toolbar.classList.toggle('catalog--empty', !base.length);
  };
  document.querySelector('.filters')?.addEventListener('input', render);
  document.querySelector('[data-sort]')?.addEventListener('input', render);
  document.querySelector('[data-f-reset]')?.addEventListener('click', () => { document.querySelectorAll('.filters input[type=checkbox]').forEach(i => (i.checked = false)); document.querySelectorAll('.filters input[type=number]').forEach(i => (i.value = '')); render(); });
  document.querySelector('.filters-toggle')?.addEventListener('click', () => document.querySelector('.filters').classList.toggle('is-open'));
  render();
}

// появление при скролле
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' }) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

// поиск по сайту (в Битриксе — компонент search.page)
const searchOut = document.querySelector('[data-search-results]');
if (searchOut) {
  let pagesIdx = [];
  try { pagesIdx = JSON.parse(document.getElementById('search-index').textContent); } catch (e) { /* пустой индекс */ }
  const input = document.querySelector('[data-search-input]');
  const norm = s => s.toLowerCase().replace(/ё/g, 'е').replace(/[-«»"()]/g, ' ');
  const run = q => {
    const words = norm(q).split(/\s+/).filter(w => w.length > 1);
    if (!words.length) { searchOut.innerHTML = '<div class="empty">Введите запрос — например, «ключ EVVA» или «вскрытие».</div>'; return; }
    const hit = text => { const t = norm(text); return words.every(w => t.includes(w.slice(0, Math.max(3, w.length - 2)))); };
    const prods = PRODUCTS.filter(p => hit(p.title + ' ' + p.brand));
    // совпадения в заголовке важнее, чем в описании
    const score = p => words.reduce((s, w) => s + (norm(p.t).includes(w.slice(0, Math.max(3, w.length - 2))) ? 3 : 0), 0);
    const pages = pagesIdx.filter(p => hit(p.t + ' ' + p.d)).sort((a, b) => score(b) - score(a));
    searchOut.innerHTML = (pages.length || prods.length) ? `
      <p class="text-muted" style="margin-bottom:24px">По запросу «${q.replace(/</g, '&lt;')}» найдено: страниц — ${pages.length}, товаров — ${prods.length}</p>
      ${pages.length ? `<h2 class="h3" style="margin-bottom:12px">Страницы</h2><div class="search-pages">${pages.slice(0, 20).map(p => `<a class="card card--hover search-hit" href="${p.u}"><b>${p.t}</b><span>${p.d}</span></a>`).join('')}</div>` : ''}
      ${prods.length ? `<h2 class="h3" style="margin:36px 0 12px">Товары</h2><div class="grid grid-4">${prods.map(productCard).join('')}</div>` : ''}`
      : `<div class="empty empty--cta"><span class="ico ico--brass">${icon('search')}</span><h3>Ничего не нашлось</h3><p>Попробуйте другой запрос или спросите мастера — подберём нужное по фото.</p><div class="hero__actions"><a class="btn btn--primary" href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}Спросить в WhatsApp</a><a class="btn btn--ghost" href="/armor-key-preview/catalog/">Открыть каталог</a></div></div>`;
  };
  const q0 = new URLSearchParams(location.search).get('q') || '';
  if (input) { input.value = q0; if (!q0) input.focus(); }
  run(q0);
}

// страница «Спасибо»: номер заказа из адреса (цель Метрики вешается здесь)
const thanks = document.querySelector('[data-thanks]');
if (thanks) {
  const no = new URLSearchParams(location.search).get('order');
  if (no && /^AK-\d{6}$/.test(no)) {
    thanks.querySelector('[data-thanks-title]').textContent = `Заказ ${no} принят`;
    thanks.querySelector('[data-thanks-text]').textContent = 'Менеджер позвонит в рабочее время, чтобы подтвердить наличие и время доставки.';
  }
}

/* --- Подбор цилиндра по размеру (раздел «Цилиндровые механизмы») ----------
   Демо-данные серий. На проде — свойства товаров инфоблока (длина A/B, тип, класс защиты)
   и catalog.smart.filter; состояние подбора хранится в адресе: #podbor=kv-35-45 */
const CYL_SERIES = [
  { brand: 'EVVA', series: 'MCS', lvl: 3, f: [1, 1, 1, 1], note: 'Магнитные роторы в ключе: механически копию не сделать.', base: null, max: 70, stock: 'Под заказ', sec: 'tsilindrovyy-mekhanizm-evva-avstriya' },
  { brand: 'EVVA', series: '4KS', lvl: 3, f: [1, 1, 1, 1], note: 'Четыре кодовые кривые на ключе, дубликаты — только по карте владельца.', base: null, max: 70, stock: 'Под заказ', sec: 'tsilindrovyy-mekhanizm-evva-avstriya' },
  { brand: 'Mul-T-Lock', series: 'MTL-600 Interactive+', lvl: 3, f: [1, 1, 1, 1], note: 'Телескопические штифты «штифт в штифте» и подвижный элемент в ключе.', base: null, max: 70, stock: 'В наличии', sec: 'tsilindrovye-mekhanizmy-mul-t-lock' },
  { brand: 'Mottura', series: 'Champion Pro', lvl: 3, f: [1, 1, 1, 1], note: 'Стальные вставки против высверливания, ключи по карте.', base: 14500, max: 65, stock: 'В наличии', sec: 'tsilindrovyy-mekhanizm-mottura-italiya' },
  { brand: 'EVVA', series: '3KS', lvl: 3, f: [1, 1, 1, 1], note: 'Три кодовые кривые. Дубликат по карте сделаем в мастерской за 10 минут.', base: 21900, max: 70, stock: 'В наличии', sec: 'tsilindrovyy-mekhanizm-evva-avstriya' },
  { brand: 'EVVA', series: 'ICS', lvl: 2, f: [1, 1, 0, 1], note: 'Две кодовые системы в одном ключе — хороший баланс цены и защиты.', base: 15900, max: 70, stock: 'В наличии', sec: 'tsilindrovyy-mekhanizm-evva-avstriya' },
  { brand: 'Mul-T-Lock', series: 'Classic', lvl: 2, f: [1, 1, 0, 1], note: 'Проверенная классика с телескопическими штифтами.', base: 12800, max: 70, stock: 'В наличии', sec: 'tsilindrovye-mekhanizmy-mul-t-lock' },
  { brand: 'Mottura', series: 'Champion C38', lvl: 2, f: [1, 1, 0, 1], note: 'Защита от бампинга и высверливания, 5 ключей в комплекте.', base: 9800, max: 65, stock: 'В наличии', sec: 'tsilindrovyy-mekhanizm-mottura-italiya' },
  { brand: 'Cisa', series: 'Asix P8', lvl: 2, f: [1, 1, 1, 0], note: 'Ключи только по карте, недорогая замена штатной личинки.', base: 8900, max: 60, stock: 'Под заказ', sec: 'tsilindrovyy-mekhanizm-cisa-italiya' },
  { brand: 'Kale Kilit', series: '164 BNE', lvl: 1, f: [1, 0, 0, 0], note: 'Перфорированный ключ, защита от бампинга. Для тамбура и подсобки.', base: 3200, max: 60, stock: 'В наличии', sec: 'tsilindrovyy-mekhanizm-kale-kilit-turtsiya' },
  { brand: 'Securemme', series: 'K2', lvl: 1, f: [1, 0, 0, 0], note: 'Простая и надёжная замена китайской личинки.', base: 2900, max: 60, stock: 'В наличии', sec: 'securemme' },
  { brand: 'Апекс', series: 'Premier XR', lvl: 1, f: [0, 1, 0, 0], note: 'Закалённые вставки от высверливания, 5 ключей.', base: 2300, max: 50, stock: 'В наличии', sec: 'apeks' }
];
const CYL_FEATS = ['Бампинг', 'Высверливание', 'Копия ключа', 'Излом'];
const CYL_LVL = {
  3: ['Высокосекретные', 'Для квартиры и дома, где важна максимальная защита. Ключ не скопировать без карты владельца.'],
  2: ['Защищённые', 'Защита от основных способов вскрытия. Подходят большинству входных дверей.'],
  1: ['Базовые', 'Тамбур, подсобка, временная замена после потери ключей.']
};
const CYL_TYPE = { kk: 'ключ — ключ', kv: 'ключ — вертушка' };

function cylSvg(a, b, type) {
  const W = 600, len = a + b, s = Math.min(3.4, (W - 150) / len), x0 = W / 2 - (len * s) / 2, xc = x0 + a * s, x1 = x0 + len * s;
  const y = 64, h = 40, gap = 5 * s; // корпус и вырез под кулачок
  const dim = (xa, xb, yy, label) => `<line x1="${xa}" y1="${yy}" x2="${xb}" y2="${yy}" class="cyl-dim"/>
    <path d="M${xa} ${yy - 5}v10M${xb} ${yy - 5}v10" class="cyl-dim"/>
    <text x="${(xa + xb) / 2}" y="${yy - 8}" class="cyl-lbl">${label}</text>`;
  const knob = type === 'kv'
    ? `<rect x="${x1}" y="${y + 15}" width="14" height="10" rx="2" class="cyl-steel"/><rect x="${x1 + 12}" y="${y - 6}" width="18" height="52" rx="7" class="cyl-knob"/>`
    : `<rect x="${x1 - 5}" y="${y + 16}" width="3" height="8" rx="1" class="cyl-hole"/>`;
  return `<svg viewBox="0 0 ${W} 200" role="img" aria-label="Схема цилиндра ${a} + ${b} мм, ${CYL_TYPE[type]}">
    ${dim(x0, x1, 28, `${len} мм`)}
    <line x1="${xc}" y1="${y - 14}" x2="${xc}" y2="${y + h + 52}" class="cyl-axis"/>
    <rect x="${x0}" y="${y}" width="${xc - x0 - gap}" height="${h}" rx="5" class="cyl-steel"/>
    <rect x="${xc + gap}" y="${y}" width="${x1 - xc - gap}" height="${h}" rx="5" class="cyl-steel"/>
    <rect x="${xc - gap - 1}" y="${y + 4}" width="${gap * 2 + 2}" height="${h - 8}" class="cyl-core"/>
    <path d="M${xc - 9} ${y + h - 2}h18l-3 22h-12z" class="cyl-cam"/>
    <circle cx="${xc}" cy="${y + h + 36}" r="5" class="cyl-screw"/>
    <rect x="${x0 + 2}" y="${y + 16}" width="3" height="8" rx="1" class="cyl-hole"/>
    <path d="M${x0 - 2} ${y + 20}h-24" class="cyl-blade"/><rect x="${x0 - 58}" y="${y + 6}" width="34" height="28" rx="12" class="cyl-key"/>
    ${knob}
    ${dim(x0, xc, y + h + 70, `A = ${a}`)}${dim(xc, x1, y + h + 70, `B = ${b}`)}
  </svg>`;
}

function cylPrice(sr, a, b, type) {
  if (!sr.base) return null;
  const k = 1 + (a + b - 70) / 10 * 0.06 + (type === 'kv' ? 0.12 : 0);
  return Math.round(sr.base * k / 10) * 10;
}

const picker = document.querySelector('[data-cyl-picker]');
if (picker) {
  const st = { type: 'kk', a: 35, b: 35 };
  const MIN = 30, MAX = 70;
  const visual = picker.querySelector('[data-cyl-visual]'), out = picker.querySelector('[data-results]');
  const secUrl = sr => `/armor-key-preview/catalog/tsilindrovye-mekhanizmy/${sr.sec}/`;
  const card = sr => {
    const p = cylPrice(sr, st.a, st.b, st.type);
    return `<article class="card cyl-card">
      <div class="cyl-card__top"><span class="product__brand">${sr.brand}</span><span class="badge ${sr.stock === 'В наличии' ? 'badge--stock' : 'badge--hit'}">${sr.stock}</span></div>
      <h4 class="cyl-card__name">${sr.brand} ${sr.series}</h4>
      <div class="cyl-card__size">${st.a} + ${st.b} мм · ${CYL_TYPE[st.type]}</div>
      <p class="cyl-card__note">${sr.note}</p>
      <ul class="cyl-feats" aria-label="Защита">${CYL_FEATS.map((t, i) => `<li class="${sr.f[i] ? 'is-on' : ''}">${icon(sr.f[i] ? 'check' : 'x')}${t}</li>`).join('')}</ul>
      <div class="cyl-card__foot">
        ${p ? `<div><span class="cyl-card__from">ориентир</span><div class="price">${fmt(p)} ₽</div></div>` : `<div class="price price--request">Цена по запросу</div>`}
        <a class="btn btn--ghost btn--sm" href="${secUrl(sr)}">Серия</a>
      </div>
      <button class="btn btn--soft btn--block btn--sm" type="button" data-modal="callback">Узнать наличие</button>
    </article>`;
  };
  const render = (push = true) => {
    picker.querySelectorAll('[data-type]').forEach(btn => btn.setAttribute('aria-checked', btn.dataset.type === st.type));
    ['a', 'b'].forEach(k => {
      picker.querySelector(`[data-out="${k}"]`).textContent = st[k];
      picker.querySelector(`[data-step="${k}:-5"]`).disabled = st[k] <= MIN;
      picker.querySelector(`[data-step="${k}:5"]`).disabled = st[k] >= MAX;
    });
    picker.querySelector('[data-out="len"]').textContent = st.a + st.b;
    picker.querySelector('[data-label-b]').textContent = st.type === 'kv' ? 'сторона вертушки' : 'внутри';
    visual.innerHTML = cylSvg(st.a, st.b, st.type);
    const fit = CYL_SERIES.filter(sr => Math.max(st.a, st.b) <= sr.max);
    out.innerHTML = `<div class="picker__summary"><b>Цилиндр ${st.a} + ${st.b} мм (${st.a + st.b} мм), ${CYL_TYPE[st.type]}</b><span class="text-muted">подходит серий: ${fit.length}</span></div>` +
      (fit.length ? [3, 2, 1].map(l => {
        const list = fit.filter(sr => sr.lvl === l).sort((x, y) => brandRank(x.brand) - brandRank(y.brand));
        return list.length ? `<div class="cyl-group">
          <div class="cyl-group__head"><span class="cyl-lvl" role="img" aria-label="Уровень защиты ${l} из 3">${[1, 2, 3].map(i => `<i class="${i <= l ? 'on' : ''}"></i>`).join('')}</span><div><h3 class="h3">${CYL_LVL[l][0]}</h3><p class="text-muted">${CYL_LVL[l][1]}</p></div></div>
          <div class="grid grid-4 cyl-grid">${list.map(card).join('')}</div></div>` : '';
      }).join('') : `<div class="empty empty--cta"><span class="ico ico--brass">${icon('camera')}</span><h3>Такой размер делаем под заказ</h3><p>Пришлите фото старого цилиндра — подберём модель и срок поставки.</p><div class="hero__actions"><a class="btn btn--primary" href="${SITE.wa}" target="_blank" rel="noopener">${icon('wa')}Отправить фото</a></div></div>`) +
      `<div class="picker__service"><span class="ico ico--brass">${icon('wrench')}</span><div><b>Поменяем личинку за 30 минут</b><p class="text-muted">Мастер привезёт цилиндр нужного размера и установит его. Замена личинки — 4 500 ₽, выезд входит в стоимость.</p></div><a class="btn btn--brass" href="/armor-key-preview/services/zamena-zamkov/">Вызвать мастера</a></div>`;
    if (push) history.replaceState(null, '', `#podbor=${st.type}-${st.a}-${st.b}`);
  };
  const fromHash = () => {
    const m = location.hash.match(/^#podbor=(kk|kv)-(\d{2})-(\d{2})$/);
    if (!m) return false;
    const clamp = v => Math.min(MAX, Math.max(MIN, Math.round(+v / 5) * 5));
    Object.assign(st, { type: m[1], a: clamp(m[2]), b: clamp(m[3]) });
    return true;
  };
  picker.addEventListener('click', e => {
    const t = e.target.closest('[data-type]');
    if (t) { st.type = t.dataset.type; render(); }
    const s = e.target.closest('[data-step]');
    if (s) { const [k, d] = s.dataset.step.split(':'); st[k] = Math.min(MAX, Math.max(MIN, st[k] + +d)); render(); }
  });
  window.addEventListener('hashchange', () => { if (fromHash()) { render(); picker.scrollIntoView({ behavior: 'smooth', block: 'start' }); } });
  // без #podbor в адресе не трогаем URL: canonical и ссылки остаются чистыми
  render(fromHash());
}
