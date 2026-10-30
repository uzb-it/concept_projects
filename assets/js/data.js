/* =========================================================
   CONCEPT PROJECTS — content
   ========================================================= */
window.CP_MATERIALS = {
  travertine: { ru: 'Травертин', uz: 'Travertin', en: 'Travertine' },
  walnut:     { ru: 'Орех', uz: 'Yong‘oq', en: 'Walnut' },
  oak:        { ru: 'Дуб', uz: 'Eman', en: 'Oak' },
  brass:      { ru: 'Латунь', uz: 'Latun', en: 'Brass' },
  bronze:     { ru: 'Бронза', uz: 'Bronza', en: 'Bronze' },
  bordeaux:   { ru: 'Бордо, лак', uz: 'Bordo lak', en: 'Bordeaux lacquer' },
  rosso:      { ru: 'Мрамор Rosso', uz: 'Rosso marmar', en: 'Rosso marble' },
  verde:      { ru: 'Мрамор Verde', uz: 'Verde marmar', en: 'Verde marble' },
  onyx:       { ru: 'Оникс', uz: 'Oniks', en: 'Onyx' },
  boucle:     { ru: 'Букле', uz: 'Bukle', en: 'Bouclé' },
  linen:      { ru: 'Лён', uz: 'Zig‘ir', en: 'Linen' },
  velvet:     { ru: 'Бархат', uz: 'Baxmal', en: 'Velvet' },
  plaster:    { ru: 'Декоративная штукатурка', uz: 'Dekorativ suvoq', en: 'Lime plaster' },
  stucco:     { ru: 'Лепнина', uz: 'Gips naqsh', en: 'Stucco moulding' },
  terracotta: { ru: 'Терракота', uz: 'Terrakota', en: 'Terracotta' },
  leather:    { ru: 'Кожа', uz: 'Charm', en: 'Leather' },
  glass:      { ru: 'Рифлёное стекло', uz: 'Rifli shisha', en: 'Fluted glass' },
  steel:      { ru: 'Чёрный металл', uz: 'Qora metall', en: 'Blackened steel' },
  silk:       { ru: 'Шёлковое панно', uz: 'Ipak panno', en: 'Silk panel' },
  wool:       { ru: 'Шерстяной ковёр', uz: 'Jun gilam', en: 'Wool rug' }
};

window.CP_PROJECTS = [
  { slug: 'grand-dining', img: 'p07', name: 'Grand Dining', year: 2026,
    cat: { ru: 'Столовая', uz: 'Oshxona-zal', en: 'Dining room' },
    mat: ['onyx', 'velvet', 'brass', 'wool', 'walnut'],
    desc: {
      ru: 'Зал для приёмов на двенадцать персон. Стена из подсвеченного оникса, люстра из сотни латунных подвесов и ковёр с рисунком срезов камня — пространство, в котором ужин становится событием.',
      uz: 'O‘n ikki kishilik qabul zali. Yoritilgan oniks devor, yuzlab latun osma chiroqlar va tosh kesimi naqshli gilam — kechki ovqat voqeaga aylanadigan makon.',
      en: 'A reception room for twelve. A backlit onyx wall, a chandelier of a hundred brass pendants and a rug patterned like cut stone — a room where dinner becomes an occasion.'
    } },
  { slug: 'terracotta-master', img: 'p02', name: 'Terracotta Master', year: 2026,
    cat: { ru: 'Спальня', uz: 'Yotoqxona', en: 'Master bedroom' },
    mat: ['terracotta', 'travertine', 'stucco', 'brass', 'linen'],
    desc: {
      ru: 'Мастер-спальня, где классическая лепнина встречается с тёплой терракотой. Медиастена из травертина с латунными акцентами скрывает технику и подсвечивает фактуру камня.',
      uz: 'Klassik gips naqsh issiq terrakota bilan uchrashadigan asosiy yotoqxona. Latun aksentli travertin media-devor texnikani yashiradi va tosh teksturasini yoritadi.',
      en: 'A master bedroom where classical stucco meets warm terracotta. A travertine media wall with brass accents conceals the technology and lights up the grain of the stone.'
    } },
  { slug: 'silk-road-lounge', img: 'p03', name: 'Silk Road Lounge', year: 2026,
    cat: { ru: 'Гостиная', uz: 'Mehmonxona', en: 'Lounge' },
    mat: ['silk', 'boucle', 'walnut', 'wool', 'bronze'],
    desc: {
      ru: 'Гостиная-диалог с историей региона: расписное шёлковое панно с караваном, скульптурные кресла из букле и мягкий свет, который собирает вечер вокруг низкого столика.',
      uz: 'Mintaqa tarixi bilan suhbatlashuvchi mehmonxona: karvon tasvirlangan ipak panno, bukle haykaltarosh kreslolar va kechani past stol atrofida yig‘uvchi yumshoq yorug‘lik.',
      en: 'A lounge in dialogue with the region’s history: a painted silk panel with a caravan, sculptural bouclé chairs and soft light gathering the evening around a low table.'
    } },
  { slug: 'travertine-suite', img: 'p01', name: 'Travertine Suite', year: 2026,
    cat: { ru: 'Ванная', uz: 'Hammom', en: 'Bathroom' },
    mat: ['travertine', 'bordeaux', 'rosso', 'brass', 'oak'],
    desc: {
      ru: 'Монолит из травертина и лакированная тумба цвета бордо. Ниша с рельефной плиткой и скрытая подсветка превращают утренний ритуал в спа-опыт.',
      uz: 'Travertin monoliti va bordo rangli lakli tumba. Relyefli plitkali tokcha va yashirin yoritish ertalabki marosimni spa tajribasiga aylantiradi.',
      en: 'A travertine monolith and a bordeaux-lacquered vanity. A niche of relief tiles and concealed lighting turn the morning ritual into a spa experience.'
    } },
  { slug: 'inomarka-hayda', img: 'p05', name: 'Inomarka Hayda', year: 2026,
    cat: { ru: 'Шоурум', uz: 'Shourum', en: 'Showroom' },
    mat: ['bordeaux', 'steel', 'glass', 'oak', 'leather'],
    desc: {
      ru: 'Коммерческий шоурум автомобилей: глубокий бордовый фон, ламели из чёрного металла и световые линии на потолке выстраивают сцену, где машина — главный герой.',
      uz: 'Avtomobil shourumi: chuqur bordo fon, qora metall lamellar va shiftdagi yorug‘lik chiziqlari mashina bosh qahramon bo‘lgan sahnani yaratadi.',
      en: 'A commercial car showroom: a deep bordeaux backdrop, blackened-steel louvres and light lines across the ceiling stage the car as the hero.'
    } },
  { slug: 'bordeaux-room', img: 'p06', name: 'Bordeaux Room', year: 2026,
    cat: { ru: 'Спальня', uz: 'Yotoqxona', en: 'Bedroom' },
    mat: ['bordeaux', 'terracotta', 'stucco', 'linen', 'wool'],
    desc: {
      ru: 'Изголовье из вертикальной мозаики в оттенках бордо и терракоты, тёмные колонны и мягкий текстиль. Спальня-шкатулка для тех, кто ценит тишину.',
      uz: 'Bordo va terrakota tuslaridagi vertikal mozaikali bosh qism, to‘q ustunlar va yumshoq to‘qimachilik. Sukunatni qadrlovchilar uchun quti-yotoqxona.',
      en: 'A headboard of vertical mosaic in bordeaux and terracotta, dark columns and soft textiles. A jewel-box bedroom for those who value silence.'
    } },
  { slug: 'bronze-living', img: 'p04', name: 'Bronze Living', year: 2026,
    cat: { ru: 'Гостиная', uz: 'Mehmonxona', en: 'Living room' },
    mat: ['bronze', 'walnut', 'travertine', 'boucle', 'steel'],
    desc: {
      ru: 'Гостиная, объединённая со столовой. Шпонированная стена с бронзовыми вставками и паркет ёлочкой задают ритм, а скульптурные стулья — характер.',
      uz: 'Oshxona bilan birlashtirilgan mehmonxona. Bronza qo‘shimchali shponli devor va archa parket ritm beradi, haykaltarosh stullar esa xarakter.',
      en: 'A living room joined to the dining area. A veneered wall with bronze inlays and herringbone parquet set the rhythm; sculptural chairs bring the character.'
    } },
  { slug: 'rosso-powder-room', img: 'p08', name: 'Rosso Powder Room', year: 2026,
    cat: { ru: 'Санузел', uz: 'Sanuzel', en: 'Powder room' },
    mat: ['rosso', 'travertine', 'bordeaux', 'brass', 'leather'],
    desc: {
      ru: 'Гостевой санузел как драгоценность: столешница из красного мрамора, зеркало на кожаных ремнях и стена цвета бордо с латунной фурнитурой.',
      uz: 'Qimmatbaho tosh kabi mehmon sanuzeli: qizil marmar stoleshnitsa, charm tasmalardagi oyna va latun furniturali bordo devor.',
      en: 'A guest powder room treated as a jewel: a red marble counter, a mirror hung on leather straps and a bordeaux wall with brass fittings.'
    } },
  { slug: 'verde-marble', img: 'p09', name: 'Verde Marble', year: 2025,
    cat: { ru: 'Гостиная', uz: 'Mehmonxona', en: 'Living room' },
    mat: ['verde', 'onyx', 'oak', 'boucle', 'brass'],
    desc: {
      ru: 'Светлая гостиная с акцентной нишей из зелёного мрамора. Классические карнизы, мягкие формы мебели и подсвеченный камень создают спокойную роскошь.',
      uz: 'Yashil marmar aksent tokchali yorug‘ mehmonxona. Klassik karnizlar, yumshoq mebel shakllari va yoritilgan tosh sokin hashamat yaratadi.',
      en: 'A light living room with an accent niche in green marble. Classical cornices, soft furniture forms and backlit stone create a calm kind of luxury.'
    } },
  { slug: 'clay-and-linen', img: 'p11', name: 'Clay & Linen', year: 2025,
    cat: { ru: 'Спальня', uz: 'Yotoqxona', en: 'Bedroom' },
    mat: ['terracotta', 'linen', 'stucco', 'oak', 'glass'],
    desc: {
      ru: 'Спальня в глиняных тонах: стена с молдингами, авторское полотно и подвесные светильники из стекла. Всё подчинено одному — ощущению тепла.',
      uz: 'Loy tuslaridagi yotoqxona: moldingli devor, mualliflik rasmi va shisha osma chiroqlar. Hammasi bitta narsaga bo‘ysunadi — iliqlik hissi.',
      en: 'A bedroom in clay tones: a moulded wall, an original canvas and glass pendant lights. Everything serves a single feeling — warmth.'
    } },
  { slug: 'plaster-bath', img: 'p10', name: 'Plaster Bath', year: 2025,
    cat: { ru: 'Ванная', uz: 'Hammom', en: 'Bathroom' },
    mat: ['plaster', 'oak', 'steel', 'travertine', 'linen'],
    desc: {
      ru: 'Ванная с фактурной известковой штукатуркой, овальным зеркалом с подсветкой и тумбой со скруглёнными углами. Минимализм, который хочется трогать.',
      uz: 'Teksturali ohak suvoqli, yoritilgan oval oynali va yumaloq burchakli tumbali hammom. Qo‘l tekkizgingiz keladigan minimalizm.',
      en: 'A bathroom of textured lime plaster, a backlit oval mirror and a vanity with softened corners. Minimalism you want to touch.'
    } },
  { slug: 'quiet-study', img: 'p12', name: 'Quiet Study', year: 2025,
    cat: { ru: 'Кабинет', uz: 'Kabinet', en: 'Study' },
    mat: ['oak', 'linen', 'plaster', 'glass', 'leather'],
    desc: {
      ru: 'Компактный кабинет, встроенный в стену: рифлёные фасады, открытые полки и тёплая подсветка. Рабочее место, которое не спорит с интерьером.',
      uz: 'Devorga o‘rnatilgan ixcham kabinet: rifli fasadlar, ochiq javonlar va iliq yoritish. Interyer bilan bahslashmaydigan ish joyi.',
      en: 'A compact study built into the wall: fluted fronts, open shelving and warm light. A workplace that does not argue with the interior.'
    } }
];

/* Translations. Russian defaults live in the HTML and are captured at runtime;
   keys used only from JS carry their Russian text here. */
window.CP_I18N = {
  ru: {
    'f.next': 'Далее', 'f.send': 'Отправить', view: 'Смотреть', open: 'Открыть', play: 'Смотреть',
    'pr.cat': 'Тип', 'pr.year': 'Год', 'pr.loc': 'Локация', 'pr.locv': 'Конфиденциально', 'pr.scope': 'Этапы',
    'pr.palette': 'Палитра материалов', 'pr.palette2': 'Цвета, извлечённые из проекта', 'pr.details': 'Детали',
    'pr.next': 'Следующий проект', 'pr.back': 'Все проекты', 'pr.cta': 'Хотите такой же уровень?', 'pr.cta2': 'Оставить заявку'
  },
  uz: {
    'nav.works': 'Loyihalar', 'nav.method': 'Uslub', 'nav.founder': 'Asoschi', 'nav.geo': 'Geografiya',
    'cta.short': 'Private access', 'clock': 'Toshkent',
    'hero.est': 'Xususiy byuro · Toshkent', 'hero.eyebrow': 'Concept Projects — xususiy arxitektura byurosi',
    'hero.t1': 'Takrorlab', 'hero.t2': 'bo‘lmaydigan', 'hero.t3': 'arxitektura', 'hero.scroll': 'Pastga',
    'tag.manifest': 'Manifest',
    'manifest': 'Biz loyiha sotmaymiz. Biz kim bilan yaratishni tanlaymiz. Har bir obyekt — birinchi chiziqdan oxirgi chiroqqacha — bitta jamoa qo‘lidan o‘tadi: arxitektura, dizayn, qurilish va nazorat. Shuning uchun yiliga faqat bir nechta loyiha olamiz.',
    'founder.role': 'Asoschi, arxitektor',
    'stat.audience': 'asoschining auditoriyasi', 'stat.countries': 'mamlakat: xarid va amalga oshirish', 'stat.stages': 'bosqich — yagona javobgarlik', 'stat.private': 'bitta mijoz — bitta jamoa',
    'tag.works': 'Tanlangan loyihalar', 'works.title': 'Qo‘lda yig‘ilgan<br>interyerlar', 'works.lead': 'Har bir makon — yagona g‘oya: tosh, yog‘och, metall va yorug‘lik aniq inson uchun tanlangan.',
    'tag.method': 'Uslub', 'method.title': 'To‘rt so‘z.<br><em>Bitta javobgarlik.</em>',
    'm1': 'Konsepsiya, rejalashtirish, fasadlar. Biz kvadrat metrlardan emas, mijozning hayot tarzidan boshlaymiz.', 'm1a': 'O‘lchov va hududni tahlil', 'm1b': 'Arxitektura konsepsiyasi', 'm1c': 'Ishchi hujjatlar',
    'm2': 'Har bir xonaning fotorealistik vizualizatsiyasi. Materiallar, yorug‘lik, mebel — qurilishdan oldin kelishiladi.', 'm2a': '3D-vizualizatsiya', 'm2b': 'Materiallar tanlovi', 'm2c': 'Yoritish ssenariylari',
    'm3': 'O‘z brigadalarimiz va Xitoy, Turkiya, BAA fabrikalaridan to‘g‘ridan-to‘g‘ri yetkazib berish. Vositachisiz — murosasiz.', 'm3a': 'Kalit topshirish ta’miri', 'm3b': 'Fabrikadan to‘g‘ridan-to‘g‘ri', 'm3c': 'Buyurtma mebel',
    'm4': 'Oxirgi vintgacha mualliflik nazorati. Natija vizualizatsiyaga mos keladi — bu bizning majburiyatimiz.', 'm4a': 'Mualliflik nazorati', 'm4b': 'Haftalik hisobotlar', 'm4c': 'Obyektni topshirish',
    'expand.k': 'Faqat xususiy buyurtmalar', 'expand.t': 'Har bir loyiha — <em>yagona nusxada</em>',
    'tag.founder': 'Asoschi', 'founder.role2': 'Dizayner · Arxitektor · Concept Projects asoschisi',
    'founder.bio': 'Umar byuroning har bir loyihasini shaxsan boshqaradi — birinchi eskizdan kalit topshirishgacha. Mukammal material sari yo‘li Xanchjou va Guanchjou fabrikalari, Turkiya, Dubay va Saudiya Arabistoni ustaxonalaridan o‘tadi. Yarim milliondan ortiq odam uning ishini kuzatadi — lekin u yiliga faqat bir nechta mijoz bilan ishlaydi.',
    'tag.geo': 'Geografiya', 'geo.title': 'Butun <em>dunyodan</em><br>materiallar', 'geo.lead': 'Har bir pozitsiyani fabrikalarda shaxsan tanlaymiz — va O‘zbekistonga mahalliy bozorda yo‘q narsalarni olib kelamiz.',
    'access.title': 'Hamkorlik<br>uchun <em>ariza</em>', 'access.lead': 'Biz cheklangan miqdorda loyiha qabul qilamiz. O‘zingiznikini aytib bering — shaxsan javob beramiz.',
    'f.q1': 'Qanday obyekt?', 'f.flat': 'Kvartira', 'f.house': 'Xususiy uy', 'f.comm': 'Tijorat', 'f.arch': 'Arxitektura',
    'f.q2': 'Obyekt maydoni', 'f.s1': 'Dizayn-loyiha', 'f.s2': 'Kalit topshirish', 'f.s3': 'Architect → Control',
    'f.q3': 'Sizga qanday murojaat qilaylik?', 'f.name': 'Ism', 'f.phone': 'Telefon',
    'f.done': 'Ariza qabul qilindi.', 'f.done2': '24 soat ichida siz bilan shaxsan bog‘lanamiz.',
    'f.back': 'Orqaga', 'f.next': 'Davom etish', 'f.send': 'Yuborish',
    'footer.call': 'To‘g‘ridan-to‘g‘ri aloqa', 'footer.top': 'Yuqoriga ↑', view: 'Ko‘rish', open: 'Ochish', play: 'Ko‘rish',
    'pr.cat': 'Turi', 'pr.year': 'Yil', 'pr.loc': 'Joylashuv', 'pr.locv': 'Maxfiy', 'pr.scope': 'Bosqichlar',
    'pr.palette': 'Materiallar palitrasi', 'pr.palette2': 'Loyihadan olingan ranglar', 'pr.details': 'Detallar',
    'pr.next': 'Keyingi loyiha', 'pr.back': 'Barcha loyihalar', 'pr.cta': 'Shunday darajani xohlaysizmi?', 'pr.cta2': 'Ariza qoldirish'
  },
  en: {
    'nav.works': 'Works', 'nav.method': 'Method', 'nav.founder': 'Founder', 'nav.geo': 'Geography',
    'cta.short': 'Private access', 'clock': 'Tashkent',
    'hero.est': 'Private studio · Tashkent', 'hero.eyebrow': 'Concept Projects — private architecture studio',
    'hero.t1': 'Architecture', 'hero.t2': 'that cannot', 'hero.t3': 'be repeated', 'hero.scroll': 'Scroll',
    'tag.manifest': 'Manifesto',
    'manifest': 'We don’t sell projects. We choose whom to create them with. Every space — from the first line to the last light fixture — passes through one team: architecture, design, construction and control. That is why we take on only a few projects a year.',
    'founder.role': 'Founder, architect',
    'stat.audience': 'founder’s audience', 'stat.countries': 'countries: sourcing & delivery', 'stat.stages': 'stages, one responsibility', 'stat.private': 'one client — one team',
    'tag.works': 'Selected works', 'works.title': 'Interiors,<br>assembled by hand', 'works.lead': 'Every space is a single idea: stone, wood, metal and light chosen for one particular person.',
    'tag.method': 'Method', 'method.title': 'Four words.<br><em>One responsibility.</em>',
    'm1': 'Concept, planning, façades. We begin with the client’s way of life — square metres come later.', 'm1a': 'Survey & site analysis', 'm1b': 'Architectural concept', 'm1c': 'Working documentation',
    'm2': 'Photorealistic visualisation of every room. Materials, light and furniture are agreed before construction begins.', 'm2a': '3D visualisation', 'm2b': 'Material curation', 'm2c': 'Lighting scenarios',
    'm3': 'Our own crews and direct supply from factories in China, Türkiye and the UAE. No middlemen — no compromise.', 'm3a': 'Turnkey fit-out', 'm3b': 'Direct factory supply', 'm3c': 'Bespoke furniture',
    'm4': 'Author’s supervision down to the last screw. The result matches the render — that is our commitment.', 'm4a': 'Author’s supervision', 'm4b': 'Weekly reports', 'm4c': 'Handover',
    'expand.k': 'Private commissions only', 'expand.t': 'Every project — <em>a single edition</em>',
    'tag.founder': 'Founder', 'founder.role2': 'Designer · Architect · Founder of Concept Projects',
    'founder.bio': 'Umar personally leads every project of the studio — from the first sketch to handing over the keys. His search for the perfect material runs through factories in Hangzhou and Guangzhou and workshops in Türkiye, Dubai and Saudi Arabia. Over half a million people follow his work — yet he works with only a few clients a year.',
    'tag.geo': 'Geography', 'geo.title': 'Materials from<br>across the <em>world</em>', 'geo.lead': 'We select every item at the factory ourselves — and bring to Uzbekistan what the local market does not have.',
    'access.title': 'Request<br>a <em>collaboration</em>', 'access.lead': 'We accept a limited number of projects. Tell us about yours — we will answer personally.',
    'f.q1': 'What kind of property?', 'f.flat': 'Apartment', 'f.house': 'Private house', 'f.comm': 'Commercial', 'f.arch': 'Architecture',
    'f.q2': 'Property area', 'f.s1': 'Design project', 'f.s2': 'Turnkey', 'f.s3': 'Architect → Control',
    'f.q3': 'How should we address you?', 'f.name': 'Name', 'f.phone': 'Phone',
    'f.done': 'Request received.', 'f.done2': 'We will contact you personally within 24 hours.',
    'f.back': 'Back', 'f.next': 'Next', 'f.send': 'Send',
    'footer.call': 'Direct line', 'footer.top': 'Back to top ↑', view: 'View', open: 'Open', play: 'Play',
    'pr.cat': 'Type', 'pr.year': 'Year', 'pr.loc': 'Location', 'pr.locv': 'Confidential', 'pr.scope': 'Stages',
    'pr.palette': 'Material palette', 'pr.palette2': 'Colours extracted from the project', 'pr.details': 'Details',
    'pr.next': 'Next project', 'pr.back': 'All works', 'pr.cta': 'Want this level for your home?', 'pr.cta2': 'Request access'
  }
};

/* ---------------- sections added later: process, compare, reel, partners, reviews, FAQ ---------------- */
Object.assign(window.CP_I18N.ru, { 'stat.h': 'ч' });

Object.assign(window.CP_I18N.uz, {
  'nav.process': 'Jarayon', 'stat.h': 's', 'stat.reply': 'asoschining arizaga shaxsiy javobi',
  'tag.process': 'Jarayon', 'process.title': 'Birinchi uchrashuvdan<br><em>kalitlargacha</em>',
  'process.lead': 'Yetti bosqich, bitta mas’ul. Obyektda nima bo‘layotganini va keyin nima bo‘lishini doim bilasiz.',
  'process.total': '6–14', 'process.totalL': 'oy — odatiy to‘liq sikl*',
  's1': 'Tanishuv va brif', 's1p': 'Umar bilan shaxsiy uchrashuv. Hayot tarzi, odatlar, byudjet va kutilmalarni muhokama qilamiz.', 's1t': '1 hafta',
  's2': 'O‘lchov va rejalashtirish', 's2p': 'Obyektning aniq o‘lchovlari va bir nechta rejalashtirish variantlari.', 's2t': '1–2 hafta',
  's3': 'Konsepsiya va 3D', 's3p': 'Har bir xonaning fotorealistik vizualizatsiyasi — uyni qurilishdan oldin ko‘rasiz.', 's3t': '3–5 hafta',
  's4': 'Ishchi hujjatlar', 's4p': 'Quruvchilar uchun chizmalar: elektrika, yoritish, santexnika, tugunlar va spetsifikatsiyalar.', 's4t': '2–3 hafta',
  's5': 'Fabrikalarda xarid', 's5p': 'Mebel, tosh va yoritgichlarni Xitoy, Turkiya va BAA fabrikalarida shaxsan tanlaymiz.', 's5t': '4–8 hafta',
  's6': 'Qurilish', 's6p': 'O‘z brigadalarimiz, haftalik foto va video hisobotlar, shaffof smeta.', 's6t': '3–8 oy',
  's7': 'Mualliflik nazorati va topshirish', 's7p': 'Oxirgi detalgacha nazorat, dekor, joylashtirish — va kalitlarni topshirish.', 's7t': 'final',
  'process.note': '* Muddatlar taxminiy va obyekt maydoni hamda murakkabligiga bog‘liq.',
  'tag.compare': 'Chizma → Interyer', 'compare.title': 'Har bir chiziq<br><em>haqiqatga</em> aylanadi', 'compare.lead': 'Slayderni torting: chapda — loyiha chiziqlari, o‘ngda — tayyor makon.', 'compare.l': 'Chizma', 'compare.r': 'Interyer',
  'reel.play': 'Filmni ko‘rish',
  'tag.partners': 'Fabrikalar va hamkorlar', 'partners.lead': 'Shaxsan tashrif buyuradigan fabrikalarimiz — loyihadagi har bir pozitsiya qo‘l bilan tekshirilgan bo‘lishi uchun.',
  'pt.sunon': 'Mebel', 'pt.arrow': 'Santexnika va keramika', 'pt.linia': 'Studiya loyihalari', 'pt.tr': 'Tosh va to‘qimachilik', 'pt.dxb': 'Dizayn va yorug‘lik', 'pt.ruh': 'Loyihalarni amalga oshirish',
  'tag.reviews': 'Fikrlar',
  'r1': '«Uyni birinchi devor qurilishidan oldin 3D’da ko‘rdik — va natija rasmga eng mayda detallargacha mos keldi.»', 'r1n': 'Xususiy mijoz', 'r1m': 'Uy · Toshkent',
  'r2': '«Umar biz bilan Guanchjoudagi fabrikaga shaxsan bordi. Bunday e’tiborni hech bir studiyada ko‘rmaganmiz.»', 'r2n': 'Xususiy mijoz', 'r2m': 'Kvartira · Toshkent',
  'r3': '«Haftalik hisobotlar, shaffof smeta va birorta ham buzilgan muddat yo‘q. Shourum kelishilgan kunda ochildi.»', 'r3n': 'Tijorat mijozi', 'r3m': 'Shourum',
  'reviews.more': 'Instagram’dagi video fikrlar ↗',
  'faq.title': 'Ko‘p beriladigan<br><em>savollar</em>',
  'q1': 'Loyiha qancha turadi?', 'a1': 'Har bir obyekt noyob, shuning uchun narx brif va o‘lchovlardan keyin individual hisoblanadi. Aniq smetani ish boshlanishidan oldin olasiz — va u sizning roziligingizsiz o‘zgarmaydi.',
  'q2': 'Ish qancha vaqt oladi?', 'a2': 'Dizayn-loyiha — o‘rtacha 6–10 hafta. Ta’mir va xarid bilan to‘liq sikl — maydon va murakkablikka qarab 6 oydan.',
  'q3': 'Faqat dizayn-loyiha buyurtma qilsa bo‘ladimi?', 'a3': 'Ha. Faqat vizualizatsiya va hujjatlar bilan loyiha yoki Architect → Design → Build → Control to‘liq siklini buyurtma qilishingiz mumkin.',
  'q4': 'Toshkentdan tashqarida ishlaysizmi?', 'a4': 'Ha. Loyihalarni O‘zbekiston bo‘ylab, shuningdek Qozog‘iston, BAA va Saudiya Arabistonida amalga oshiramiz.',
  'q5': 'Mebel va materiallar xaridi qanday bo‘ladi?', 'a5': 'Pozitsiyalarni Xitoy, Turkiya va BAA fabrikalarida shaxsan tanlaymiz, ishlab chiqarishni nazorat qilamiz va obyektgacha yetkazib berishni tashkil qilamiz.',
  'q6': 'Nega kam loyiha olasiz?', 'a6': 'Chunki asoschi har bir obyektni shaxsan boshqaradi. Cheklangan mijozlar soni — e’tibor va sifat kafolati.'
});

Object.assign(window.CP_I18N.en, {
  'nav.process': 'Process', 'stat.h': 'h', 'stat.reply': 'for a personal reply from the founder',
  'tag.process': 'Process', 'process.title': 'From the first meeting<br>to the <em>keys</em>',
  'process.lead': 'Seven stages, one person responsible. You always know what is happening on site and what comes next.',
  'process.total': '6–14', 'process.totalL': 'months — a typical full cycle*',
  's1': 'Introduction & brief', 's1p': 'A personal meeting with Umar. We discuss your way of life, habits, budget and expectations.', 's1t': '1 week',
  's2': 'Survey & layout', 's2p': 'Precise measurements and several layout options.', 's2t': '1–2 weeks',
  's3': 'Concept & 3D', 's3p': 'Photorealistic renders of every room — you see the home before construction starts.', 's3t': '3–5 weeks',
  's4': 'Working drawings', 's4p': 'Drawings for the builders: electrics, lighting, plumbing, details and specifications.', 's4t': '2–3 weeks',
  's5': 'Factory sourcing', 's5p': 'We personally choose furniture, stone and lighting at factories in China, Türkiye and the UAE.', 's5t': '4–8 weeks',
  's6': 'Construction', 's6p': 'Our own crews, weekly photo and video reports, a transparent budget.', 's6t': '3–8 months',
  's7': 'Supervision & handover', 's7p': 'Control down to the last detail, styling and placement — then the keys are yours.', 's7t': 'final',
  'process.note': '* Timelines are indicative and depend on the size and complexity of the property.',
  'tag.compare': 'Drawing → Interior', 'compare.title': 'Every line<br>becomes <em>real</em>', 'compare.lead': 'Drag the slider: on the left, the lines of the project; on the right, the finished space.', 'compare.l': 'Drawing', 'compare.r': 'Interior',
  'reel.play': 'Watch the film',
  'tag.partners': 'Factories & partners', 'partners.lead': 'Factories we visit in person, so that every item in a project has been checked by hand.',
  'pt.sunon': 'Furniture', 'pt.arrow': 'Sanitary ware & ceramics', 'pt.linia': 'Studio projects', 'pt.tr': 'Stone & textiles', 'pt.dxb': 'Design & lighting', 'pt.ruh': 'Project delivery',
  'tag.reviews': 'Testimonials',
  'r1': '“We saw the house in 3D before the first wall went up — and it matched the picture down to the smallest detail.”', 'r1n': 'Private client', 'r1m': 'House · Tashkent',
  'r2': '“Umar personally came with us to the factory in Guangzhou. We have never seen that level of attention from any studio.”', 'r2n': 'Private client', 'r2m': 'Apartment · Tashkent',
  'r3': '“Weekly reports, a transparent budget and not a single missed deadline. The showroom opened on exactly the day we agreed.”', 'r3n': 'Commercial client', 'r3m': 'Showroom',
  'reviews.more': 'Video testimonials on Instagram ↗',
  'faq.title': 'Frequently asked<br><em>questions</em>',
  'q1': 'How much does a project cost?', 'a1': 'Every property is unique, so the cost is calculated individually after the brief and survey. You receive the exact budget before work begins — and it does not change without your consent.',
  'q2': 'How long does it take?', 'a2': 'A design project takes 6–10 weeks on average. A full cycle with construction and sourcing takes from 6 months, depending on size and complexity.',
  'q3': 'Can I order only a design project?', 'a3': 'Yes. You can order the design with renders and documentation only, or the full Architect → Design → Build → Control cycle.',
  'q4': 'Do you work outside Tashkent?', 'a4': 'Yes. We deliver projects across Uzbekistan as well as in Kazakhstan, the UAE and Saudi Arabia.',
  'q5': 'How is furniture and material sourcing handled?', 'a5': 'We personally select items at factories in China, Türkiye and the UAE, oversee production and organise delivery to site.',
  'q6': 'Why do you take so few projects?', 'a6': 'Because the founder personally leads every project. A limited number of clients is our guarantee of attention and quality.'
});

/* ---------------- Қазақша ---------------- */
window.CP_I18N.kk = {
  'nav.works': 'Жобалар', 'nav.method': 'Әдіс', 'nav.process': 'Процесс', 'nav.founder': 'Негізін қалаушы', 'nav.geo': 'География',
  'cta.short': 'Private access', 'clock': 'Ташкент',
  'hero.est': 'Жеке бюро · Ташкент', 'hero.eyebrow': 'Concept Projects — жеке сәулет бюросы',
  'hero.t1': 'Қайталанбайтын', 'hero.t2': 'сәулет', 'hero.t3': 'өнері', 'hero.scroll': 'Төмен',
  'tag.manifest': 'Манифест',
  'manifest': 'Біз жоба сатпаймыз. Біз кіммен бірге жасайтынымызды таңдаймыз. Әр нысан — алғашқы сызықтан соңғы шамға дейін — бір команданың қолынан өтеді: сәулет, дизайн, құрылыс және бақылау. Сондықтан жылына тек бірнеше жоба аламыз.',
  'founder.role': 'Негізін қалаушы, сәулетші',
  'stat.audience': 'негізін қалаушының аудиториясы', 'stat.countries': 'ел: сатып алу және жүзеге асыру', 'stat.stages': 'кезең — бір жауапкершілік', 'stat.h': 'с', 'stat.reply': 'өтінімге негізін қалаушының жеке жауабы',
  'tag.works': 'Таңдаулы жобалар', 'works.title': 'Қолмен жиналған<br>интерьерлер', 'works.lead': 'Әр кеңістік — біртұтас идея: тас, ағаш, металл және жарық нақты адамға арнап таңдалған.',
  'tag.method': 'Әдіс', 'method.title': 'Төрт сөз.<br><em>Бір жауапкершілік.</em>',
  'm1': 'Концепция, жоспарлау, қасбеттер. Біз шаршы метрден емес, тапсырыс берушінің өмір салтынан бастаймыз.', 'm1a': 'Өлшеу және учаскені талдау', 'm1b': 'Сәулеттік концепция', 'm1c': 'Жұмыс құжаттамасы',
  'm2': 'Әр бөлменің фотошынайы визуализациясы. Материалдар, жарық, жиһаз құрылысқа дейін келісіледі.', 'm2a': '3D-визуализация', 'm2b': 'Материалдарды таңдау', 'm2c': 'Жарықтандыру сценарийлері',
  'm3': 'Өз бригадаларымыз және Қытай, Түркия, БАӘ фабрикаларынан тікелей жеткізу. Делдалсыз — ымырасыз.', 'm3a': 'Кілтке дейін жөндеу', 'm3b': 'Фабрикадан тікелей', 'm3c': 'Тапсырыспен жиһаз',
  'm4': 'Соңғы бұрандаға дейін авторлық қадағалау. Нәтиже визуализацияға сәйкес келеді — бұл біздің міндеттемеміз.', 'm4a': 'Авторлық қадағалау', 'm4b': 'Апталық есептер', 'm4c': 'Нысанды тапсыру',
  'expand.k': 'Тек жеке тапсырыстар', 'expand.t': 'Әр жоба — <em>жалғыз данада</em>', open: 'Ашу', view: 'Көру', play: 'Көру',
  'tag.process': 'Процесс', 'process.title': 'Алғашқы кездесуден<br><em>кілттерге</em> дейін',
  'process.lead': 'Жеті кезең, бір жауапты адам. Нысанда не болып жатқанын және әрі қарай не болатынын әрқашан білесіз.',
  'process.total': '6–14', 'process.totalL': 'ай — әдеттегі толық цикл*',
  's1': 'Танысу және бриф', 's1p': 'Умармен жеке кездесу. Өмір салтын, әдеттерді, бюджет пен күтулерді талқылаймыз.', 's1t': '1 апта',
  's2': 'Өлшеу және жоспарлау', 's2p': 'Нысанның нақты өлшемдері және бірнеше жоспарлау нұсқасы.', 's2t': '1–2 апта',
  's3': 'Концепция және 3D', 's3p': 'Әр бөлменің фотошынайы визуализациясы — үйді құрылысқа дейін көресіз.', 's3t': '3–5 апта',
  's4': 'Жұмыс құжаттамасы', 's4p': 'Құрылысшыларға арналған сызбалар: электр, жарық, сантехника, түйіндер.', 's4t': '2–3 апта',
  's5': 'Фабрикалардан сатып алу', 's5p': 'Жиһазды, тасты және жарықты Қытай, Түркия және БАӘ фабрикаларында өзіміз таңдаймыз.', 's5t': '4–8 апта',
  's6': 'Құрылыс', 's6p': 'Өз бригадаларымыз, апта сайынғы фото және бейне есептер, ашық смета.', 's6t': '3–8 ай',
  's7': 'Авторлық қадағалау және тапсыру', 's7p': 'Соңғы детальға дейін бақылау, декор — және кілттерді тапсыру.', 's7t': 'финал',
  'process.note': '* Мерзімдер шамамен берілген және нысанның ауданы мен күрделілігіне байланысты.',
  'tag.compare': 'Сызба → Интерьер', 'compare.title': 'Әр сызық<br><em>шындыққа</em> айналады', 'compare.lead': 'Жүгірткіні тартыңыз: сол жақта — жоба сызықтары, оң жақта — дайын кеңістік.', 'compare.l': 'Сызба', 'compare.r': 'Интерьер',
  'reel.play': 'Фильмді көру',
  'tag.founder': 'Негізін қалаушы', 'founder.role2': 'Дизайнер · Сәулетші · Concept Projects негізін қалаушы',
  'founder.bio': 'Умар бюроның әр жобасын жеке өзі жүргізеді — алғашқы эскизден кілт тапсыруға дейін. Мінсіз материалға апарар жолы Ханчжоу мен Гуанчжоу фабрикаларынан, Түркия, Дубай және Сауд Арабиясының шеберханаларынан өтеді. Жарты миллионнан астам адам оның жұмысын бақылайды — бірақ ол жылына тек бірнеше клиентпен жұмыс істейді.',
  'tag.partners': 'Фабрикалар мен серіктестер', 'partners.lead': 'Жобадағы әр позиция қолмен тексерілуі үшін өзіміз баратын фабрикалар.',
  'pt.sunon': 'Жиһаз', 'pt.arrow': 'Сантехника және керамика', 'pt.linia': 'Студия жобалары', 'pt.tr': 'Тас және тоқыма', 'pt.dxb': 'Дизайн және жарық', 'pt.ruh': 'Жобаларды жүзеге асыру',
  'tag.geo': 'География', 'geo.title': 'Бүкіл <em>әлемнен</em><br>материалдар', 'geo.lead': 'Әр позицияны фабрикаларда өзіміз таңдаймыз — және Өзбекстанға жергілікті нарықта жоқ нәрсені әкелеміз.',
  'tag.reviews': 'Пікірлер',
  'r1': '«Алғашқы қабырға қаланбай тұрып үйді 3D-де көрдік — нәтижесі суретке ең ұсақ детальға дейін сәйкес келді.»', 'r1n': 'Жеке клиент', 'r1m': 'Үй · Ташкент',
  'r2': '«Умар бізбен бірге Гуанчжоудағы фабрикаға өзі барды. Мұндай назарды ешбір студиядан көрмедік.»', 'r2n': 'Жеке клиент', 'r2m': 'Пәтер · Ташкент',
  'r3': '«Апталық есептер, ашық смета және бірде-бір бұзылған мерзім жоқ. Шоурум келісілген күні ашылды.»', 'r3n': 'Коммерциялық клиент', 'r3m': 'Шоурум',
  'reviews.more': 'Instagram-дағы бейне пікірлер ↗',
  'faq.title': 'Жиі қойылатын<br><em>сұрақтар</em>',
  'q1': 'Жоба қанша тұрады?', 'a1': 'Әр нысан бірегей, сондықтан құны бриф пен өлшеуден кейін жеке есептеледі. Нақты сметаны жұмыс басталғанға дейін аласыз — ол сіздің келісіміңізсіз өзгермейді.',
  'q2': 'Жұмыс қанша уақыт алады?', 'a2': 'Дизайн-жоба — орта есеппен 6–10 апта. Жөндеу мен сатып алуды қоса толық цикл — ауданы мен күрделілігіне қарай 6 айдан бастап.',
  'q3': 'Тек дизайн-жобаға тапсырыс беруге бола ма?', 'a3': 'Иә. Тек визуализация мен құжаттамасы бар жобаға немесе Architect → Design → Build → Control толық цикліне тапсырыс бере аласыз.',
  'q4': 'Ташкенттен тыс жерде жұмыс істейсіздер ме?', 'a4': 'Иә. Жобаларды Өзбекстан бойынша, сондай-ақ Қазақстанда, БАӘ мен Сауд Арабиясында жүзеге асырамыз.',
  'q5': 'Жиһаз бен материалдар қалай сатып алынады?', 'a5': 'Позицияларды Қытай, Түркия және БАӘ фабрикаларында өзіміз таңдаймыз, өндірісті бақылаймыз және нысанға дейін жеткізуді ұйымдастырамыз.',
  'q6': 'Неге жобаларды аз аласыздар?', 'a6': 'Себебі негізін қалаушы әр нысанды жеке өзі жүргізеді. Клиенттер санының шектеулі болуы — назар мен сапаның кепілі.',
  'access.title': 'Ынтымақтастыққа<br><em>өтінім</em>', 'access.lead': 'Біз шектеулі жоба қабылдаймыз. Өзіңіздікі туралы айтыңыз — жеке жауап береміз.',
  'f.q1': 'Қандай нысан?', 'f.flat': 'Пәтер', 'f.house': 'Жеке үй', 'f.comm': 'Коммерция', 'f.arch': 'Сәулет',
  'f.q2': 'Нысан ауданы', 'f.s1': 'Дизайн-жоба', 'f.s2': 'Кілтке дейін', 'f.s3': 'Architect → Control',
  'f.q3': 'Сізге қалай жүгінейік?', 'f.name': 'Аты', 'f.phone': 'Телефон',
  'f.done': 'Өтінім қабылданды.', 'f.done2': '24 сағат ішінде сізбен жеке хабарласамыз.',
  'f.back': 'Артқа', 'f.next': 'Әрі қарай', 'f.send': 'Жіберу',
  'footer.call': 'Тікелей байланыс', 'footer.top': 'Жоғары ↑',
  'pr.cat': 'Түрі', 'pr.year': 'Жыл', 'pr.loc': 'Орны', 'pr.locv': 'Құпия', 'pr.scope': 'Кезеңдер',
  'pr.palette': 'Материалдар палитрасы', 'pr.palette2': 'Жобадан алынған түстер', 'pr.details': 'Детальдар',
  'pr.next': 'Келесі жоба', 'pr.back': 'Барлық жобалар', 'pr.cta': 'Осындай деңгей керек пе?', 'pr.cta2': 'Өтінім қалдыру'
};

/* ---------------- Türkçe ---------------- */
window.CP_I18N.tr = {
  'nav.works': 'Projeler', 'nav.method': 'Yöntem', 'nav.process': 'Süreç', 'nav.founder': 'Kurucu', 'nav.geo': 'Coğrafya',
  'cta.short': 'Private access', 'clock': 'Taşkent',
  'hero.est': 'Özel stüdyo · Taşkent', 'hero.eyebrow': 'Concept Projects — özel mimarlık stüdyosu',
  'hero.t1': 'Tekrarı', 'hero.t2': 'olmayan', 'hero.t3': 'mimari', 'hero.scroll': 'Kaydırın',
  'tag.manifest': 'Manifesto',
  'manifest': 'Proje satmıyoruz. Kiminle üreteceğimizi seçiyoruz. Her mekân — ilk çizgiden son aydınlatmaya kadar — tek bir ekibin elinden geçer: mimari, tasarım, inşaat ve kontrol. Bu yüzden yılda yalnızca birkaç proje alıyoruz.',
  'founder.role': 'Kurucu, mimar',
  'stat.audience': 'kurucunun takipçisi', 'stat.countries': 'ülke: tedarik ve uygulama', 'stat.stages': 'aşama, tek sorumluluk', 'stat.h': 's', 'stat.reply': 'içinde kurucudan kişisel yanıt',
  'tag.works': 'Seçkin projeler', 'works.title': 'Elde kurulan<br>iç mekânlar', 'works.lead': 'Her mekân tek bir fikirdir: taş, ahşap, metal ve ışık belirli bir kişi için seçilir.',
  'tag.method': 'Yöntem', 'method.title': 'Dört kelime.<br><em>Tek sorumluluk.</em>',
  'm1': 'Konsept, plan, cepheler. Metrekareden değil, müşterinin yaşam tarzından başlarız.', 'm1a': 'Rölöve ve arazi analizi', 'm1b': 'Mimari konsept', 'm1c': 'Uygulama projeleri',
  'm2': 'Her odanın fotogerçekçi görselleştirmesi. Malzeme, ışık ve mobilya inşaattan önce onaylanır.', 'm2a': '3D görselleştirme', 'm2b': 'Malzeme seçimi', 'm2c': 'Aydınlatma senaryoları',
  'm3': 'Kendi ekiplerimiz ve Çin, Türkiye ve BAE fabrikalarından doğrudan tedarik. Aracı yok, taviz yok.', 'm3a': 'Anahtar teslim uygulama', 'm3b': 'Fabrikadan doğrudan', 'm3c': 'Özel mobilya',
  'm4': 'Son vidaya kadar tasarımcı denetimi. Sonuç görselle birebir örtüşür — bu bizim taahhüdümüz.', 'm4a': 'Tasarımcı denetimi', 'm4b': 'Haftalık raporlar', 'm4c': 'Teslim',
  'expand.k': 'Yalnızca özel siparişler', 'expand.t': 'Her proje — <em>tek bir eser</em>', open: 'Aç', view: 'İncele', play: 'İzle',
  'tag.process': 'Süreç', 'process.title': 'İlk görüşmeden<br><em>anahtara</em>',
  'process.lead': 'Yedi aşama, tek sorumlu. Şantiyede ne olduğunu ve sırada ne olduğunu her zaman bilirsiniz.',
  'process.total': '6–14', 'process.totalL': 'ay — tipik tam döngü*',
  's1': 'Tanışma ve brif', 's1p': 'Umar ile kişisel görüşme. Yaşam tarzınızı, alışkanlıklarınızı, bütçenizi ve beklentilerinizi konuşuruz.', 's1t': '1 hafta',
  's2': 'Rölöve ve plan', 's2p': 'Hassas ölçüm ve birkaç plan alternatifi.', 's2t': '1–2 hafta',
  's3': 'Konsept ve 3D', 's3p': 'Her odanın fotogerçekçi görseli — evi inşaattan önce görürsünüz.', 's3t': '3–5 hafta',
  's4': 'Uygulama çizimleri', 's4p': 'Ustalar için çizimler: elektrik, aydınlatma, tesisat, detaylar ve şartnameler.', 's4t': '2–3 hafta',
  's5': 'Fabrikadan tedarik', 's5p': 'Mobilya, taş ve aydınlatmayı Çin, Türkiye ve BAE fabrikalarında bizzat seçeriz.', 's5t': '4–8 hafta',
  's6': 'İnşaat', 's6p': 'Kendi ekiplerimiz, haftalık foto ve video raporlar, şeffaf bütçe.', 's6t': '3–8 ay',
  's7': 'Denetim ve teslim', 's7p': 'Son detaya kadar kontrol, dekorasyon ve yerleşim — ardından anahtar sizde.', 's7t': 'final',
  'process.note': '* Süreler tahminidir; mekânın büyüklüğüne ve karmaşıklığına bağlıdır.',
  'tag.compare': 'Çizim → İç mekân', 'compare.title': 'Her çizgi<br><em>gerçeğe</em> dönüşür', 'compare.lead': 'Kaydırıcıyı sürükleyin: solda projenin çizgileri, sağda bitmiş mekân.', 'compare.l': 'Çizim', 'compare.r': 'İç mekân',
  'reel.play': 'Filmi izle',
  'tag.founder': 'Kurucu', 'founder.role2': 'Tasarımcı · Mimar · Concept Projects kurucusu',
  'founder.bio': 'Umar stüdyonun her projesini ilk eskizden anahtar teslimine kadar bizzat yönetir. Kusursuz malzeme arayışı Hangzhou ve Guangzhou fabrikalarından, Türkiye, Dubai ve Suudi Arabistan atölyelerinden geçer. Yarım milyondan fazla kişi işini takip ediyor — ama yılda yalnızca birkaç müşteriyle çalışıyor.',
  'tag.partners': 'Fabrikalar ve ortaklar', 'partners.lead': 'Projedeki her ürünün elle kontrol edilmesi için bizzat ziyaret ettiğimiz fabrikalar.',
  'pt.sunon': 'Mobilya', 'pt.arrow': 'Vitrifiye ve seramik', 'pt.linia': 'Stüdyo projeleri', 'pt.tr': 'Taş ve tekstil', 'pt.dxb': 'Tasarım ve ışık', 'pt.ruh': 'Proje uygulama',
  'tag.geo': 'Coğrafya', 'geo.title': 'Dünyanın <em>dört bir</em><br>yanından malzeme', 'geo.lead': 'Her ürünü fabrikada bizzat seçer, yerel pazarda olmayanı Özbekistan’a getiririz.',
  'tag.reviews': 'Yorumlar',
  'r1': '“Evi ilk duvar örülmeden 3D’de gördük — sonuç en küçük detayına kadar görselle aynı oldu.”', 'r1n': 'Özel müşteri', 'r1m': 'Ev · Taşkent',
  'r2': '“Umar bizimle Guangzhou’daki fabrikaya bizzat geldi. Hiçbir stüdyoda bu kadar ilgi görmedik.”', 'r2n': 'Özel müşteri', 'r2m': 'Daire · Taşkent',
  'r3': '“Haftalık raporlar, şeffaf bütçe ve kaçırılan tek bir tarih yok. Showroom tam anlaştığımız gün açıldı.”', 'r3n': 'Kurumsal müşteri', 'r3m': 'Showroom',
  'reviews.more': 'Instagram’da video yorumlar ↗',
  'faq.title': 'Sıkça sorulan<br><em>sorular</em>',
  'q1': 'Bir proje ne kadar tutar?', 'a1': 'Her mekân özgündür; maliyet brif ve ölçümden sonra kişiye özel hesaplanır. Kesin bütçeyi işe başlamadan alırsınız — onayınız olmadan değişmez.',
  'q2': 'Ne kadar sürer?', 'a2': 'Tasarım projesi ortalama 6–10 hafta sürer. Uygulama ve tedarik dahil tam döngü, büyüklüğe ve karmaşıklığa göre 6 aydan başlar.',
  'q3': 'Yalnızca tasarım projesi alabilir miyim?', 'a3': 'Evet. Yalnızca görseller ve çizimlerle tasarım ya da Architect → Design → Build → Control tam döngüsü sipariş edebilirsiniz.',
  'q4': 'Taşkent dışında çalışıyor musunuz?', 'a4': 'Evet. Özbekistan genelinde, ayrıca Kazakistan, BAE ve Suudi Arabistan’da projeler yürütüyoruz.',
  'q5': 'Mobilya ve malzeme tedariki nasıl işliyor?', 'a5': 'Ürünleri Çin, Türkiye ve BAE fabrikalarında bizzat seçer, üretimi denetler ve şantiyeye teslimatı organize ederiz.',
  'q6': 'Neden az proje alıyorsunuz?', 'a6': 'Çünkü kurucu her projeyi bizzat yönetir. Sınırlı müşteri sayısı, ilginin ve kalitenin garantisidir.',
  'access.title': 'İş birliği<br><em>başvurusu</em>', 'access.lead': 'Sınırlı sayıda proje kabul ediyoruz. Projenizi anlatın — size bizzat dönelim.',
  'f.q1': 'Ne tür bir mekân?', 'f.flat': 'Daire', 'f.house': 'Müstakil ev', 'f.comm': 'Ticari', 'f.arch': 'Mimari',
  'f.q2': 'Mekân alanı', 'f.s1': 'Tasarım projesi', 'f.s2': 'Anahtar teslim', 'f.s3': 'Architect → Control',
  'f.q3': 'Size nasıl hitap edelim?', 'f.name': 'Ad', 'f.phone': 'Telefon',
  'f.done': 'Başvurunuz alındı.', 'f.done2': '24 saat içinde size bizzat dönüş yapacağız.',
  'f.back': 'Geri', 'f.next': 'İleri', 'f.send': 'Gönder',
  'footer.call': 'Doğrudan hat', 'footer.top': 'Yukarı ↑',
  'pr.cat': 'Tür', 'pr.year': 'Yıl', 'pr.loc': 'Konum', 'pr.locv': 'Gizli', 'pr.scope': 'Aşamalar',
  'pr.palette': 'Malzeme paleti', 'pr.palette2': 'Projeden çıkarılan renkler', 'pr.details': 'Detaylar',
  'pr.next': 'Sonraki proje', 'pr.back': 'Tüm projeler', 'pr.cta': 'Bu seviyeyi siz de ister misiniz?', 'pr.cta2': 'Başvuru yap'
};
// Missing keys fall back along this chain before Russian.
window.CP_FALLBACK = { kk: 'ru', tr: 'en', uz: 'ru', en: 'ru' };

/* project + material texts for kk / tr */
(() => {
  const MORE = {
    'grand-dining':      ['Асхана-зал', 'Yemek salonu', 'Он екі адамға арналған қабылдау залы. Жарықталған оникс қабырға, жүздеген жез аспа шамдар және тас кесіндісі өрнекті кілем — кешкі ас оқиғаға айналатын кеңістік.', 'On iki kişilik bir davet salonu. Arkadan aydınlatılmış oniks duvar, yüz pirinç sarkıtlı bir avize ve kesilmiş taş desenli halı — akşam yemeğinin bir olaya dönüştüğü mekân.'],
    'terracotta-master': ['Негізгі жатын бөлме', 'Ebeveyn yatak odası', 'Классикалық лепнина жылы терракотамен кездесетін жатын бөлме. Жез акцентті травертин медиа-қабырға техниканы жасырып, тас құрылымын көрсетеді.', 'Klasik kartonpiyerin sıcak terrakotayla buluştuğu yatak odası. Pirinç detaylı traverten medya duvarı teknolojiyi gizler, taşın dokusunu aydınlatır.'],
    'silk-road-lounge':  ['Қонақ бөлме', 'Oturma salonu', 'Аймақ тарихымен үндесетін қонақ бөлме: керуен бейнеленген жібек панно, букле мүсіндік креслолар және кешті аласа үстел айналасына жинайтын жұмсақ жарық.', 'Bölgenin tarihiyle konuşan bir salon: kervan resmedilmiş ipek pano, heykelsi bukle koltuklar ve akşamı alçak sehpanın etrafında toplayan yumuşak ışık.'],
    'travertine-suite':  ['Ванна бөлмесі', 'Banyo', 'Травертин монолит және бордо лакталған тумба. Бедерлі плиткалы қуыс пен жасырын жарық таңғы рәсімді спа тәжірибесіне айналдырады.', 'Traverten bir monolit ve bordo laka dolap. Kabartma karolu niş ve gizli aydınlatma sabah ritüelini spa deneyimine dönüştürür.'],
    'inomarka-hayda':    ['Шоурум', 'Showroom', 'Автокөлік шоурумы: терең бордо фон, қара металл ламельдер және төбедегі жарық сызықтары көлікті басты кейіпкер ететін сахна құрады.', 'Bir otomobil showroomu: koyu bordo fon, siyah çelik lameller ve tavandaki ışık çizgileri arabayı sahnenin yıldızı yapar.'],
    'bordeaux-room':     ['Жатын бөлме', 'Yatak odası', 'Бордо мен терракота реңкті тік мозаикалы бас жағы, қою бағаналар және жұмсақ тоқыма. Тыныштықты бағалайтындарға арналған жатын бөлме.', 'Bordo ve terrakota tonlarında dikey mozaik başlık, koyu kolonlar ve yumuşak tekstil. Sessizliğe değer verenler için bir mücevher kutusu.'],
    'bronze-living':     ['Қонақ бөлме', 'Oturma odası', 'Асханамен біріктірілген қонақ бөлме. Қола кірістірмелі шпон қабырға мен шырша паркет ырғақ береді, мүсіндік орындықтар — мінез.', 'Yemek alanıyla birleşen oturma odası. Bronz kakmalı kaplama duvar ve balıksırtı parke ritmi kurar; heykelsi sandalyeler karakter katar.'],
    'rosso-powder-room': ['Қонақ санторабы', 'Misafir WC', 'Асыл тас секілді қонақ санторабы: қызыл мәрмәр үстелше, былғары белдіктегі айна және жез фурнитуралы бордо қабырға.', 'Bir mücevher gibi ele alınan misafir WC: kırmızı mermer tezgâh, deri kayışlara asılı ayna ve pirinç armatürlü bordo duvar.'],
    'verde-marble':      ['Қонақ бөлме', 'Oturma odası', 'Жасыл мәрмәр акцентті қуысы бар жарық қонақ бөлме. Классикалық карниздер мен жарықталған тас тыныш сән-салтанат жасайды.', 'Yeşil mermer vurgulu nişe sahip aydınlık bir salon. Klasik kornişler, yumuşak formlar ve aydınlatılmış taş sakin bir lüks yaratır.'],
    'clay-and-linen':    ['Жатын бөлме', 'Yatak odası', 'Саз реңкті жатын бөлме: молдингті қабырға, авторлық сурет және шыны аспа шамдар. Барлығы бір сезімге — жылулыққа бағынады.', 'Kil tonlarında bir yatak odası: pervazlı duvar, özgün bir tablo ve cam sarkıt lambalar. Her şey tek bir hisse hizmet eder — sıcaklık.'],
    'plaster-bath':      ['Ванна бөлмесі', 'Banyo', 'Құрылымды әк сылағы, жарықталған сопақ айна және бұрыштары дөңгеленген тумба. Ұстағың келетін минимализм.', 'Dokulu kireç sıva, arkadan aydınlatmalı oval ayna ve yumuşatılmış köşeli dolap. Dokunmak istediğiniz bir minimalizm.'],
    'quiet-study':       ['Кабинет', 'Çalışma odası', 'Қабырғаға кірістірілген шағын кабинет: қырлы фасадтар, ашық сөрелер және жылы жарық. Интерьермен таласпайтын жұмыс орны.', 'Duvara yerleştirilmiş kompakt bir çalışma alanı: oluklu kapaklar, açık raflar ve sıcak ışık. İç mekânla tartışmayan bir çalışma yeri.']
  };
  window.CP_PROJECTS.forEach(p => {
    const m = MORE[p.slug]; if (!m) return;
    p.cat.kk = m[0]; p.cat.tr = m[1]; p.desc.kk = m[2]; p.desc.tr = m[3];
  });
  const MAT = {
    travertine: ['Травертин', 'Traverten'], walnut: ['Жаңғақ ағашы', 'Ceviz'], oak: ['Емен', 'Meşe'], brass: ['Жез', 'Pirinç'],
    bronze: ['Қола', 'Bronz'], bordeaux: ['Бордо лак', 'Bordo lake'], rosso: ['Rosso мәрмәрі', 'Rosso mermer'], verde: ['Verde мәрмәрі', 'Verde mermer'],
    onyx: ['Оникс', 'Oniks'], boucle: ['Букле', 'Bukle'], linen: ['Зығыр', 'Keten'], velvet: ['Барқыт', 'Kadife'],
    plaster: ['Сәндік сылақ', 'Dekoratif sıva'], stucco: ['Лепнина', 'Kartonpiyer'], terracotta: ['Терракота', 'Terrakota'], leather: ['Былғары', 'Deri'],
    glass: ['Қырлы шыны', 'Oluklu cam'], steel: ['Қара металл', 'Siyah çelik'], silk: ['Жібек панно', 'İpek pano'], wool: ['Жүн кілем', 'Yün halı']
  };
  Object.entries(MAT).forEach(([k, [kk, tr]]) => { window.CP_MATERIALS[k].kk = kk; window.CP_MATERIALS[k].tr = tr; });
})();

// To show a real showreel video, set its path here, e.g. 'assets/video/reel.mp4'.
window.CP_REEL_VIDEO = '';
