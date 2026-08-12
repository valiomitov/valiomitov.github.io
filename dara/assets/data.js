/* ============================================================
   Дара – Арт Сладкарница | Споделени данни (BG / EN)
   Shared bilingual data for all templates.
   Source: Каталог 2026 (official catalogue)
   ============================================================ */

const SITE = {
  name: { bg: "Арт Сладкарница Дара", en: "Dara Art Patisserie" },
  short: { bg: "Дара", en: "Dara" },
  motto: { bg: "от природата", en: "from nature" },
  city: { bg: "гр. Царево", en: "Tsarevo, Bulgaria" },
  address: { bg: "ул. „Екзарх Йосиф“ 1, гр. Царево", en: "1 Ekzarh Yosif St, Tsarevo" },
  phone: "087 883 8353",
  phoneHref: "tel:+359878838353",
  facebook: "https://www.facebook.com/daraartcakes",
  instagram: "https://www.instagram.com/dara_cakess",
  instagramHandle: "dara_cakess",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=%D1%83%D0%BB.+%D0%95%D0%BA%D0%B7%D0%B0%D1%80%D1%85+%D0%99%D0%BE%D1%81%D0%B8%D1%84+1+%D0%A6%D0%B0%D1%80%D0%B5%D0%B2%D0%BE"
};

/* Diet tag dictionary */
const TAGS = {
  vegan:      { bg: "Веган",      en: "Vegan" },
  sugarfree:  { bg: "Без захар",  en: "Sugar-free" },
  glutenfree: { bg: "Без глутен", en: "Gluten-free" },
  raw:        { bg: "Сурова",     en: "Raw" }
};

/* Categories */
const CATEGORIES = [
  { id: "fruit",      bg: "Плодови торти",  en: "Fruit cakes" },
  { id: "chocolate",  bg: "Шоколадови",     en: "Chocolate" },
  { id: "mascarpone", bg: "Маскарпоне",     en: "Mascarpone" },
  { id: "cheesecake", bg: "Чийзкейк",       en: "Cheesecake" },
  { id: "raw",        bg: "Сурови торти",   en: "Raw cakes" },
  { id: "muffins",    bg: "Мъфини и дребни",en: "Muffins & bites" },
  { id: "savoury",    bg: "Солени",         en: "Savoury" }
];

/* ---------------- Products ---------------- */
const PRODUCTS = [
  /* ---- Плодови / Fruit ---- */
  { id:"fruit-parfait", cat:"fruit", img:"fruit-parfait.jpg", price:4.00, unit:"slice",
    bg:{n:"Плодово парфе", d:"Свежа и лека торта с ванилови блатове и сметанов крем със сезонни плодове и сладко."},
    en:{n:"Fruit Parfait", d:"A light, fresh cake of vanilla sponge and cream with seasonal fruit and preserve."},
    tags:[] },
  { id:"pear", cat:"fruit", img:"pear.jpg", price:4.50, unit:"slice",
    bg:{n:"Круша", d:"Прекрасна плодова торта с круша (или други сезонни плодове), кокосова паста и кокосови блатове. Може да се подслади с фурми."},
    en:{n:"Pear", d:"A beautiful fruit cake with pear (or other seasonal fruit), coconut paste and coconut sponge. Can be sweetened with dates."},
    tags:["vegan"] },
  { id:"fig-passion", cat:"fruit", img:"fig-passion.jpg", price:4.50, unit:"slice",
    bg:{n:"Смокинова страст", d:"Прекрасна плодова торта със смокини, зрели в нашия двор, кокосов крем и кокосови блатове. Може да се направи без захар (с фурми)."},
    en:{n:"Fig Passion", d:"A fruit cake with figs ripened in our own garden, coconut cream and coconut sponge. Can be made sugar-free with dates."},
    tags:["vegan","sugarfree"] },
  { id:"yogurt-blueberry", cat:"fruit", img:"yogurt-blueberry.jpg", price:4.00, unit:"slice",
    bg:{n:"Йогурт с боровинки", d:"Кокосов блат с червени боровинки и йогуртов крем с боровинки (малини, череши) и чия."},
    en:{n:"Yogurt & Blueberry", d:"Coconut sponge with cranberries and a yogurt cream of blueberries (raspberries, cherries) and chia."},
    tags:[] },
  { id:"coconut-blueberry", cat:"fruit", img:"coconut-blueberry.jpg", price:4.50, unit:"slice",
    bg:{n:"Кокос и боровинки", d:"Кокосов блат с червени боровинки и нежен кокосов крем с горски боровинки. Може да се подслади с фурми."},
    en:{n:"Coconut & Blueberry", d:"Coconut sponge with cranberries and a delicate coconut cream with wild blueberries. Can be sweetened with dates."},
    tags:["vegan"] },
  { id:"mama", cat:"fruit", img:"mama.jpg", price:4.00, unit:"slice",
    bg:{n:"На мама", d:"Изключително нежен ванилов крем с привкус на уют и аромат на „у дома“ в съчетание с орехови блатове."},
    en:{n:"Mama's", d:"An exceptionally delicate vanilla cream that tastes of comfort and home, layered with walnut sponge."},
    tags:[] },
  { id:"wild-apple", cat:"fruit", img:"wild-apple.jpg", price:4.50, unit:"slice",
    bg:{n:"Дива ябълка", d:"Канела, ябълки и орехи – перфектната комбинация в една много сочна торта."},
    en:{n:"Wild Apple", d:"Cinnamon, apples and walnuts – the perfect combination in a wonderfully juicy cake."},
    tags:[] },
  { id:"rosehip", cat:"fruit", img:"rosehip.jpg", price:4.50, unit:"slice",
    bg:{n:"Шипка", d:"Орехови блатове, български мармалад от шипки и лек сметанов крем."},
    en:{n:"Rosehip", d:"Walnut sponge, Bulgarian rosehip jam and a light cream filling."},
    tags:[] },
  { id:"mojito", cat:"fruit", img:"mojito.jpg", price:4.50, unit:"slice",
    bg:{n:"Мохито с лайм и горски плодове", d:"Лека лятна торта с нежен сметанов крем, свежи малини, лайм, мента и кокосови блатове."},
    en:{n:"Mojito, Lime & Berries", d:"A light summer cake with delicate cream, fresh raspberries, lime, mint and coconut sponge."},
    tags:[] },
  { id:"provence", cat:"fruit", img:"provence.jpg", price:4.50, unit:"slice",
    bg:{n:"Прованс", d:"Лека торта с нежен сметанов крем, боровинки, блатове с хрупкави бадеми и аромат на лавандула."},
    en:{n:"Provence", d:"A light cake with delicate cream, blueberries, crisp almond sponge and a hint of lavender."},
    tags:[] },
  { id:"tsarevo", cat:"fruit", img:"tsarevo.jpg", price:4.50, unit:"slice",
    bg:{n:"Царево", d:"Зелени или зрели смокини в комбинация с шоколадови блатове, сметанов крем и аромат на индрише."},
    en:{n:"Tsarevo", d:"Green or ripe figs combined with chocolate sponge, cream and a note of rose geranium."},
    tags:[] },
  { id:"french-almond", cat:"fruit", img:"french-almond.jpg", price:5.50, unit:"slice",
    bg:{n:"Френска бадемова", d:"Тайната на французите: „Масло, масло и пак масло…“ Маслена торта с бадемово брашно и сметана."},
    en:{n:"French Almond", d:"The French secret: “Butter, butter and more butter…” A butter cake with almond flour and cream."},
    tags:["glutenfree"] },

  /* ---- Шоколадови / Chocolate ---- */
  { id:"summer", cat:"chocolate", img:"summer.jpg", price:4.50, unit:"slice",
    bg:{n:"Лято", d:"Шоколадова платка, сладко от череша (боровинка), парченца ягода в комбинация с кокосов крем и веган шоколадов мус."},
    en:{n:"Summer", d:"Chocolate layer, cherry (or blueberry) preserve and strawberry pieces with coconut cream and vegan chocolate mousse."},
    tags:["vegan"] },
  { id:"choco-wave", cat:"chocolate", img:"choco-wave.jpg", price:4.50, unit:"slice",
    bg:{n:"Шоколадова вълна", d:"Изключително вкусна и деликатна торта с шоколадова платка, копринен шоколадов мус със сметана и сладко от череша."},
    en:{n:"Chocolate Wave", d:"A delicate, deeply flavoured cake with chocolate layer, silky chocolate mousse, cream and cherry preserve."},
    tags:[] },
  { id:"hazelnut", cat:"chocolate", img:"hazelnut.jpg", price:5.00, unit:"slice",
    bg:{n:"Лешник", d:"Кралска торта с лешников тахан, лешникови платки, шоколад и сметана."},
    en:{n:"Hazelnut", d:"A regal cake with hazelnut tahini, hazelnut layers, chocolate and cream."},
    tags:[] },
  { id:"jetaime", cat:"chocolate", img:"jetaime.jpg", price:5.50, unit:"slice",
    bg:{n:"Je t’aime", d:"Прелестна комбинация от шоколадова платка, крем с маскарпоне, чия и лимоново масло и шоколад с орехи."},
    en:{n:"Je t’aime", d:"A lovely combination of chocolate layer, mascarpone cream, chia and lemon oil, and chocolate with walnuts."},
    tags:[] },
  { id:"double-choco", cat:"chocolate", img:"double-choco.jpg", price:5.00, unit:"slice",
    bg:{n:"Двойно шоколадова", d:"Наситена шоколадова торта с какаови платки с парченца шоколад, плътен шоколадов веган мус и парченца банан."},
    en:{n:"Double Chocolate", d:"An intense chocolate cake with cocoa layers, chocolate chunks, rich vegan chocolate mousse and banana pieces."},
    tags:["vegan"] },
  { id:"nougat-creme", cat:"chocolate", img:"nougat-creme.jpg", price:6.00, unit:"slice",
    bg:{n:"Nougat Crème", d:"Хрупкави бадемови блатове с плътен крем от бял шоколад и тахан."},
    en:{n:"Nougat Crème", d:"Crisp almond sponge with a rich white chocolate and tahini cream."},
    tags:[] },
  { id:"yogurt-white-choc", cat:"chocolate", img:"yogurt-white-choc.jpg", price:5.00, unit:"slice",
    bg:{n:"Йогурт с бял шоколад", d:"Плътен крем от бял шоколад и заквасена сметана в комбинация от чия и шоколадови блатове."},
    en:{n:"Yogurt & White Chocolate", d:"A rich white chocolate and sour cream filling with chia and chocolate sponge."},
    tags:[] },

  /* ---- Маскарпоне / Mascarpone ---- */
  { id:"mascarpone-cherry", cat:"mascarpone", img:"mascarpone-cherry.jpg", price:5.50, unit:"slice",
    bg:{n:"Маскарпоне с череши", d:"Разкошна, божествена торта с какаови платки, кадифен крем с маскарпоне и бял шоколад и сладко от череши."},
    en:{n:"Mascarpone & Cherry", d:"A sumptuous cake with cocoa layers, velvety mascarpone and white chocolate cream, and cherry preserve."},
    tags:[] },
  { id:"mascarpone-peach", cat:"mascarpone", img:"mascarpone-peach.jpg", price:5.50, unit:"slice",
    bg:{n:"Маскарпоне с праскови", d:"Лек маскарпоне крем със сочни праскови и ванилови блатове."},
    en:{n:"Mascarpone & Peach", d:"A light mascarpone cream with juicy peaches and vanilla sponge."},
    tags:[] },
  { id:"mascarpone-tart", cat:"mascarpone", img:"mascarpone-tart.jpg", price:5.50, unit:"slice",
    bg:{n:"Тарт с маскарпоне и ягоди", d:"Хрупкава основа от пълнозърнести бисквити и бадем в комбинация с пухкав маскарпоне крем и свежестта на ягоди."},
    en:{n:"Mascarpone & Strawberry Tart", d:"A crisp wholegrain biscuit and almond base with fluffy mascarpone cream and fresh strawberries."},
    tags:[] },

  /* ---- Чийзкейк / Cheesecake ---- */
  { id:"cheesecake-blueberry", cat:"cheesecake", img:"cheesecake-blueberry.jpg", price:3.50, unit:"slice",
    bg:{n:"Чийзкейк с боровинка", d:"Тънка бисквитена основа и лек крем със сметана, чия, боровинки и какаови зърна."},
    en:{n:"Blueberry Cheesecake", d:"A thin biscuit base with a light cream of chia, blueberries and cacao nibs."},
    tags:[] },
  { id:"raw-matcha-lime", cat:"cheesecake", img:"raw-matcha-lime.jpg", price:4.00, unit:"slice",
    bg:{n:"Суров чийзкейк с матча и лайм", d:"Вкусна основа от бадеми и фурми и любимият копринен, ароматен крем с кашу, кокосова паста, сок от лайм и зелен чай матча."},
    en:{n:"Raw Matcha & Lime Cheesecake", d:"An almond and date base with our beloved silky cream of cashew, coconut paste, lime juice and matcha green tea."},
    tags:["raw"] },

  /* ---- Сурови торти / Raw ---- */
  { id:"dara", cat:"raw", img:"dara.jpg", price:4.50, unit:"slice", featured:true,
    bg:{n:"Дара", d:"Вкусна основа от бадеми, какао, кокос и фурми и нежен крем с кашу, какаови зърна, чия и банани."},
    en:{n:"Dara", d:"A delicious base of almonds, cacao, coconut and dates with a delicate cream of cashew, cacao nibs, chia and banana."},
    tags:["vegan","sugarfree","glutenfree","raw"] },
  { id:"raffaello", cat:"raw", img:"raffaello.jpg", price:4.00, unit:"slice",
    bg:{n:"Рафаело", d:"Ароматна комбинация от кашу, кокос и мед, копринен крем със заквасена сметана, бял шоколад и розова вода."},
    en:{n:"Raffaello", d:"A fragrant combination of cashew, coconut and honey with a silky cream of sour cream, white chocolate and rose water."},
    tags:["glutenfree","raw"] },
  { id:"goji", cat:"raw", img:"goji.jpg", price:4.00, unit:"slice",
    bg:{n:"Годжи бери", d:"Основа от орехи, какао и фурми, с крем от кашу и годжи бери."},
    en:{n:"Goji Berry", d:"A base of walnuts, cacao and dates with a cashew and goji berry cream."},
    tags:["vegan","sugarfree","glutenfree","raw"] },
  { id:"carrot", cat:"raw", img:"carrot.jpg", price:4.50, unit:"slice",
    bg:{n:"Морковена торта", d:"Хрупкави парченца моркови и орехи в комбинация с крем от сирене, сметана, канела, чия и мед."},
    en:{n:"Carrot Cake", d:"Crunchy carrot and walnut pieces with a cream of cheese, cream, cinnamon, chia and honey."},
    tags:["sugarfree","glutenfree","raw"] },
  { id:"coffee", cat:"raw", img:"coffee.jpg", price:4.00, unit:"slice",
    bg:{n:"Кафе", d:"Смокинова основа с кокос, слънчоглед, мед и шоколадова веган глазура с кафе."},
    en:{n:"Coffee", d:"A fig base with coconut, sunflower seeds and honey, under a vegan chocolate coffee glaze."},
    tags:["vegan","sugarfree","glutenfree","raw"] },
  { id:"honey-choc", cat:"raw", img:"honey-choc.jpg", price:4.00, unit:"slice",
    bg:{n:"Меден шоколад", d:"Сочна основа от сливи, кокос, тахан; заливка от суров шоколад с лимоново масло и парченца банан."},
    en:{n:"Honey Chocolate", d:"A juicy base of plums, coconut and tahini, topped with raw chocolate, lemon oil and banana pieces."},
    tags:["vegan","sugarfree","glutenfree","raw"] },
  { id:"raw-fruit", cat:"raw", img:"raw-fruit.jpg", price:4.00, unit:"slice",
    bg:{n:"Сурова с плодове", d:"Плътна основа от бадеми и фурми, плътен крем с банани и кокосова паста и сезонни плодове – ябълки, банани, киви, малини, круши."},
    en:{n:"Raw with Fruit", d:"A dense almond and date base, a rich banana and coconut cream, and seasonal fruit – apple, banana, kiwi, raspberry, pear."},
    tags:["vegan","sugarfree","glutenfree","raw"] },
  { id:"silk", cat:"raw", img:"silk.jpg", price:3.50, unit:"slice",
    bg:{n:"Коприна", d:"Лека основа от овесени ядки, орехи и фурми с копринен крем от боровинки и кокосово мляко."},
    en:{n:"Silk", d:"A light base of oats, walnuts and dates with a silky blueberry and coconut milk cream."},
    tags:["raw"] },
  { id:"gin-tonic", cat:"raw", img:"gin-tonic.jpg", price:3.50, unit:"slice",
    bg:{n:"Чийзкейк Джин и тоник", d:"Лека основа с овесени ядки и фурми и свеж крем от лайм, джин и тоник."},
    en:{n:"Gin & Tonic Cheesecake", d:"A light oat and date base with a fresh cream of lime, gin and tonic."},
    tags:["raw"] },
  { id:"raw-fig", cat:"raw", img:"raw-fig.jpg", price:3.50, unit:"slice",
    bg:{n:"Сурова смокиня", d:"Плътна основа от орехи, какао и фурми, нежен крем с кашу, мед, какаови зърна, чия и смокини."},
    en:{n:"Raw Fig", d:"A dense base of walnuts, cacao and dates with a delicate cream of cashew, honey, cacao nibs, chia and figs."},
    tags:["vegan","sugarfree","glutenfree","raw"] },

  /* ---- Мъфини и дребни / Muffins & bites ---- */
  { id:"muffin-vanilla", cat:"muffins", img:"muffins-1.jpg", price:2.00, unit:"piece",
    bg:{n:"Ванилови кексчета", d:"Ванилови кексчета със сърце от боровинка."},
    en:{n:"Vanilla Muffins", d:"Vanilla muffins with a blueberry heart."},
    tags:[] },
  { id:"muffin-carob", cat:"muffins", img:"muffins-2.jpg", price:2.00, unit:"piece",
    bg:{n:"Рожкови мъфини", d:"Рожкови мъфини със сърце от боровинка, череша, дюля, смокиня и др. сладка, банан."},
    en:{n:"Carob Muffins", d:"Carob muffins with a heart of blueberry, cherry, quince, fig preserve or banana."},
    tags:[] },
  { id:"muffin-choco", cat:"muffins", img:"muffins-1.jpg", price:2.00, unit:"piece",
    bg:{n:"Шоколадови кексчета", d:"Шоколадови кексчета със сърце череша."},
    en:{n:"Chocolate Muffins", d:"Chocolate muffins with a cherry heart."},
    tags:[] },
  { id:"raw-bonbons", cat:"muffins", img:"raw-bonbons.jpg", price:1.00, unit:"piece",
    bg:{n:"Сурови бонбони", d:"Фереро – бадеми, тахан, какао. Рафаело – кашу, кокос, тахан. Суров шоколад – мед, какао, тахан, кокосово масло. (15–18 г)"},
    en:{n:"Raw Bonbons", d:"Ferrero – almond, tahini, cacao. Raffaello – cashew, coconut, tahini. Raw chocolate – honey, cacao, tahini, coconut oil. (15–18 g)"},
    tags:["raw","glutenfree"] },

  /* ---- Солени / Savoury ---- */
  { id:"banitsa", cat:"savoury", img:"banitsa.jpg", price:2.00, unit:"slice",
    bg:{n:"Домашна баница", d:"Домашна баница със сирене, зехтин и овесени ядки."},
    en:{n:"Homemade Banitsa", d:"Homemade filo pie with white cheese, olive oil and oats."},
    tags:[] },
  { id:"solenki", cat:"savoury", img:"solenki.jpg", price:1.50, unit:"piece",
    bg:{n:"Соленки", d:"Соленки с кашкавал, сирене и масло."},
    en:{n:"Savoury Biscuits", d:"Savoury biscuits with yellow cheese, white cheese and butter."},
    tags:[] },
  { id:"mekitsi", cat:"savoury", img:"mekitsi.jpg", price:1.50, unit:"piece",
    bg:{n:"Лимецови мекичета", d:"Лимецови мекичета със сирене и маслини."},
    en:{n:"Einkorn Mekitsi", d:"Einkorn fried dough with white cheese and olives."},
    tags:[] }
];

/* ---- Брънч / Brunch ---- */
const BRUNCH = [
  { bg:"Тост с бъркани яйца, авокадо, чоризо", en:"Toast with scrambled eggs, avocado, chorizo", price:4.00 },
  { bg:"Тост капрезе, моцарела, песто, домат", en:"Caprese toast, mozzarella, pesto, tomato", price:4.00 },
  { bg:"Поке – ориз, едамаме, авокадо, сьомга", en:"Poke – rice, edamame, avocado, salmon", price:10.00 },
  { bg:"Кроасан с масло", en:"Butter croissant", price:1.50 },
  { bg:"Кроасан с шунка и кашкавал", en:"Ham & cheese croissant", price:3.00 },
  { bg:"Салати според сезона", en:"Seasonal salads", price:null }
];

/* ---- Кетъринг / Catering ---- */
const CATERING = [
  { bg:"Хапки", en:"Canapés", price:1.00 },
  { bg:"Мини сандвичи", en:"Mini sandwiches", price:3.00 },
  { bg:"Гризини", en:"Grissini", price:1.00 },
  { bg:"Мини соленки", en:"Mini savoury biscuits", price:1.00 },
  { bg:"Мини баничка", en:"Mini banitsa", price:1.00 },
  { bg:"Мини мекиче", en:"Mini mekitsa", price:1.00 }
];

/* ---- Декорации / Decorations ---- */
const DECOR = {
  note: {
    bg: "Всички декорации се рисуват ръчно с шоколад и естествени оцветители, а декорациите са според сезона. Затова всяка торта е уникална и неповторима. Моля, имайте предвид, че не изпълняваме модели едно към едно – заради ръчната работа и индивидуалния ни подход.",
    en: "Every decoration is hand-painted with chocolate and natural colourings, and follows the season. That is why every cake is unique and unrepeatable. Please note that we do not copy designs one-to-one — because of the handwork and our individual approach."
  },
  prices: [
    { bg:"Украса с плодове", en:"Fruit decoration", price:"3.00 €" },
    { bg:"Надпис", en:"Hand-written message", price:"3.00 €" },
    { bg:"Детска декорация", en:"Children's decoration", price:"10.00 – 25.00 €" }
  ],
  kids: ["deco-1.jpg","deco-2.jpg","deco-3.jpg","deco-4.jpg","deco-5.jpg"],
  wedding: ["wedding-1.jpg","wedding-2.jpg","wedding-3.jpg","wedding-4.jpg","wedding-5.jpg"],
  catering: ["catering-1.jpg","catering-2.jpg","catering-3.jpg"],
  brunch: ["brunch-1.jpg"]
};

/* ---- UI strings ---- */
const UI = {
  nav_catalog:   { bg:"Каталог",     en:"Catalogue" },
  nav_cakes:     { bg:"Торти",       en:"Cakes" },
  nav_decor:     { bg:"Декорации",   en:"Decorations" },
  nav_brunch:    { bg:"Брънч",       en:"Brunch" },
  nav_catering:  { bg:"Кетъринг",    en:"Catering" },
  nav_about:     { bg:"За нас",      en:"About" },
  nav_contact:   { bg:"Контакти",    en:"Contact" },
  order:         { bg:"Поръчай",     en:"Order" },
  order_now:     { bg:"Поръчай сега",en:"Order now" },
  call_us:       { bg:"Обади се",    en:"Call us" },
  view_catalog:  { bg:"Виж каталога",en:"View catalogue" },
  all:           { bg:"Всички",      en:"All" },
  filter_by:     { bg:"Филтрирай по",en:"Filter by" },
  per_slice:     { bg:"/ парче",     en:"/ slice" },
  per_piece:     { bg:"/ бр.",       en:"/ piece" },
  from:          { bg:"от",          en:"from" },
  no_results:    { bg:"Няма продукти с този филтър.", en:"No products match this filter." },
  results:       { bg:"продукта",    en:"items" },
  hours:         { bg:"Работно време", en:"Opening hours" },
  hours_val:     { bg:"Всеки ден 08:30 – 19:00", en:"Every day 08:30 – 19:00" },
  order_note:    { bg:"Тортите се приготвят по поръчка – моля, поръчвайте поне 48 часа предварително.",
                   en:"Cakes are made to order – please order at least 48 hours in advance." }
};

/* ---- helpers ---- */
function t(obj, lang){ return obj && obj[lang] !== undefined ? obj[lang] : ""; }
function money(v){ return v == null ? "" : v.toFixed(2) + " €"; }
