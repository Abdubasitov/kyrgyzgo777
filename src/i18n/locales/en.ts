import type { LocaleDict } from './ru'

const en: LocaleDict = {
  /* ================= Common ================= */
  'nav.home': 'Home',
  'nav.tours': 'Tours',
  'nav.about': 'About',
  'nav.contacts': 'Contacts',
  'header.pickTour': 'Plan your tour',
  'header.menuOpen': 'Open menu',
  'header.menuClose': 'Close menu',
  'header.chooseLang': 'Choose language',

  'footer.aboutText':
    'Signature tours across Kyrgyzstan: mountains, lakes, yurt camps and routes you will not find in any standard catalogue.',
  'footer.navigation': 'Navigation',
  'footer.allTours': 'All tours',
  'footer.aboutCompany': 'About us',
  'footer.contacts': 'Contacts',
  'footer.contactUs': 'Get in touch',
  'footer.location': 'Manas city, Kyrgyzstan',
  'footer.rights': 'All rights reserved.',

  'common.from': 'from',
  'common.day_zero': 'days',
  'common.day_one': 'day',
  'common.day_two': 'days',
  'common.day_few': 'days',
  'common.day_many': 'days',
  'common.day_other': 'days',

  /* ================= Home ================= */
  'home.hero.eyebrow': 'Tian Shan · Issyk-Kul · Pamir-Alay',
  'home.hero.title': 'Kyrgyzstan the way only locals know it',
  'home.hero.subtitle':
    'Yurt camps, horse treks and trails we have walked ourselves — before offering them to you.',
  'home.hero.cta1': 'View tours',
  'home.hero.cta2': 'Plan a route',

  'home.stats.conducted': 'tours led',
  'home.stats.regions': 'regions of Kyrgyzstan',
  'home.stats.rating': 'average rating',

  'home.why.title': 'Why choose us',
  'home.why.subtitle':
    'We do not just take travellers into the mountains — we share our love for these places',
  'home.why.guides.title': 'Experienced guides',
  'home.why.guides.desc':
    'Our guides are locals who know the mountains like the back of their hand',
  'home.why.safety.title': 'Safety',
  'home.why.safety.desc':
    'Insurance, first aid kit and satellite phone on every route',
  'home.why.unique.title': 'Unique routes',
  'home.why.unique.desc':
    'Routes you will not find in standard travel agency catalogues',
  'home.why.flexible.title': 'Flexible schedule',
  'home.why.flexible.desc':
    'Pick dates and duration to fit your holiday',

  'home.tours.title': 'Popular routes',
  'home.tours.subtitle':
    'Every tour page features an interactive map with the route',
  'home.tours.all': 'All tours',

  'home.reviews.title': 'Traveller reviews',
  'home.reviews.subtitle':
    'What those who have already been to the mountains with us say',
  'home.reviews.0.text':
    'An unforgettable trip to Song-Kul! The guides organised life in the yurt camp brilliantly. The views are out of this world!',
  'home.reviews.0.tour': 'Song-Kul Lake',
  'home.reviews.1.text':
    'Trekking in Jyrgalan exceeded all expectations. Alpine meadows, yurts, a starry sky — highly recommended!',
  'home.reviews.1.tour': 'Issyk-Kul + Jyrgalan',
  'home.reviews.2.text':
    'I took a one-day tour to Ala-Archa — ideal for beginners. Now I want a week-long route!',
  'home.reviews.2.tour': 'Ala-Archa in one day',

  'home.cta.title': 'Ready for an adventure?',
  'home.cta.text':
    'Get in touch and we will craft the ideal route for your wishes',
  'home.cta.contact': 'Contact us',
  'home.cta.choose': 'Choose a tour',
  /* ================= Tour catalogue ================= */
  'tours.catalog.title': 'Tour catalogue',
  'tours.search.placeholder':
    'Search by name, description or region...',
  'tours.filters.anyDifficulty': 'Any difficulty',
  'difficulty.easy': 'Easy',
  'difficulty.medium': 'Moderate',
  'difficulty.hard': 'Hard',
  'tours.filters.anyDuration': 'Any duration',
  'tours.filters.day1': '1 day',
  'tours.filters.days24': '2-4 days',
  'tours.filters.days5': '5+ days',
  'tours.empty': 'No tours found. Try changing your search filters.',
  'tours.found': 'Tours found: {{count}}',

  /* ================= Tour detail ================= */
  'tourDetail.notFound.title': 'Tour not found',
  'tourDetail.notFound.text':
    'The tour may have been deleted or not created yet.',
  'tourDetail.notFound.back': 'Back to catalogue',
  'tourDetail.allTours': 'All tours',
  'tourDetail.aboutRoute': 'About the route',
  'tourDetail.from': 'Price from',
  'tourDetail.apply': 'Leave a request',
  'tourDetail.ask': 'Ask a question',
  'tourDetail.routeOnMap': 'Route on the map',
  'tourDetail.routeEmpty': 'No route has been set for this tour yet.',
  'tourDetail.point': 'Stop {{count}}',

  /* ================= Tour data ================= */
  'data.song-kul-3d.title': 'Song-Kul Lake: 3 days in yurts',
  'data.song-kul-3d.short':
    'Spending the night by a high-mountain lake, horses and stars without city lights.',
  'data.song-kul-3d.full':
    'A three-day route to Song-Kul Lake at 3016 m. We cross the Kalmak-Ashuu pass, stay in shepherds’ yurts, go horse riding and watch the sunset over the water. The route suits those who want to see nomadic life with their own eyes rather than in a museum.',
  'data.song-kul-3d.region': 'Naryn Region',
  'data.song-kul-3d.route.0': 'Departure from Bishkek',
  'data.song-kul-3d.route.1': 'Kalmak-Ashuu pass',
  'data.song-kul-3d.route.2': 'Song-Kul Lake',

  'data.ala-archa-1d.title': 'Ala-Archa in one day',
  'data.ala-archa-1d.short':
    'A quick escape to the mountains right from Bishkek — for those short on time.',
 'data.ala-archa-1d.full':
    'A day hike in Ala-Archa National Park, 40 minutes from Bishkek. Pine forest, glaciers on the horizon and a panorama of Semyonov Tien-Shan Peak. Ideal as a first mountain outing before longer routes.',
  'data.ala-archa-1d.region': 'Chuy Region',
  'data.ala-archa-1d.route.0': 'Bishkek',
  'data.ala-archa-1d.route.1': 'Ala-Archa gorge',

  'data.issyk-kul-jyrgalan-5d.title':
    'Issyk-Kul + trekking in Jyrgalan',
  'data.issyk-kul-jyrgalan-5d.short':
    'Swimming in the country’s largest lake and a trek across alpine meadows.',
  'data.issyk-kul-jyrgalan-5d.full':
    'Five days: two days on the southern shore of Issyk-Kul, then a move to Jyrgalan — a village that has become the centre of trekking and ski touring. Along the way — alpine meadows, yurt camps and almost no tourist groups at all.',
  'data.issyk-kul-jyrgalan-5d.region': 'Issyk-Kul Region',
  'data.issyk-kul-jyrgalan-5d.route.0': 'Karakol',
  'data.issyk-kul-jyrgalan-5d.route.1': 'Southern shore of Issyk-Kul',
  'data.issyk-kul-jyrgalan-5d.route.2': 'Jyrgalan',
  /* ================= About ================= */
  'about.hero.eyebrow': 'About KyrgyzGo777',
  'about.hero.title1': 'The mountains of Kyrgyzstan —',
  'about.hero.title2': 'our home',
  'about.hero.subtitle':
    'We are a local team of guides and travellers. We show the real Kyrgyzstan: no crowds or cookie-cutter routes, but with yurts, horses and sunsets at three thousand metres.',
  'about.hero.cta1': 'View tours',
  'about.hero.cta2': 'Write to us',

  'about.marquee.0': 'Son-Kul',
  'about.marquee.1': 'Issyk-Kul',
  'about.marquee.2': 'Ala-Archa',
  'about.marquee.3': 'Jyrgalan',
  'about.marquee.4': 'Tien Shan',
  'about.marquee.5': 'Pamir-Alay',
  'about.marquee.6': 'Karakol Gorge',
  'about.marquee.7': 'Tash-Rabat',
  'about.marquee.8': 'Fairy Tale Canyon',
  'about.marquee.9': 'Suusamyr',

  'about.story.eyebrow': 'Where it all began',
  'about.story.title': 'A hike in 2017 changed our lives',
  'about.story.p1':
    'It all started with one tent, seven handwritten routes and a simple idea: to show guests not a postcard image but the living Kyrgyzstan — the one shepherds know on Son-Kul and forest rangers in Ala-Archa.',
  'about.story.p2':
    'Today KyrgyzGo777 is a team of guides who grew up at the foot of the Tien Shan. We have walked every route on foot and on horseback; we know where to warm up tea, where to watch the stars and which yurt serves the tastiest kymyz.',
  'about.story.quote': '“We do not take tourists — we invite them as guests.”',
  'about.story.imageAlt': 'Son-Kul Lake, Kyrgyzstan',
  'about.story.badge': '📍 Son-Kul Lake · 3016 m',

  'about.manifesto.sentence':
    'Mountains do not need to be conquered — they need to be befriended.',
  'about.manifesto.accent1': 'conquered',
  'about.manifesto.accent2': 'befriended',
  'about.manifesto.paragraph':
    'We do not climb peaks just to tick a box. We find the trail, walk at our own pace and come back with stories — not with exhaustion from a race.',

  'about.values.eyebrow': 'Why people trust us',
  'about.values.title': 'Four things we never compromise on',
  'about.values.0.title': 'Safety',
  'about.values.0.text':
    'Insurance, a satellite phone and a first aid kit on every route. We check the weather in advance and make balanced decisions.',
  'about.values.1.title': 'Local guides',
  'about.values.1.text':
    'Our guides grew up at the foot of the Tien Shan. They speak the language of the mountains — and the language of your comfort.',
  'about.values.2.title': 'Personally verified',
  'about.values.2.text':
    'We have covered every route on foot and on horseback: we know the fords, the crossings and the best spots for sunset photos.',
  'about.values.3.title': 'Small groups',
  'about.values.3.text':
    'Up to 8 people per group — so that everyone has a place by the fire and a story of their own to remember.',

  'about.stats.0': 'tours led',
  'about.stats.1': 'regions of Kyrgyzstan',
  'about.stats.2': 'average guest rating',
  'about.stats.3': 'routes verified personally',

  'about.team.eyebrow': 'Who leads you into the mountains',
  'about.team.title': 'The KyrgyzGo777 team',
  'about.team.sub':
    'No matter who your guide is — what matters is that every one of them grew up in these mountains.',
  'about.team.0.role': 'Founder and chief guide',
  'about.team.0.line':
    '100+ trips to the mountains to his name. Knows Son-Kul routes by the names of the shepherds.',
  'about.team.1.role': 'Guide and organiser',
  'about.team.1.line':
    'Replies to messages faster than a mountain stream. Puts together a programme to fit any dates.',
  'about.team.2.role': 'Horse leader and guide',
  'about.team.2.line':
    'Will tell you more about horses than about people. With him a river crossing is not an adventure but a walk.',
  'about.team.3.role': 'Keeper of nomadic cuisine',
  'about.team.3.line':
    'Her kymyz and kurt are a tour in themselves. Evening plov by the fire is the team’s calling card.',

  'about.steps.eyebrow': 'Simple and without bureaucracy',
  'about.steps.title': 'How the journey goes',
  'about.steps.0.title': 'Choice',
  'about.steps.0.text':
    'You browse the tours or write us your idea — even “I just want to go to the mountains”.',
  'about.steps.1.title': 'Discussion',
  'about.steps.1.text':
    'We clarify dates, budget and fitness level. We honestly say what is realistic and what is not.',
  'about.steps.2.title': 'Meeting',
  'about.steps.2.text':
    'We meet you in Bishkek or Manas, load the rucksacks — and off we go.',
  'about.steps.3.title': 'Impressions',
  'about.steps.3.text':
    'You leave with photos, new friends and a firm wish to come back.',

  'about.cta.title': 'Shall we go to the mountains together?',
  'about.cta.text':
    'Write to us — we will pick a route to match your dates, pace and fitness level. Start with a single message.',
  'about.cta.tours': 'View tours',
  'about.cta.whatsapp': 'Write on WhatsApp',
  'about.cta.instagram': 'Instagram',
  /* ================= Contacts ================= */
  'contacts.title': 'Contacts',
  'contacts.subtitle':
    'Contact us in whatever way suits you best. We reply within an hour during working hours.',
  'contacts.card.title': 'Get in touch',
  'contacts.whatsapp': 'WhatsApp',
  'contacts.instagram': 'Instagram',
  'contacts.location': 'Location',
  'contacts.form.title': 'Write to us',
  'contacts.form.name': 'Your name',
  'contacts.form.namePlace': 'What should we call you?',
  'contacts.form.phone': 'Phone or WhatsApp',
  'contacts.form.message': 'Message',
  'contacts.form.messagePlace':
    'Which tour are you interested in? When are you planning the trip?',
  'contacts.form.submit': 'Send a request',

  /* ================= 404 ================= */
  'notFound.text': 'This page does not exist.',
  'notFound.back': 'Back to home',

  /* ================= Admin ================= */
  'admin.login.title': 'Admin panel login',
  'admin.login.subtitle': 'KyrgyzGo777 — tour management system',
  'admin.login.username': 'Login',
  'admin.login.usernamePlace': 'Enter your login',
  'admin.login.password': 'Password',
  'admin.login.passwordPlace': 'Enter your password',
  'admin.login.submit': 'Sign in',
  'admin.login.error': 'Invalid login or password',
  'admin.header.title': 'KyrgyzGo777 Admin panel',
  'admin.logout': 'Log out',
  'admin.nav.dashboard': 'Dashboard',
  'admin.nav.tours': 'Tours',
  'admin.dashboard.title': 'Dashboard',
  'admin.dashboard.newTour': 'New tour',
  'admin.dashboard.totalTours': 'Total tours',
  'admin.dashboard.allTours': 'All tours',
  'admin.tours.title': 'Manage tours',
  'admin.tours.add': 'Add tour',
  'admin.tours.empty': 'No tours. Create the first one!',
  'admin.tours.deleteConfirm': 'Delete tour "{{title}}"?',
  'admin.tours.view': 'View',
  'admin.tours.edit': 'Edit',
  'admin.tours.delete': 'Delete',
  'admin.tours.days': 'days',
  'admin.form.back': 'Back to list',
  'admin.form.editTitle': 'Edit tour',
  'admin.form.newTitle': 'New tour',
  'admin.form.basicInfo': 'Basic information',
  'admin.form.titleLabel': 'Tour name *',
  'admin.form.titlePlace': 'e.g. Song-Kul Lake',
  'admin.form.price': 'Price *',
  'admin.form.currency': 'Currency',
  'admin.form.currencyKGS': 'KGS (Som)',
  'admin.form.currencyUSD': 'USD ($)',
  'admin.form.days': 'Days',
  'admin.form.difficulty': 'Difficulty',
  'admin.form.region': 'Region',
  'admin.form.regionPlace': 'Issyk-Kul Region',
  'admin.form.shortDesc': 'Short description',
  'admin.form.shortDescPlace': 'Short description for the tour card',
  'admin.form.fullDesc': 'Full description',
  'admin.form.fullDescPlace': 'Detailed description of the route and programme',
  'admin.form.imageUrl': 'Cover image URL',
  'admin.form.imageUrlPlace': '/images/tours/tour-name.jpg',
  'admin.form.featured': 'Show on the home page',
  'admin.form.routePoints': 'Route stops',
  'admin.form.routeEmpty': 'No route stops',
  'admin.form.latPlace': 'Latitude (lat)',
  'admin.form.lngPlace': 'Longitude (lng)',
  'admin.form.pointNamePlace': 'Stop name',
  'admin.form.addPoint': 'Add stop',
  'admin.form.cancel': 'Cancel',
  'admin.form.save': 'Save changes',
  'admin.form.create': 'Create tour',
  'admin.form.requiredAlert': 'Please fill in the required fields',
} as LocaleDict

export default en