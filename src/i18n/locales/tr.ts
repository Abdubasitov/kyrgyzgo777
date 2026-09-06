import type { LocaleDict } from './ru'

const tr: LocaleDict = {
  /* ================= Genel ================= */
  'nav.home': 'Ana Sayfa',
  'nav.tours': 'Turlar',
  'nav.about': 'Hakkımızda',
  'nav.contacts': 'İletişim',
  'header.pickTour': 'Tur seç',
  'header.menuOpen': 'Menüyü aç',
  'header.menuClose': 'Menüyü kapat',
  'header.chooseLang': 'Dil seç',

  'footer.aboutText':
    'Kırgızistan\'da özgün turlar: dağlar, göller, yurt kampları ve sıradan kataloglarda bulamayacağınız rotalar.',
  'footer.navigation': 'Gezinme',
  'footer.allTours': 'Tüm turlar',
  'footer.aboutCompany': 'Hakkımızda',
  'footer.contacts': 'İletişim',
  'footer.contactUs': 'İletişime geç',
  'footer.location': 'Manas şehri, Kırgızistan',
  'footer.rights': 'Tüm hakları saklıdır.',

  'common.from': 'başlayan',
  'common.day_zero': 'gün',
  'common.day_one': 'gün',
  'common.day_two': 'gün',
  'common.day_few': 'gün',
  'common.day_many': 'gün',
  'common.day_other': 'gün',

  /* ================= Ana Sayfa ================= */
  'home.hero.eyebrow': 'Tanrı Dağları · Issık-Göl · Pamir-Alay',
  'home.hero.title': 'Kırgızistan, sadece yerellerin bildiği haliyle',
  'home.hero.subtitle':
    'Yurt kampları, atla geçişler ve size önermeden önce kendimiz yürüdüğümüz rotalar.',
  'home.hero.cta1': 'Turları gör',
  'home.hero.cta2': 'Rota planla',

  'home.stats.conducted': 'gerçekleştirilen tur',
  'home.stats.regions': 'Kırgızistan bölgesi',
  'home.stats.rating': 'ortalama puan',

  'home.why.title': 'Neden bizi seçiyorlar',
  'home.why.subtitle':
    'Turistleri sadece dağlara götürmüyoruz — bu yerlere olan sevgimizi paylaşıyoruz',
  'home.why.guides.title': 'Deneyimli rehberler',
  'home.why.guides.desc':
    'Rehberlerimiz dağları avuçlarının içi gibi bilen yerel halktandır',
  'home.why.safety.title': 'Güvenlik',
  'home.why.safety.desc':
    'Her rotada sigorta, ilk yardım çantası ve uydu telefonu',
  'home.why.unique.title': 'Özgün rotalar',
  'home.why.unique.desc':
    'Seyahat acentelerinin sıradan kataloglarında bulunmayan rotalar',
  'home.why.flexible.title': 'Esnek program',
  'home.why.flexible.desc':
    'Tatilinize uygun tarihleri ve süreyi seçin',

  'home.tours.title': 'Popüler rotalar',
  'home.tours.subtitle':
    'Her turun sayfasında rotanın interaktif haritası vardır',
  'home.tours.all': 'Tüm turlar',

  'home.reviews.title': 'Gezgin yorumları',
  'home.reviews.subtitle':
    'Bizimle dağlara çıkmış olanlar ne diyor',
  'home.reviews.0.text':
    'Song-Köl\'e unutulmaz bir yolculuk! Rehberler yurt kampındaki yaşamı mükemmel organize etti. Manzaralar — tam bir uzay!',
  'home.reviews.0.tour': 'Song-Köl Gölü',
  'home.reviews.1.text':
    'Jyrgalan\'daki trekking tüm beklentileri aştı. Alp çayırları, yurtlar, yıldızlı gökyüzü — herkese tavsiye ederim!',
  'home.reviews.1.tour': 'Issık-Göl + Jyrgalan',
  'home.reviews.2.text':
    'Ala-Arça\'ya bir günlük tur aldım — yeni başlayanlar için ideal. Şimdi bir haftalık rota istiyorum!',
  'home.reviews.2.tour': 'Ala-Arça bir günde',

  'home.cta.title': 'Maceraya hazır mısınız?',
  'home.cta.text':
    'Bizimle iletişime geçin, isteklerinize göre ideal rotayı hazırlayalım',
  'home.cta.contact': 'Bizimle iletişime geçin',
  'home.cta.choose': 'Tur seçin',
  /* ================= Tur Kataloğu ================= */
  'tours.catalog.title': 'Tur kataloğu',
  'tours.search.placeholder':
    'İsme, açıklamaya veya bölgeye göre ara...',
  'tours.filters.anyDifficulty': 'Her zorluk',
  'difficulty.easy': 'Kolay',
  'difficulty.medium': 'Orta',
  'difficulty.hard': 'Zor',
  'tours.filters.anyDuration': 'Her süre',
  'tours.filters.day1': '1 gün',
  'tours.filters.days24': '2-4 gün',
  'tours.filters.days5': '5+ gün',
  'tours.empty': 'Tur bulunamadı. Arama parametrelerini değiştirmeyi deneyin.',
  'tours.found': 'Bulunan tur: {{count}}',

  /* ================= Tur Detayı ================= */
  'tourDetail.notFound.title': 'Tur bulunamadı',
  'tourDetail.notFound.text':
    'Tur silinmiş ya da henüz oluşturulmamış olabilir.',
  'tourDetail.notFound.back': 'Kataloğa dön',
  'tourDetail.allTours': 'Tüm turlar',
  'tourDetail.aboutRoute': 'Rota hakkında',
  'tourDetail.from': 'Fiyat başlayan',
  'tourDetail.apply': 'Talep bırak',
  'tourDetail.ask': 'Soru sor',
  'tourDetail.routeOnMap': 'Haritada rota',
  'tourDetail.routeEmpty': 'Bu tur için henüz rota belirlenmedi.',
  'tourDetail.point': '{{count}}. nokta',

  /* ================= Tur Verileri ================= */
  'data.song-kul-3d.title': 'Song-Köl Gölü: yurtlarda 3 gün',
  'data.song-kul-3d.short':
    'Yüksek dağ gölünün yanında gece, atlar, şehir ışıkları olmadan yıldızlar.',
  'data.song-kul-3d.full':
    '3016 m yükseklikteki Song-Köl Gölü\'ne üç günlük rota. Kalmak-Aşu geçidinden geçer, çobanların yurtlarında kalır, at biner ve suyun üzerinde gün batımını izleriz. Rota, göçebe yaşamını müzede değil kendi gözleriyle görmek isteyenler için uygundur.',
  'data.song-kul-3d.region': 'Narın Bölgesi',
  'data.song-kul-3d.route.0': 'Biykek\'ten çıkış',
  'data.song-kul-3d.route.1': 'Kalmak-Aşu geçidi',
  'data.song-kul-3d.route.2': 'Song-Köl Gölü',

  'data.ala-archa-1d.title': 'Ala-Arça bir günde',
  'data.ala-archa-1d.short':
    'Biykek\'ten doğrudan dağlara hızlı çıkış — zamanı az olanlar için.',
  'data.ala-archa-1d.full':
    'Biykek\'e 40 dakika uzaklıktaki Ala-Arça Milli Parkı\'na bir günlük yürüyüş. Kozalaklı orman, ufuktaki buzullar ve Semyonov Tyan-Şanski zirvesinin panoraması. Daha uzun rotalardan önce ilk dağ çıkışı olarak idealdir.',
  'data.ala-archa-1d.region': 'Çuy Bölgesi',
  'data.ala-archa-1d.route.0': 'Biykek',
  'data.ala-archa-1d.route.1': 'Ala-Arça vadisi',

  'data.issyk-kul-jyrgalan-5d.title': 'Issık-Göl + Jyrgalan\'da trekking',
  'data.issyk-kul-jyrgalan-5d.short':
    'Ülkenin en büyük gölünde yüzme ve Alp çayırları boyunca yürüyüş.',
  'data.issyk-kul-jyrgalan-5d.full':
    'Beş gün: iki gün Issık-Göl\'ün güney kıyısında, sonra trekking ve kayak turturizminin merkezi haline gelen Jyrgalan köyüne geçiş. Yolda — Alp çayırları, yurt kampı yerleri ve neredeyse hiç turist grubu yok.',
  'data.issyk-kul-jyrgalan-5d.region': 'Issık-Göl Bölgesi',
  'data.issyk-kul-jyrgalan-5d.route.0': 'Karakol',
  'data.issyk-kul-jyrgalan-5d.route.1': 'Issık-Göl\'ün güney kıyısı',
  'data.issyk-kul-jyrgalan-5d.route.2': 'Jyrgalan',
  /* ================= Hakkımızda ================= */
  'about.hero.eyebrow': 'KyrgyzGo777 hakkında',
  'about.hero.title1': 'Kırgızistan\'ın dağları —',
  'about.hero.title2': 'bizim evimiz',
  'about.hero.subtitle':
    'Biz yerel rehberler ve gezginlerden oluşan bir ekibiz. Gerçek Kırgızistan\'ı gösteriyoruz: kalabalıklar ve şablon rotalar yok ama yurtlar, atlar ve üç bin metre yükseklikte gün batımları var.',
  'about.hero.cta1': 'Turları gör',
  'about.hero.cta2': 'Bize yaz',

  'about.marquee.0': 'Song-Köl',
  'about.marquee.1': 'Issık-Göl',
  'about.marquee.2': 'Ala-Arça',
  'about.marquee.3': 'Jyrgalan',
  'about.marquee.4': 'Tanrı Dağları',
  'about.marquee.5': 'Pamir-Alay',
  'about.marquee.6': 'Karakol vadisi',
  'about.marquee.7': 'Taş-Rabat',
  'about.marquee.8': 'Masal Kanyonu',
  'about.marquee.9': 'Suusamır',

  'about.story.eyebrow': 'Her şey nasıl başladı',
  'about.story.title': '2017\'deki yürüyüş hayatımızı değiştirdi',
  'about.story.p1':
    'Her şey bir çadır, yedi el yazması rota ve basit bir fikirle başladı: misafirlere kartpostal değil, yaşayan Kırgızistan\'ı göstermek — Song-Köl\'deki çobanların ve Ala-Arça\'daki ormancıların bildiği haliyle.',
  'about.story.p2':
    'Bugün KyrgyzGo777, Tanrı Dağları\'nın eteğinde büyümüş rehberlerden oluşan bir ekiptir. Her rotayı yaya ve atla geçtik; çayın nerede ısınacağını, yıldızların nereden izleneceğini ve hangi yurtta en lezzetli kımız olduğunu biliyoruz.',
  'about.story.quote': '«Turist taşımıyoruz — misafir olarak davet ediyoruz»',
  'about.story.imageAlt': 'Song-Köl Gölü, Kırgızistan',
  'about.story.badge': '📍 Song-Köl Gölü · 3016 m',

  'about.manifesto.sentence':
    'Dağları fethetmeye gerek yok — onlarla dost olmak gerek.',
  'about.manifesto.accent1': 'fethetmeye',
  'about.manifesto.accent2': 'dost',
  'about.manifesto.paragraph':
    'Zirveleri sadece bir işaret için fethetmiyoruz. Yolu buluyor, kendi ritmimizde yürüyor ve hikâyelerle dönüyoruz — yarışın yorgunluğuyla değil.',

  'about.values.eyebrow': 'Neden bize güveniliyor',
  'about.values.title': 'Tartışılmayan dört şey',
  'about.values.0.title': 'Güvenlik',
  'about.values.0.text':
    'Her rotada sigorta, uydu telefonu ve ilk yardım çantası. Hava durumunu önceden kontrol eder, kararları dengeli veririz.',
  'about.values.1.title': 'Yerel rehberler',
  'about.values.1.text':
    'Rehberlerimiz Tanrı Dağları\'nın eteğinde büyüdü. Dağların dilini — ve sizin konforunuzun dilini konuşurlar.',
  'about.values.2.title': 'Bizzat doğrulanmış',
  'about.values.2.text':
    'Her rotayı yaya ve atla geçtik: geçitleri, güzergâhları ve gün batımı fotoğrafları için en iyi noktaları biliyoruz.',
  'about.values.3.title': 'Küçük gruplar',
  'about.values.3.text':
    'Grupta en fazla 8 kişi — böylece herkesin ateş başında bir yeri ve hatırlayacağı kendi hikâyesi olur.',

  'about.stats.0': 'gerçekleştirilen tur',
  'about.stats.1': 'Kırgızistan bölgesi',
  'about.stats.2': 'misafirlerin ortalama puanı',
  'about.stats.3': 'bizzat doğrulanmış rota',

  'about.team.eyebrow': 'Sizi dağlara kim çıkarıyor',
  'about.team.title': 'KyrgyzGo777 ekibi',
  'about.team.sub':
    'Rehberinizin kim olacağı önemli değil — önemli olan her birinin bu dağlarda büyümüş olması.',
  'about.team.0.role': 'Kurucu ve baş rehber',
  'about.team.0.line':
    'Arkasında 100+ dağ çıkışı. Song-Köl rotalarını çobanların isimleriyle bilir.',
  'about.team.1.role': 'Rehber ve organizatör',
  'about.team.1.line':
    'Mesajlara dağ deresinden daha hızlı yanıt verir. Programı her tarihe uygun hazırlar.',
  'about.team.2.role': 'At bakıcısı ve kılavuz',
  'about.team.2.line':
    'Atlar hakkında insanlardan çok anlatır. Onunla karşıya geçiş bir macera değil — bir yürüyüştür.',
  'about.team.3.role': 'Göçebe mutfağının bekçisi',
  'about.team.3.line':
    'Onun kımızı ve kurutu — başlı başına bir tur. Ateş başında akşam plavı — ekibin imzası.',

  'about.steps.eyebrow': 'Basit ve bürokrasisiz',
  'about.steps.title': 'Yolculuk nasıl geçiyor',
  'about.steps.0.title': 'Seçim',
  'about.steps.0.text':
    'Turlara göz atarsınız veya bize fikrinizi yazarsınız — hatta «sadece dağlara gitmek istiyorum» bile.',
  'about.steps.1.title': 'Görüşme',
  'about.steps.1.text':
    'Tarihleri, bütçeyi, hazır olma seviyesini netleştiriyoruz. Ne kadar gerçekçi olduğunu dürüstçe söylüyoruz.',
  'about.steps.2.title': 'Buluşma',
  'about.steps.2.text':
    'Biykek\'te veya Manas\'ta buluşur, sırt çantalarını yükleriz — ve yola çıkarız.',
  'about.steps.3.title': 'İzlenimler',
  'about.steps.3.text':
    'Fotoğraflar, yeni arkadaşlar ve geri dönme isteğiyle ayrılırsınız.',

  'about.cta.title': 'Birlikte dağlara çıkalım mı?',
  'about.cta.text':
    'Bize yazın — tarihlerinize, temponuza ve hazırlık seviyenize uygun bir rota seçelim. Tek bir mesajla başlayın.',
  'about.cta.tours': 'Turları gör',
  'about.cta.whatsapp': 'WhatsApp\'tan yazın',
  'about.cta.instagram': 'Instagram',

  /* ================= İletişim ================= */
  'contacts.title': 'İletişim',
  'contacts.subtitle':
    'Bizimle size uygun herhangi bir yoldan iletişime geçin. Çalışma saatlerinde bir saat içinde yanıt veririz.',
  'contacts.card.title': 'Bizimle iletişime geçin',
  'contacts.whatsapp': 'WhatsApp',
  'contacts.instagram': 'Instagram',
  'contacts.location': 'Konum',
  'contacts.form.title': 'Bize yazın',
  'contacts.form.name': 'Adınız',
  'contacts.form.namePlace': 'Size nasıl hitap edelim?',
  'contacts.form.phone': 'Telefon veya WhatsApp',
  'contacts.form.message': 'Mesaj',
  'contacts.form.messagePlace':
    'Hangi tur ilginizi çekiyor? Yolculuğu ne zaman planlıyorsunuz?',
  'contacts.form.submit': 'Talep gönder',

  /* ================= 404 ================= */
  'notFound.text': 'Böyle bir sayfa yok.',
  'notFound.back': 'Ana sayfaya',

  /* ================= Yönetim ================= */
  'admin.login.title': 'Yönetim paneline giriş',
  'admin.login.subtitle': 'KyrgyzGo777 — tur yönetim sistemi',
  'admin.login.username': 'Kullanıcı adı',
  'admin.login.usernamePlace': 'Kullanıcı adını girin',
  'admin.login.password': 'Şifre',
  'admin.login.passwordPlace': 'Şifre girin',
  'admin.login.submit': 'Giriş',
  'admin.login.error': 'Yanlış kullanıcı adı veya şifre',
  'admin.header.title': 'KyrgyzGo777 Yönetim paneli',
  'admin.logout': 'Çıkış',
  'admin.nav.dashboard': 'Panel',
  'admin.nav.tours': 'Turlar',
  'admin.dashboard.title': 'Panel',
  'admin.dashboard.newTour': 'Yeni tur',
  'admin.dashboard.totalTours': 'Toplam tur',
  'admin.dashboard.allTours': 'Tüm turlar',
  'admin.tours.title': 'Turları yönet',
  'admin.tours.add': 'Tur ekle',
  'admin.tours.empty': 'Tur yok. İlkini oluşturun!',
  'admin.tours.deleteConfirm': '"{{title}}" turu silinsin mi?',
  'admin.tours.view': 'Görüntüle',
  'admin.tours.edit': 'Düzenle',
  'admin.tours.delete': 'Sil',
  'admin.tours.days': 'gün',
  'admin.form.back': 'Listeye dön',
  'admin.form.editTitle': 'Turu düzenle',
  'admin.form.newTitle': 'Yeni tur',
  'admin.form.basicInfo': 'Temel bilgiler',
  'admin.form.titleLabel': 'Tur adı *',
  'admin.form.titlePlace': 'Örn: Song-Köl Gölü',
  'admin.form.price': 'Fiyat *',
  'admin.form.currency': 'Para birimi',
  'admin.form.currencyKGS': 'KGS (Som)',
  'admin.form.currencyUSD': 'USD ($)',
  'admin.form.days': 'Gün',
  'admin.form.difficulty': 'Zorluk',
  'admin.form.region': 'Bölge',
  'admin.form.regionPlace': 'Issık-Göl Bölgesi',
  'admin.form.shortDesc': 'Kısa açıklama',
  'admin.form.shortDescPlace': 'Tur kartı için kısa açıklama',
  'admin.form.fullDesc': 'Tam açıklama',
  'admin.form.fullDescPlace': 'Rota ve programın ayrıntılı açıklaması',
  'admin.form.imageUrl': 'Kapak görseli URL\'si',
  'admin.form.imageUrlPlace': '/images/tours/tour-name.jpg',
  'admin.form.featured': 'Ana sayfada göster',
  'admin.form.routePoints': 'Rota noktaları',
  'admin.form.routeEmpty': 'Rota noktası yok',
  'admin.form.latPlace': 'Enlem (lat)',
  'admin.form.lngPlace': 'Boylam (lng)',
  'admin.form.pointNamePlace': 'Nokta adı',
  'admin.form.addPoint': 'Nokta ekle',
  'admin.form.cancel': 'İptal',
  'admin.form.save': 'Değişiklikleri kaydet',
  'admin.form.create': 'Tur oluştur',
  'admin.form.requiredAlert': 'Lütfen zorunlu alanları doldurun',
} as LocaleDict

export default tr