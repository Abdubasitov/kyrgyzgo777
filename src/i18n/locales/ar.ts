import type { LocaleDict } from './ru'

const ar: LocaleDict = {
  /* ================= عام ================= */
  'nav.home': 'الرئيسية',
  'nav.tours': 'الجولات',
  'nav.about': 'من نحن',
  'nav.contacts': 'اتصل بنا',
  'header.pickTour': 'اختر جولة',
  'header.menuOpen': 'فتح القائمة',
  'header.menuClose': 'إغلاق القائمة',
  'header.chooseLang': 'اختر اللغة',

  'footer.aboutText':
    'جولات مميزة في قيرغيزستان: جبال وبحيرات ومعسكرات خيام ومسارات لا تجدها في الكتالوجات التقليدية.',
  'footer.navigation': 'التنقل',
  'footer.allTours': 'جميع الجولات',
  'footer.aboutCompany': 'من نحن',
  'footer.contacts': 'اتصل بنا',
  'footer.contactUs': 'تواصل معنا',
  'footer.location': 'مدينة ماناس، قيرغيزستان',
  'footer.rights': 'جميع الحقوق محفوظة.',

  'common.from': 'يبدأ من',
  'common.day_zero': 'أيام',
  'common.day_one': 'يوم',
  'common.day_two': 'يومان',
  'common.day_few': 'أيام',
  'common.day_many': 'يوماً',
  'common.day_other': 'أيام',

  /* ================= الرئيسية ================= */
  'home.hero.eyebrow': 'تيان شان · إيسيك كول · بامير-آلاي',
  'home.hero.title': 'قيرغيزستان كما يعرفها السكان المحليون فقط',
  'home.hero.subtitle':
    'معسكرات الخيام ورحلات الخيول والمسارات التي مشيناها بأنفسنا — قبل أن نعرضها عليكم.',
  'home.hero.cta1': 'عرض الجولات',
  'home.hero.cta2': 'تخطيط مسار',

  'home.stats.conducted': 'جولة منفذة',
  'home.stats.regions': 'منطقة في قيرغيزستان',
  'home.stats.rating': 'التقييم المتوسط',

  'home.why.title': 'لماذا يختاروننا',
  'home.why.subtitle':
    'نحن لا نأخذ السياح إلى الجبال فحسب — بل نشاركهم حبنا لهذه الأماكن',
  'home.why.guides.title': 'مرشدون ذوو خبرة',
  'home.why.guides.desc':
    'مرشدونا من السكان المحليين الذين يعرفون الجبال مثل راحة أيديهم',
  'home.why.safety.title': 'الأمان',
  'home.why.safety.desc':
    'تأمين وحقيبة إسعافات أولية وهاتف يعمل بالأقمار الصناعية في كل مسار',
  'home.why.unique.title': 'مسارات فريدة',
  'home.why.unique.desc':
    'مسارات لا تجدها في الكتالوجات التقليدية لشركات السياحة',
  'home.why.flexible.title': 'جدول مرن',
  'home.why.flexible.desc':
    'اختاروا التواريخ والمدة بما يناسب عطلتكم',

  'home.tours.title': 'مسارات شائعة',
  'home.tours.subtitle':
    'في صفحة كل جولة خريطة تفاعلية للمسار',
  'home.tours.all': 'جميع الجولات',

  'home.reviews.title': 'آراء المسافرين',
  'home.reviews.subtitle':
    'ماذا يقول الذين ذهبوا معنا إلى الجبال من قبل',
  'home.reviews.0.text':
    'رحلة لا تُنسى إلى سون-كول! نظّم المرشدون الحياة في معسكر الخيام بشكل رائع. المناظر — خيالية تماماً!',
  'home.reviews.0.tour': 'بحيرة سون-كول',
  'home.reviews.1.text':
    'تجاوزت رياضة المشي في جيرغالان كل التوقعات. مروج جبال الألب والخيام والسماء المرصعة بالنجوم — أنصح بها الجميع!',
  'home.reviews.1.tour': 'إيسيك كول + جيرغالان',
  'home.reviews.2.text':
    'أخذت جولة ليوم واحد إلى آلا-أرتشا — مثالية للمبتدئين. الآن أريد مساراً لأسبوع!',
  'home.reviews.2.tour': 'آلا-أرتشا في يوم واحد',

  'home.cta.title': 'مستعدون للمغامرة؟',
  'home.cta.text':
    'تواصلوا معنا وسنختار لكم المسار المثالي حسب رغباتكم',
  'home.cta.contact': 'تواصلوا معنا',
  'home.cta.choose': 'اختر جولة',
  /* ================= كتالوج الجولات ================= */
  'tours.catalog.title': 'كتالوج الجولات',
  'tours.search.placeholder':
    'ابحث بالاسم أو الوصف أو المنطقة...',
  'tours.filters.anyDifficulty': 'أي مستوى صعوبة',
  'difficulty.easy': 'سهل',
  'difficulty.medium': 'متوسط',
  'difficulty.hard': 'صعب',
  'tours.filters.anyDuration': 'أي مدة',
  'tours.filters.day1': 'يوم واحد',
  'tours.filters.days24': '2-4 أيام',
  'tours.filters.days5': '5+ أيام',
  'tours.empty': 'لم يتم العثور على جولات. جرّب تغيير معايير البحث.',
  'tours.found': 'الجولات التي تم العثور عليها: {{count}}',

  /* ================= صفحة الجولة ================= */
  'tourDetail.notFound.title': 'لم يتم العثور على الجولة',
  'tourDetail.notFound.text':
    'ربما تم حذف الجولة أو لم يتم إنشاؤها بعد.',
  'tourDetail.notFound.back': 'العودة إلى الكتالوج',
  'tourDetail.allTours': 'جميع الجولات',
  'tourDetail.aboutRoute': 'عن المسار',
  'tourDetail.from': 'السعر يبدأ من',
  'tourDetail.apply': 'إرسال طلب',
  'tourDetail.ask': 'طرح سؤال',
  'tourDetail.routeOnMap': 'المسار على الخريطة',
  'tourDetail.routeEmpty': 'لم يتم تحديد مسار لهذه الجولة بعد.',
  'tourDetail.point': 'المحطة {{count}}',

  /* ================= بيانات الجولات ================= */
  'data.song-kul-3d.title': 'بحيرة سون-كول: 3 أيام في الخيام',
  'data.song-kul-3d.short':
    'مبيت بجانب بحيرة جبلية عالية، خيول، ونجوم بلا أضواء المدينة.',
  'data.song-kul-3d.full':
    'مسار لثلاثة أيام إلى بحيرة سون-كول على ارتفاع 3016 متر. نعبر ممر كالماك-أشو، وننام في خيام الرعاة، ونمتطي الخيول ونشاهد الغروب فوق الماء. المسار مناسب لمن يريد رؤية حياة البدو الرحل بأعينهم لا في متحف.',
  'data.song-kul-3d.region': 'منطقة نارين',
  'data.song-kul-3d.route.0': 'المغادرة من بيشكيك',
  'data.song-kul-3d.route.1': 'ممر كالماك-أشو',
  'data.song-kul-3d.route.2': 'بحيرة سون-كول',

  'data.ala-archa-1d.title': 'آلا-أرتشا في يوم واحد',
  'data.ala-archa-1d.short':
    'خروج سريع إلى الجبال مباشرة من بيشكيك — لمن لا يملكون وقتاً كافياً.',
  'data.ala-archa-1d.full':
    'نزهة ليوم واحد في حديقة آلا-أرتشا الوطنية على بُعد 40 دقيقة من بيشكيك. غابة صنوبرية، أنهار جليدية في الأفق، وإطلالة على قمة سيميونوف تيان-شان. مثالية كأول خروج إلى الجبال قبل المسارات الأطول.',
  'data.ala-archa-1d.region': 'منطقة تشوي',
  'data.ala-archa-1d.route.0': 'بيشكيك',
  'data.ala-archa-1d.route.1': 'وادي آلا-أرتشا',

  'data.issyk-kul-jyrgalan-5d.title': 'إيسيك كول + رياضة المشي في جيرغالان',
  'data.issyk-kul-jyrgalan-5d.short':
    'سباحة في أكبر بحيرة في البلاد والتنزه عبر مروج جبال الألب.',
  'data.issyk-kul-jyrgalan-5d.full':
    'خمسة أيام: يومان على الشاطئ الجنوبي لإيسيك كول، ثم الانتقال إلى جيرغالان — القرية التي أصبحت مركزاً لرياضة المشي والتزلج. على طول الطريق — مروج جبال الألب ومخيمات الخيام وغياب شبه كامل للمجموعات السياحية.',
  'data.issyk-kul-jyrgalan-5d.region': 'منطقة إيسيك كول',
  'data.issyk-kul-jyrgalan-5d.route.0': 'كاراكول',
  'data.issyk-kul-jyrgalan-5d.route.1': 'الشاطئ الجنوبي لإيسيك كول',
  'data.issyk-kul-jyrgalan-5d.route.2': 'جيرغالان',
  /* ================= من نحن ================= */
  'about.hero.eyebrow': 'عن KyrgyzGo777',
  'about.hero.title1': 'جبال قيرغيزستان —',
  'about.hero.title2': 'بيتنا',
  'about.hero.subtitle':
    'نحن فريق محلي من المرشدين والمسافرين. نُظهر قيرغيزستان الحقيقية: بلا زحام ولا مسارات نمطية، لكن مع الخيام والخيول وغروب الشمس على ارتفاع ثلاثة آلاف متر.',
  'about.hero.cta1': 'عرض الجولات',
  'about.hero.cta2': 'اكتب لنا',

  'about.marquee.0': 'سون-كول',
  'about.marquee.1': 'إيسيك كول',
  'about.marquee.2': 'آلا-أرتشا',
  'about.marquee.3': 'جيرغالان',
  'about.marquee.4': 'تيان شان',
  'about.marquee.5': 'بامير-آلاي',
  'about.marquee.6': 'وادي كاراكول',
  'about.marquee.7': 'طاش-رابات',
  'about.marquee.8': 'وادي الحكايات',
  'about.marquee.9': 'سوسامير',

  'about.story.eyebrow': 'كيف بدأ كل شيء',
  'about.story.title': 'رحلة المشي عام 2017 غيّرت حياتنا',
  'about.story.p1':
    'بدأ كل شيء بخيمة واحدة وسبعة مسارات مكتوبة باليد وفكرة بسيطة: أن نُظهر للضيوف قيرغيزستان ليست البطاقة البريدية بل الحية — تلك التي يعرفها الرعاة في سون-كول وحُرّاس الغابات في آلا-أرتشا.',
  'about.story.p2':
    'اليوم KyrgyzGo777 هي فريق من المرشدين الذين نشأوا عند سفح تيان شان. مشينا كل مسار سيراً على الأقدام وعلى ظهور الخيل؛ نعرف أين نُدفئ الشاي، ومن أين نراقب النجوم، وفي أي خيمة أشهى مشروب الكوميز.',
  'about.story.quote': '«نحن لا ننقل السياح — نحن ندعوهم كضيوف»',
  'about.story.imageAlt': 'بحيرة سون-كول، قيرغيزستان',
  'about.story.badge': '📍 بحيرة سون-كول · 3016 م',

  'about.manifesto.sentence':
    'الجبال لا تحتاج إلى غزو — بل إلى صداقة.',
  'about.manifesto.accent1': 'غزو',
  'about.manifesto.accent2': 'صداقة',
  'about.manifesto.paragraph':
    'نحن لا نغزو القمم لمجرد تسجيل علامة. نحن نجد الطريق، نسير بإيقاعنا الخاص ونعود بالقصص — لا بالتعب الناتج عن سباق.',

  'about.values.eyebrow': 'لماذا يثقون بنا',
  'about.values.title': 'أربعة أشياء لا نقبل الجدل فيها',
  'about.values.0.title': 'الأمان',
  'about.values.0.text':
    'تأمين وهاتف يعمل بالأقمار الصناعية وحقيبة إسعافات في كل مسار. نتابع الطقس مسبقاً ونتخذ قرارات متزنة.',
  'about.values.1.title': 'مرشدون محليون',
  'about.values.1.text':
    'نشأ مرشدونا عند سفح تيان شان. يتحدثون لغة الجبال — ولغة راحتكم.',
  'about.values.2.title': 'مُجرَّب شخصياً',
  'about.values.2.text':
    'مشينا كل مسار سيراً وعلى ظهور الخيل: نعرف المخاضات والمعابر وأفضل النقاط لصور الغروب.',
  'about.values.3.title': 'مجموعات صغيرة',
  'about.values.3.text':
    'حتى 8 أشخاص في المجموعة — ليكون لكل فرد مكانه حول النار وقصته الخاصة ليحتفظ بها.',

  'about.stats.0': 'جولة منفذة',
  'about.stats.1': 'منطقة في قيرغيزستان',
  'about.stats.2': 'متوسط تقييم الضيوف',
  'about.stats.3': 'مسار مُجرَّب شخصياً',

  'about.team.eyebrow': 'من يقودكم إلى الجبال',
  'about.team.title': 'فريق KyrgyzGo777',
  'about.team.sub':
    'لا يهم من سيكون مرشدكم — المهم أن كل واحد منهم نشأ في هذه الجبال بنفسه.',
  'about.team.0.role': 'المؤسس والمرشد الرئيسي',
  'about.team.0.line':
    'أكثر من 100 خروج إلى الجبال. يعرف مسارات سون-كول بأسماء الرعاة.',
  'about.team.1.role': 'مرشدة ومنظمة',
  'about.team.1.line':
    'ترد على الرسائل أسرع من جدول جبلي. تضع برنامجاً يناسب أي مواعيد.',
  'about.team.2.role': 'سائس الخيول والدليل',
  'about.team.2.line':
    'سيحدثكم عن الخيول أكثر مما عن الناس. معه، عبور النهر ليس مغامرة بل نزهة.',
  'about.team.3.role': 'حارسة المطبخ البدوي',
  'about.team.3.line':
    'كوميزها وكورتاها — جولة بحد ذاتها. بلوف المساء بجانب النار — البطاقة التعريفية للفريق.',
  'about.cta.tours': 'عرض الجولات',
  'about.cta.whatsapp': 'اكتب عبر واتساب',
  'about.cta.instagram': 'إنستغرام',

  /* ================= الاتصال ================= */
  'contacts.title': 'اتصل بنا',
  'contacts.subtitle':
    'تواصلوا معنا بأي طريقة تناسبكم. نرد خلال ساعة في أوقات العمل.',
  'contacts.card.title': 'تواصل معنا',
  'contacts.whatsapp': 'واتساب',
  'contacts.instagram': 'إنستغرام',
  'contacts.location': 'الموقع',
  'contacts.form.title': 'اكتب لنا',
  'contacts.form.name': 'اسمك',
  'contacts.form.namePlace': 'كيف نخاطبك؟',
  'contacts.form.phone': 'الهاتف أو واتساب',
  'contacts.form.message': 'الرسالة',
  'contacts.form.messagePlace': 'ما هي الجولة التي تهمك؟ متى تخطط للسفر؟',
  'contacts.form.submit': 'إرسال الطلب',

  /* ================= 404 ================= */
  'notFound.text': 'لا توجد مثل هذه الصفحة.',
  'notFound.back': 'إلى الرئيسية',

  /* ================= لوحة الإدارة ================= */
  'admin.login.title': 'تسجيل الدخول إلى لوحة الإدارة',
  'admin.login.subtitle': 'KyrgyzGo777 — نظام إدارة الجولات',
  'admin.login.username': 'اسم المستخدم',
  'admin.login.usernamePlace': 'أدخل اسم المستخدم',
  'admin.login.password': 'كلمة المرور',
  'admin.login.passwordPlace': 'أدخل كلمة المرور',
  'admin.login.submit': 'دخول',
  'admin.login.error': 'اسم المستخدم أو كلمة المرور غير صحيحة',
  'admin.header.title': 'KyrgyzGo777 لوحة الإدارة',
  'admin.logout': 'خروج',
  'admin.nav.dashboard': 'لوحة القيادة',
  'admin.nav.tours': 'الجولات',
  'admin.dashboard.title': 'لوحة القيادة',
  'admin.dashboard.newTour': 'جولة جديدة',
  'admin.dashboard.totalTours': 'إجمالي الجولات',
  'admin.dashboard.allTours': 'جميع الجولات',
  'admin.tours.title': 'إدارة الجولات',
  'admin.tours.add': 'إضافة جولة',
  'admin.tours.empty': 'لا توجد جولات. أنشئ الأولى!',
  'admin.tours.deleteConfirm': 'حذف الجولة «{{title}}»؟',
  'admin.tours.view': 'عرض',
  'admin.tours.edit': 'تعديل',
  'admin.tours.delete': 'حذف',
  'admin.tours.days': 'أيام',
  'admin.form.back': 'العودة إلى القائمة',
  'admin.form.editTitle': 'تعديل الجولة',
  'admin.form.newTitle': 'جولة جديدة',
  'admin.form.basicInfo': 'المعلومات الأساسية',
  'admin.form.titleLabel': 'اسم الجولة *',
  'admin.form.titlePlace': 'مثال: بحيرة سون-كول',
  'admin.form.price': 'السعر *',
  'admin.form.currency': 'العملة',
  'admin.form.currencyKGS': 'KGS (سوم)',
  'admin.form.currencyUSD': 'USD ($)',
  'admin.form.days': 'الأيام',
  'admin.form.difficulty': 'الصعوبة',
  'admin.form.region': 'المنطقة',
  'admin.form.regionPlace': 'منطقة إيسيك كول',
  'admin.form.shortDesc': 'وصف قصير',
  'admin.form.shortDescPlace': 'وصف قصير لبطاقة الجولة',
  'admin.form.fullDesc': 'الوصف الكامل',
  'admin.form.fullDescPlace': 'وصف تفصيلي للمسار والبرنامج',
  'admin.form.imageUrl': 'عنوان صورة الغلاف',
  'admin.form.imageUrlPlace': '/images/tours/tour-name.jpg',
  'admin.form.featured': 'العرض على الصفحة الرئيسية',
  'admin.form.routePoints': 'محطات المسار',
  'admin.form.routeEmpty': 'لا توجد محطات للمسار',
  'admin.form.latPlace': 'خط العرض (lat)',
  'admin.form.lngPlace': 'خط الطول (lng)',
  'admin.form.pointNamePlace': 'اسم المحطة',
  'admin.form.addPoint': 'إضافة محطة',
  'admin.form.cancel': 'إلغاء',
  'admin.form.save': 'حفظ التغييرات',
  'admin.form.create': 'إنشاء جولة',
  'admin.form.requiredAlert': 'يرجى تعبئة الحقول الإجبارية',
} as LocaleDict

export default ar