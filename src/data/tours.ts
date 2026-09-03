import type { Tour } from '../types/tour'

// Временные данные "для примера". С Части 5 они переедут в хранилище
// (Zustand + localStorage), и админ сможет их редактировать через
// админ-панель (Часть 6). Координаты маршрутов реальные (Кыргызстан),
// но текст и цены — замените на свои.

export const TOURS: Tour[] = [
	{
		id: 'song-kul-3d',
		title: 'Озеро Сон-Куль: 3 дня в юртах',
		shortDescription:
			'Ночёвка у высокогорного озера, лошади, звёзды без городской засветки.',
		fullDescription:
			'Трёхдневный маршрут к озеру Сон-Куль на высоте 3016 м. Едем через перевал Калмак-Ашуу, ' +
			'ночуем в юртах у чабанов, катаемся верхом и встречаем закат над водой. Маршрут подходит ' +
			'тем, кто хочет увидеть кочевой быт своими глазами, а не в музее.',
		coverImage: '/images/tours/song-kul.jpg', // TODO: заменить на реальное фото
		gallery: [
			'/images/tours/song-kul-1.jpg',
			'/images/tours/song-kul-2.jpg',
			'/images/tours/song-kul-3.jpg',
		],
		price: 18500,
		currency: 'KGS',
		durationDays: 3,
		difficulty: 'средний',
		region: 'Нарынская область',
		route: [
			{ lat: 42.1928, lng: 75.5192, label: 'Выезд из Бишкека' },
			{ lat: 41.97, lng: 75.35, label: 'Перевал Калмак-Ашуу' },
			{ lat: 41.8367, lng: 75.1319, label: 'Озеро Сон-Куль' },
		],
		featured: true,
	},
	{
		id: 'ala-archa-1d',
		title: 'Ала-Арча за один день',
		shortDescription:
			'Быстрый выезд в горы прямо из Бишкека — для тех, у кого мало времени.',
		fullDescription:
			'Однодневный поход в национальный парк Ала-Арча в 40 минутах от Бишкека. Хвойный лес, ' +
			'ледники на горизонте и панорама на пик Семёнова-Тян-Шанского. Идеально как первый горный ' +
			'выход перед более длинными маршрутами.',
		coverImage: '/images/tours/ala-archa.jpg',
		gallery: ['/images/tours/ala-archa-1.jpg', '/images/tours/ala-archa-2.jpg'],
		price: 3200,
		currency: 'KGS',
		durationDays: 1,
		difficulty: 'лёгкий',
		region: 'Чуйская область',
		route: [
			{ lat: 42.8746, lng: 74.6122, label: 'Бишкек' },
			{ lat: 42.5619, lng: 74.4864, label: 'Ущелье Ала-Арча' },
		],
		featured: true,
	},
	{
		id: 'issyk-kul-jyrgalan-5d',
		title: 'Иссык-Куль + треккинг в Джергалане',
		shortDescription:
			'Купание в самом большом озере страны и пеший переход через альпийские луга.',
		fullDescription:
			'Пять дней: два дня на южном берегу Иссык-Куля, затем переход в Джергалан — деревню, ставшую ' +
			'центром треккинга и скитура. По пути — альпийские луга, юрточные стоянки и почти полное ' +
			'отсутствие туристических групп.',
		coverImage: '/images/tours/issyk-kul.jpg',
		gallery: ['/images/tours/issyk-kul-1.jpg', '/images/tours/jyrgalan-1.jpg'],
		price: 27000,
		currency: 'KGS',
		durationDays: 5,
		difficulty: 'сложный',
		region: 'Иссык-Кульская область',
		route: [
			{ lat: 42.6339, lng: 76.9433, label: 'Каракол' },
			{ lat: 42.535, lng: 77.006, label: 'Южный берег Иссык-Куля' },
			{ lat: 42.3833, lng: 78.3667, label: 'Джергалан' },
		],
		featured: true,
	},
]
