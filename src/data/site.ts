export type Dish = {
  slug: string;
  name: string;
  price: string;
  tag: string;
  desc: string;
  meta: string;
  image: string;
};

export const DISHES: Record<string, Dish[]> = {
  salata: [
    { slug: "d-nar", name: "Nar & Tahin Kâsesi", price: "₺265", tag: "Haftanın tabağı", desc: "Közlenmiş pancar, nar, kavrulmuş nohut, tahin-limon sos, kişniş, ceviz kırığı.", meta: "620 kcal · vejetaryen", image: "/images/dishes/d-nar.jpg" },
    { slug: "d-sezar", name: "Zeytinyağlı Sezar", price: "₺245", tag: "Klasik", desc: "Karalahana, marul, parmesan cipsi, tarhun kruton, ançüezsiz sezar sos.", meta: "540 kcal · glutensiz seçenek", image: "/images/dishes/d-sezar.jpg" },
    { slug: "d-avokado", name: "Yeşil Üstüne Yeşil", price: "₺275", tag: "Şef seçimi", desc: "Avokado, edamame, salatalık, taze bezelye, misket limonu, kişniş-jalapeño sos.", meta: "480 kcal · vegan", image: "/images/dishes/d-avokado.jpg" },
    { slug: "d-mercimek", name: "Beluga Mercimek", price: "₺255", tag: "Yeni", desc: "Siyah mercimek, közlenmiş biber, feta, nane, sumaklı soğan, zeytinyağı.", meta: "590 kcal · vejetaryen", image: "/images/dishes/d-mercimek.jpg" },
    { slug: "d-tavuk", name: "Zaatarlı Tavuk", price: "₺295", tag: "Çok satan", desc: "Fırınlanmış tavuk, zaatar, roka, kiraz domates, limonlu yoğurt sos.", meta: "660 kcal · yüksek protein", image: "/images/dishes/d-tavuk.jpg" },
  ],
  kase: [
    { slug: "d-freekeh", name: "Freekeh & Kabak", price: "₺285", tag: "Sıcak", desc: "Isırgan yeşilliği, fırın balkabağı, freekeh, keçi peyniri, pekmez vinaigrette.", meta: "710 kcal · vejetaryen", image: "/images/dishes/d-freekeh.jpg" },
    { slug: "d-somon", name: "Miso Somon Kâsesi", price: "₺345", tag: "Şef seçimi", desc: "Miso glazeli somon, siyah pirinç, turşu lahana, susam, zencefil sos.", meta: "740 kcal · omega-3", image: "/images/dishes/d-somon.jpg" },
    { slug: "d-mantar", name: "Umami Mantar", price: "₺285", tag: "Vegan", desc: "Portobello karışımı, tofu, kinoa, ıspanak, susam-zencefil miso.", meta: "650 kcal · vegan", image: "/images/dishes/d-mantar.jpg" },
    { slug: "d-kofte", name: "Otlu Köfte Kâsesi", price: "₺315", tag: "Doyurucu", desc: "Dana köfte, bulgur pilavı, közlenmiş patlıcan, nane-yoğurt, acı biber.", meta: "820 kcal · yüksek protein", image: "/images/dishes/d-kofte.jpg" },
  ],
  yan: [
    { slug: "d-focaccia", name: "Biberiyeli Focaccia", price: "₺95", tag: "Fırından", desc: "Günlük yapılan focaccia, sızma zeytinyağı, deniz tuzu.", meta: "310 kcal · vejetaryen", image: "/images/dishes/d-focaccia.jpg" },
    { slug: "d-patates", name: "Ballı Tatlı Patates", price: "₺110", tag: "Sıcak", desc: "Fırın tatlı patates, acı bal, hardal, taze kekik.", meta: "340 kcal · glutensiz", image: "/images/dishes/d-patates.jpg" },
    { slug: "d-corba", name: "Günün Çorbası", price: "₺125", tag: "Her gün taze", desc: "Mevsim sebzeleriyle, her gün değişen tarif. Bugün: kereviz & elma.", meta: "210 kcal · vegan", image: "/images/dishes/d-corba.jpg" },
  ],
  icecek: [
    { slug: "d-hibiskus", name: "Hibiskus & Böğürtlen", price: "₺95", tag: "Soğuk", desc: "Demlenmiş hibiskus, böğürtlen, misket limonu.", meta: "ilave şekersiz", image: "/images/dishes/d-hibiskus.jpg" },
    { slug: "d-yesil", name: "Yeşil Tonik", price: "₺105", tag: "Detoks", desc: "Salatalık, elma, ıspanak, zencefil, limon.", meta: "soğuk sıkım", image: "/images/dishes/d-yesil.jpg" },
    { slug: "d-kombu", name: "Ev Yapımı Kombucha", price: "₺115", tag: "Fermente", desc: "Yeşil çay bazlı, şeftali & tarhun aromalı.", meta: "probiyotik", image: "/images/dishes/d-kombu.jpg" },
  ],
  tatli: [
    { slug: "d-tahinli", name: "Tahinli Kakao Topları", price: "₺85", tag: "Şekersiz", desc: "Hurma, tahin, kakao, kavrulmuş fındık.", meta: "190 kcal · vegan", image: "/images/dishes/d-tahinli.jpg" },
    { slug: "d-chia", name: "Chia & Fıstık", price: "₺105", tag: "Hafif", desc: "Hindistan cevizi sütlü chia, Antep fıstığı, kayısı.", meta: "260 kcal · vejetaryen", image: "/images/dishes/d-chia.jpg" },
  ],
};

export const TABS = [
  { key: "salata", label: "Salatalar" },
  { key: "kase", label: "Sıcak Kâseler" },
  { key: "yan", label: "Yanındakiler" },
  { key: "icecek", label: "İçecekler" },
  { key: "tatli", label: "Tatlılar" },
] as const;

export const NAV = [
  { href: "/menu", label: "Menü" },
  { href: "/dishes", label: "İmza Tabaklar" },
  { href: "/story", label: "Hikâye" },
  { href: "/more", label: "&more" },
  { href: "/locations", label: "Şubeler" },
  { href: "/app", label: "Uygulama" },
] as const;

export const FEATURED = [DISHES.salata[0], DISHES.kase[1], DISHES.salata[2], DISHES.kase[0]];

export const SIGNATURES = [
  { no: "01", slug: "sig-nar", name: "Nar & Tahin Kâsesi", price: "₺265", hook: "Ekşi, tatlı ve toprak — tek çatalda.", desc: "Közde pişmiş pancarın tatlılığını nar ekşisiyle kesiyor, tahini limonla açıp üstüne kavrulmuş nohudun çıtırlığını bırakıyoruz. Menünün en çok tekrar sipariş edilen tabağı.", chips: ["Vejetaryen", "620 kcal", "Glutensiz", "31 g protein"], image: "/images/dishes/sig-nar.jpg" },
  { no: "02", slug: "sig-somon", name: "Miso Somon Kâsesi", price: "₺345", hook: "Sıcak tabakta restoran ciddiyeti.", desc: "Miso ve akçaağaç şurubuyla glazelenip yüksek ısıda mühürlenen somon, siyah pirinç ve ev yapımı lahana turşusuyla. Zencefilli sos siparişte ayrı gelir.", chips: ["Omega-3", "740 kcal", "42 g protein"], image: "/images/dishes/sig-somon.jpg" },
  { no: "03", slug: "sig-mantar", name: "Umami Mantar", price: "₺285", hook: "Et yemeden et tokluğu.", desc: "Üç çeşit mantarı ayrı ayrı tavalayıp tofuyla buluşturuyoruz. Susam-zencefil miso sos, kinoanın üzerinde ısıyla açılıyor.", chips: ["Vegan", "650 kcal", "Yüksek lif"], image: "/images/dishes/d-mantar.jpg" },
  { no: "04", slug: "sig-kofte", name: "Otlu Köfte Kâsesi", price: "₺315", hook: "Anadolu tezgâhı, modern kâse.", desc: "Nane, maydanoz ve kimyonla yoğrulmuş dana köfte; bulgur pilavı, közlenmiş patlıcan ve süzme yoğurt. Acı biber turşusu isteğe bağlı.", chips: ["820 kcal", "46 g protein", "Çocuk dostu"], image: "/images/dishes/sig-kofte.jpg" },
  { no: "05", slug: "sig-yesil", name: "Yeşil Üstüne Yeşil", price: "₺275", hook: "En hafifi, en iddialısı.", desc: "Avokado, edamame, taze bezelye ve salatalık; misket limonu ve kişniş-jalapeño sosla. Yaz boyunca menünün bir numarası.", chips: ["Vegan", "480 kcal", "Düşük karbonhidrat"], image: "/images/dishes/sig-yesil.jpg" },
];

export const PILLARS = [
  { no: "01", title: "Günlük yapılan soslar", body: "On dört sosun hepsi şubede, her sabah, sıfırdan. Ne kıvam ayarı ne raf ömrü için katkı." },
  { no: "02", title: "Adıyla yazan menü", body: "Malzeme listesi kısaltılmaz. Ne varsa kartta yazar; alerjen bilgisi tahmine bırakılmaz." },
  { no: "03", title: "Mevsime bağlı mutfak", body: "Menü yılda dört kez baştan kurulur; sekiz tabak sabit kalır, gerisi mevsime göre değişir." },
  { no: "04", title: "Altı dakikada masada", body: "Mutfak akışı, kalabalık öğle saatinde bile ortalama altı dakikada teslim edecek şekilde tasarlandı." },
  { no: "05", title: "Tek dokunuş tekrar", body: "Uygulamada favori tabağını kişiselleştirmesiyle birlikte kaydet, bir sonraki sefer tek dokunuşla sipariş ver." },
  { no: "06", title: "Kapanınca bitmez", body: "Gün sonunda kalan tabaklar mahalle mutfaklarına gider. Çöpe giden tabak sayısı: sıfır hedefinde." },
];

export const VISION = [
  { kicker: "Vizyon", title: "Sağlıklı yemek varsayılan olsun", body: "Doğru yemeğin lüks değil, günün en kolay seçeneği olduğu bir şehir tasarlıyoruz. Fiyat, hız ve lezzet aynı anda mümkün." },
  { kicker: "Misyon", title: "Her tabağı savunabilmek", body: "Menüdeki her kalemi, mutfaktaki her adımı ve raftaki her ürünü müşteriye anlatabiliyorsak doğru yapıyoruz demektir." },
  { kicker: "Söz", title: "Kimseyi yavaşlatmadan", body: "Öğle arası kısadır. Gerçek mutfak standardını, hızlı servis ritmiyle vermeyi taahhüt ediyoruz." },
];

export const STATS = [
  { n: "32", label: "imza tabak, yılda dört kez yenilenen menü" },
  { n: "14", label: "şubede günlük hazırlanan sos çeşidi" },
  { n: "6 dk", label: "yoğun saatte ortalama teslim süresi" },
  { n: "4.9", label: "uygulama mağazası puanı, 38.000+ değerlendirme" },
];

export const SERVICES = [
  { slug: "sv-catering", title: "Catering", body: "Toplantı, açılış, doğum günü. 10 kişiden 400 kişiye kadar tabak tabak kurulum.", cta: "Teklif al", variant: "cream", image: undefined },
  { slug: "sv-office", title: "Ofis Teslimatı", body: "Ekibin için haftalık program: her gün belirlenen saatte, tek kutuda, isim etiketli.", cta: "Programı kur", variant: "ink", image: "/images/services/sv-office.jpg" },
  { slug: "sv-market", title: "green&more Market", body: "Sevdiğin sosu, tahinli kakao toplarını ve kombuchayı eve götür.", cta: "Rafı gör", variant: "cream", image: "/images/services/sv-market.jpg" },
  { slug: "sv-atolye", title: "Mutfak Atölyeleri", body: "Ayda iki cumartesi, şeflerle birlikte sos ve kâse kurma atölyesi.", cta: "Takvimi aç", variant: "lime", image: undefined },
  { slug: "sv-club", title: "Club Üyeliği", body: "Her 6. tabak bizden; sezon menüsüne bir hafta erken erişim.", cta: "Üye ol", variant: "cream", image: undefined },
  { slug: "sv-komsu", title: "Komşu Programı", body: "Gün sonunda kalan tabaklar aynı akşam mahalle mutfaklarına ulaşır.", cta: "Nasıl çalışır", variant: "green", image: undefined },
] as const;

export const LOCATIONS = [
  { name: "Nişantaşı", addr: "Teşvikiye Cd. 24, İstanbul", status: "Açık · 22:00’a kadar", open: true },
  { name: "Kanyon", addr: "Levent, İstanbul", status: "Açık · 21:00’a kadar", open: true },
  { name: "Moda", addr: "Bahariye Cd. 8, İstanbul", status: "Açık · 23:00’a kadar", open: true },
  { name: "Bebek", addr: "Cevdetpaşa Cd. 41, İstanbul", status: "Yakında", open: false },
  { name: "Çukurambar", addr: "Ankara", status: "Açık · 22:00’a kadar", open: true },
  { name: "Alsancak", addr: "İzmir", status: "Açık · 22:30’a kadar", open: true },
  { name: "Konyaaltı", addr: "Antalya", status: "Yakında", open: false },
];

export const APP_FEATURES = [
  { title: "Sıra beklemeden al", body: "Siparişi ver, bildirim gelince tezgâhtan al." },
  { title: "Tek dokunuşla tekrar", body: "Kişiselleştirmelerinle birlikte kayıtlı favoriler." },
  { title: "Her 6. tabak bizden", body: "Club puanları otomatik işlenir, kart taşımazsın." },
  { title: "Sezon menüsüne erken erişim", body: "Yeni tabaklar üyelere bir hafta önce açılır." },
];

export const CONTACTS = [
  { title: "Genel", body: "Her konuda ilk durak. Hafta içi 09:00–19:00.", value: "merhaba@greenandmore.co" },
  { title: "Catering & Ofis", body: "Teklif, menü kurgusu ve teslimat programı.", value: "catering@greenandmore.co" },
  { title: "Kariyer", body: "Mutfak, tezgâh ve merkez ofis pozisyonları.", value: "ekip@greenandmore.co" },
  { title: "Basın", body: "Marka görselleri ve röportaj talepleri.", value: "basin@greenandmore.co" },
];

export const FOOTER = [
  { title: "Keşfet", items: [
    { label: "Menü", href: "/menu" },
    { label: "İmza Tabaklar", href: "/dishes" },
    { label: "Şubeler", href: "/locations" },
    { label: "Uygulama", href: "/app" },
  ] },
  { title: "Kurum", items: [
    { label: "Hikâye & Vizyon", href: "/story" },
    { label: "&more servisleri", href: "/more" },
    { label: "Kariyer", href: "/contact" },
    { label: "İletişim", href: "/contact" },
  ] },
  { title: "Destek", items: [
    { label: "Alerjen rehberi", href: "/menu" },
    { label: "Catering teklifi", href: "/contact" },
    { label: "Hediye kartı", href: "/more" },
    { label: "Sıkça sorulanlar", href: "/contact" },
  ] },
];
