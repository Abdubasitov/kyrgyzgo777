import { motion, useInView } from 'framer-motion'
import {
	ArrowRight,
	Compass,
	Heart,
	Map,
	MapPin,
	MessageCircle,
	Shield,
	Sparkles,
	Users,
} from 'lucide-react'
import { useRef } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import TundukSun from '../components/TundukSun'

/* ------------------------------------------------------------------ */
/*  Данные страницы (текст — заглушка, замените на реальный от клиента) */
/* ------------------------------------------------------------------ */

const MARQUEE_PLACES = [
	'Сон-Кёль',
	'Иссык-Куль',
	'Кырчын',
	'Григорьевское ущелье',
	'Тянь-Шань',
	'Каракольские горячие источники',
	'Алтын Арашан',
	'Жети-Огуз',
	'Каньон Сказка',
]

const VALUES = [
	{
		icon: Shield,
		title: 'Безопасность',
		text: 'Страховка, спутниковый телефон и аптечка на каждом маршруте. Погоду смотрим заранее, решения — взвешенно.',
	},
	{
		icon: Users,
		title: 'Местные гиды',
		text: 'Наши гиды выросли у подножия Тянь-Шаня. Они говорят на языке гор — и на языке вашего комфорта.',
	},
	{
		icon: Map,
		title: 'Проверено лично',
		text: 'Каждый маршрут мы прошли ногами и на лошади: знаем броды, переправы и лучшие точки для закатных фото.',
	},
	{
		icon: Heart,
		title: 'Маленькие группы',
		text: 'До 8 человек в группе — чтобы у каждого было место у костра и своя история на память.',
	},
]

const STATS = [
	{ value: 60, suffix: '+', label: 'проведённых туров' },
	{ value: 12, suffix: '', label: 'регионов Кыргызстана' },
	{ value: 4.9, suffix: '/5', label: 'средняя оценка гостей' },
	{ value: 100, suffix: '%', label: 'маршрутов проверено лично' },
]

const TEAM = [
	{
		initials: 'АН',
		name: 'Айбек Н.',
		role: 'Основатель и главный гид',
		line: '100+ выходов в горы за плечами. Маршруты Сон-Кёля знает по именам чабанов.',
		avatar: 'from-forest-500 to-forest-800',
	},
	{
		initials: 'ГТ',
		name: 'Гульмира Т.',
		role: 'Гид и организатор',
		line: 'Отвечает на сообщения быстрее горного ручья. Собирает программу под любые даты.',
		avatar: 'from-gold to-forest-600',
	},
	{
		initials: 'НК',
		name: 'Нурлан К.',
		role: 'Коновод и проводник',
		line: 'Расскажет о лошадях больше, чем о людях. С ним переправа — не приключение, а прогулка.',
		avatar: 'from-forest-600 to-forest-950',
	},
	{
		initials: 'АС',
		name: 'Айжамал С.',
		role: 'Хранительница кочевой кухни',
		line: 'Её кымыз и курут — отдельный тур. Вечерний плов у костра — визитная карточка команды.',
		avatar: 'from-stone-300 to-gold/70',
	},
]

const STEPS = [
	{
		icon: Compass,
		title: 'Выбор',
		text: 'Выберите готовый тур из нашей коллекции или расскажите нам о своей идее путешествия. Пройдите консультацию с нашим специалистом, чтобы обсудить ваши пожелания, маршрут и формат отдыха — и вместе создать подходящую программу.',
	},
	{
		icon: MessageCircle,
		title: 'Обсуждение',
		text: 'Уточняем даты и программу тура, согласовываем бюджет и при необходимости помогаем с визовыми вопросами. Бронируем авиабилеты и учитываем ваш уровень подготовки, чтобы путешествие было комфортным и реалистичным. Честно рассказываем что реально, а что — нет.',
	},
	{
		icon: MapPin,
		title: 'Встреча',
		text: 'Встреча с аэропорта Кыргызстана или Узбекистана, грузим ваши рюкзаки и чемоданы в самые комфортабильнные и в наши удобные транспорты со всеми условиями — и в путишествие.',
	},
	{
		icon: Sparkles,
		title: 'Впечатления',
		text: 'Вы получите яркие фотографии, обретете новых друзей и незабываемые впечатления от путешествия по Кыргызстану и по Узбекистану. Откроете для себя живописные горы, водопады, озёра, национальную культуру, гостеприимство и историю каждой страны — и уедете с твёрдым желанием вернуться снова.',
	},
]

/* ------------------------------------------------------------------ */
/*  Мелочи: анимации, счётчик, орнамент, бегущая строка                */
/* ------------------------------------------------------------------ */

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	return (
		<motion.span
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			{value % 1 !== 0 ? value.toFixed(1) : value}
			{suffix}
		</motion.span>
	)
}

function AnimatedSection({
	children,
	delay = 0,
	className = '',
}: {
	children: React.ReactNode
	delay?: number
	className?: string
}) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-60px' })
	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	)
}

function OrnamentDivider() {
	return (
		<div
			className='flex items-center justify-center gap-2 text-gold'
			aria-hidden
		></div>
	)
}

function Marquee() {
	const row = [...MARQUEE_PLACES, ...MARQUEE_PLACES]
	return (
		<div className='relative select-none overflow-hidden border-y border-stone-300/60 bg-stone-50/40 py-4 backdrop-blur-sm'>
			<div className='animate-marquee flex w-max items-center whitespace-nowrap'>
				{row.map((place, i) => (
					<span key={i} className='flex items-center gap-6 px-3'>
						<span className='font-display text-2xl font-bold uppercase tracking-wide text-forest-700'>
							{place}
						</span>
						<span className='text-gold'>◆</span>
					</span>
				))}
			</div>
		</div>
	)
}

function Mountains({
	className = '',
	style,
}: {
	className?: string
	style?: React.CSSProperties
}) {
	return (
		<svg
			className={className}
			style={style}
			viewBox='0 0 1440 180'
			preserveAspectRatio='none'
			aria-hidden
		>
			<path
				fill='currentColor'
				d='M0,140 L120,70 L240,120 L360,40 L520,130 L660,60 L820,125 L980,50 L1160,120 L1300,70 L1440,115 L1440,180 L0,180 Z'
			/>
		</svg>
	)
}

/* ------------------------------------------------------------------ */
/*  Страница                                                           */
/* ------------------------------------------------------------------ */

export default function About() {
	return (
		<article className='overflow-hidden'>
			{/* ============ HERO: плакат + орнамент + огромное «777» ============ */}
			<section className='relative pt-12 pb-8'>
				{/* Гигантское «777» — отсылка к логотипу, плакатный приём */}
				<div
					aria-hidden
					className='text-stroke-gold pointer-events-none absolute inset-x-0 top-1/2 -translate-y-[58%] select-none text-center font-display text-[30vw] font-extrabold leading-none opacity-[0.07]'
				>
					777
				</div>

				{/* Орнамент тундюка за заголовком */}
				<motion.div
					className='pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 opacity-[0.16]'
					animate={{ rotate: [-3, 3, -3] }}
					transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
					aria-hidden
				>
					<TundukSun
						size={560}
						rock={false}
						color='#B8912F'
						glowColor='#B8912F'
					/>
				</motion.div>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.12, delayChildren: 0.1 },
						},
					}}
					className='relative mx-auto max-w-6xl px-5 pb-14 text-center'
				>
					<motion.span
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
						}}
						className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gold'
					>
						<span className='h-px w-8 bg-gold/60' />
						О компании KyrgyzGo777
						<span className='h-px w-8 bg-gold/60' />
					</motion.span>

					<motion.h1
						variants={{
							hidden: { opacity: 0, y: 26 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
						}}
						className='relative mt-5 font-display text-5xl font-bold leading-[0.95] text-forest-800 sm:text-7xl'
					>
						Горы Кыргызстана и колорит Узбекистана -{' '}
						<span className='whitespace-nowrap text-forest-600'>наш дом</span>
					</motion.h1>

					<motion.p
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
						}}
						className='mx-auto mt-6 max-w-2xl text-base text-ink/70 sm:text-lg'
					>
						Мы — местная туристическая компания. Показываем настоящий
						качественный и безопаснный тур в Кыргызстан и Узбекистан: без толп и
						шаблонных маршрутов, с ледниковыми горами, кочевыми юртами,
						лошадьми, древними городами, национальной кухней и атмосферой,
						которую невозможно почувствовать в обычной туристической поездке.
					</motion.p>

					<motion.div
						variants={{
							hidden: { opacity: 0, y: 16 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
						}}
						className='mt-9 flex flex-wrap items-center justify-center gap-4'
					>
						<Link
							to='/tours'
							className='inline-flex items-center gap-2 rounded-full bg-forest-600 px-7 py-3 font-semibold text-stone-50 transition-colors hover:bg-forest-800'
						>
							Смотреть туры <ArrowRight className='h-4 w-4' />
						</Link>
						<Link
							to='/contacts'
							className='inline-flex items-center gap-2 rounded-full border border-forest-600 px-7 py-3 font-semibold text-forest-600 transition-colors hover:bg-forest-50'
						>
							Написать нам
						</Link>
					</motion.div>
				</motion.div>

				<Mountains className='h-16 w-full text-forest-800/[0.06]' />
			</section>

			{/* ============ БЕГУЩАЯ СТРОКА: места ============ */}
			<Marquee />

			{/* ============ ИСТОРИЯ ============ */}
			<section className='mx-auto max-w-6xl px-5 py-20'>
				<div className='grid items-center gap-12 lg:grid-cols-2'>
					<AnimatedSection>
						<div className='relative'>
							{/* Рамка-«паспарту» */}
							<div
								aria-hidden
								className='absolute -left-3 -top-3 h-full w-full rounded-3xl border-2 border-gold/40'
							/>
							<div className='relative overflow-hidden rounded-3xl shadow-xl'>
								<img
									src='/images/about.jpeg'
									alt='Озеро Сон-Кёль, Кыргызстан'
									className='aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105'
								/>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={0.15}>
						<h2 className='mt-3 font-display text-3xl font-bold leading-tight text-forest-800 sm:text-4xl'>
							О нас
						</h2>
						{/* TODO: заменить историю на реальную от клиента */}
						<div className='mt-6 space-y-4 text-ink/70 leading-relaxed'>
							<p className='drop-cap'>
								Мы хотим показать миру настоящую красоту Кыргызстана и
								Узбекистана. Познакомить с величественными горами, красивой,
								природой кочевым духом, древними городами и богатой культурой.
								Показать гостеприимство, щедрость и трудолюбие народов
								Центральной Азии. Погрузить путешественников в историю Великого
								шёлкового пути — места, где веками встречались разные культуры и
								народы. Открыть уникальные традиции, национальную кухню, ремёсла
								и образ жизни местных жителей. Мы создаём путешествия, которые
								помогают не просто увидеть страны, а почувствовать их душу и
								историю.
							</p>
						</div>

						<blockquote className='mt-7 border-l-4 border-gold pl-5 font-display text-xl font-bold leading-snug text-forest-700'>
							«Мы не везём туристов — мы приглашаем в гости»
						</blockquote>
					</AnimatedSection>
				</div>
			</section>

			{/* ============ МАНИФЕСТ ============ */}
			<section className='relative overflow-hidden bg-forest-950 py-24 text-center'>
				<Mountains className='absolute inset-x-0 bottom-0 h-20 w-full text-gold/[0.08]' />
				<div className='relative mx-auto max-w-5xl px-5'>
					<AnimatedSection>
						<OrnamentDivider />
					</AnimatedSection>
					<Manifesto />
					<AnimatedSection delay={0.2}>
						<p className='mx-auto mt-6 max-w-xl text-sm text-stone-50/60 sm:text-base'>
							Мы не покоряем вершины ради галочки. Мы находим тропу, идём в
							своём ритме и возвращаемся с историями.
						</p>
					</AnimatedSection>
				</div>
			</section>

			{/* ============ ЦЕННОСТИ ============ */}
			<section className='mx-auto max-w-6xl px-5 py-20'>
				<AnimatedSection className='text-center'>
					<span className='text-xs font-bold uppercase tracking-[0.25em] text-gold'>
						Почему нам доверяют
					</span>
					<h2 className='mt-3 font-display text-3xl font-bold text-forest-800 sm:text-4xl'>
						Четыре вещи, которые мы не обсуждаем
					</h2>
				</AnimatedSection>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{VALUES.map((item, i) => (
						<AnimatedSection
							key={item.title}
							delay={i * 0.1}
							className='h-full'
						>
							<motion.div
								whileHover={{ y: -6 }}
								transition={{ type: 'spring', stiffness: 300, damping: 22 }}
								className='group relative h-full overflow-hidden rounded-2xl border border-stone-300/70 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-colors hover:border-gold/50'
							>
								{/* Номер-орнамент */}
								<span className='absolute right-4 top-3 font-display text-5xl font-extrabold text-forest-800/[0.07] transition-colors group-hover:text-gold/15'>
									0{i + 1}
								</span>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-forest-600 text-stone-50 shadow-md shadow-forest-900/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold'>
									<item.icon className='h-5 w-5' />
								</div>
								<h3 className='mt-5 font-display text-xl font-bold text-forest-800'>
									{item.title}
								</h3>
								<p className='mt-2 text-sm leading-relaxed text-ink/65'>
									{item.text}
								</p>
								<span className='absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full' />
							</motion.div>
						</AnimatedSection>
					))}
				</div>

				{/* Цифры */}
				<div className='mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-stone-300/70 bg-white/50 px-6 py-10 backdrop-blur-md sm:grid-cols-4'>
					{STATS.map((stat, i) => (
						<AnimatedSection
							key={stat.label}
							delay={i * 0.1}
							className='text-center'
						>
							<div className='font-display text-4xl font-bold text-forest-600 sm:text-5xl'>
								<AnimatedCounter value={stat.value} suffix={stat.suffix} />
							</div>
							<div className='mt-2 text-xs font-medium uppercase tracking-wide text-ink/50'>
								{stat.label}
							</div>
						</AnimatedSection>
					))}
				</div>
			</section>

			{/* ============ КОМАНДА ============ */}
			<section className='border-y border-stone-300/50 bg-stone-50/50 py-20'>
				<div className='mx-auto max-w-6xl px-5'>
					<AnimatedSection className='text-center'>
						<OrnamentDivider />
						<span className='mt-6 block text-xs font-bold uppercase tracking-[0.25em] text-gold'>
							Кто ведёт вас в горы
						</span>
						<h2 className='mt-3 font-display text-3xl font-bold text-forest-800 sm:text-4xl'>
							Команда KyrgyzGo777
						</h2>
						{/* TODO: заменить имена и фото на реальных сотрудников */}
						<p className='mx-auto mt-4 max-w-2xl text-ink/60'>
							Неважно, кто будет вашим гидом — важно, что каждый из них сам
							вырос в этих горах.
						</p>
					</AnimatedSection>

					<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
						{TEAM.map((member, i) => (
							<AnimatedSection
								key={member.name}
								delay={i * 0.1}
								className='h-full'
							>
								<motion.div
									whileHover={{ y: -6 }}
									transition={{ type: 'spring', stiffness: 300, damping: 22 }}
									className='relative h-full rounded-2xl border border-stone-300/70 bg-white/60 p-6 text-center shadow-sm backdrop-blur-md transition-colors hover:border-forest-400/60'
								>
									<div
										className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.avatar} font-display text-2xl font-bold text-stone-50 shadow-lg shadow-forest-900/20 ring-2 ring-forest-400/30 transition-transform duration-300 hover:scale-105`}
									>
										{member.initials}
									</div>
									<h3 className='mt-4 font-display text-xl font-bold text-forest-800'>
										{member.name}
									</h3>
									<div className='mt-1 text-xs font-semibold uppercase tracking-wider text-gold'>
										{member.role}
									</div>
									<p className='mt-3 text-sm leading-relaxed text-ink/60'>
										{member.line}
									</p>
								</motion.div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* ============ КАК МЫ РАБОТАЕМ ============ */}
			<section className='mx-auto max-w-6xl px-5 py-20'>
				<AnimatedSection className='text-center'>
					<span className='text-xs font-bold uppercase tracking-[0.25em] text-gold'>
						Просто и без бюрократии
					</span>
					<h2 className='mt-3 font-display text-3xl font-bold text-forest-800 sm:text-4xl'>
						Как проходит путешествие
					</h2>
				</AnimatedSection>

				<div className='relative mt-14'>
					{/* Линия маршрута — цвета как на карте тура */}
					<div
						aria-hidden
						className='absolute left-1/2 top-7 hidden h-0.5 w-[calc(100%-4rem)] -translate-x-1/2 border-t-2 border-dashed border-route/60 lg:block'
					/>
					<div className='grid gap-10 lg:grid-cols-4'>
						{STEPS.map((step, i) => (
							<AnimatedSection
								key={step.title}
								delay={i * 0.12}
								className='relative'
							>
								<div className='flex flex-col items-center text-center'>
									<div className='relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-route bg-stone-50 text-forest-700 shadow-md'>
										<step.icon className='h-6 w-6' />
										<span className='absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-forest-600 font-display text-xs font-bold text-stone-50'>
											{i + 1}
										</span>
									</div>
									<h3 className='mt-5 font-display text-xl font-bold text-forest-800'>
										{step.title}
									</h3>
									<p className='mt-2 max-w-[16rem] text-sm leading-relaxed text-ink/60'>
										{step.text}
									</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* ============ CTA: тёмный блок с орнаментом ============ */}
			<section className='relative overflow-hidden bg-forest-950 pt-20 pb-10'>
				<div className='pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.14]'>
					<TundukSun
						size={520}
						rock={false}
						color='#B8912F'
						glowColor='#B8912F'
					/>
				</div>

				<div className='relative mx-auto max-w-4xl px-5 text-center'>
					<AnimatedSection>
						<span className='text-xs font-bold uppercase tracking-[0.3em] text-gold'>
							KyrgyzGo777
						</span>
						<h2 className='mt-4 font-display text-4xl font-bold leading-[0.95] text-stone-50 sm:text-6xl'>
							Выйдем в горы вместе?
						</h2>
						<p className='mx-auto mt-5 max-w-xl text-stone-50/70'>
							Напишите нам — подберём маршрут под ваши даты, ритм и уровень
							подготовки. Начните с одного сообщения.
						</p>
						<div className='mt-9 flex flex-wrap items-center justify-center gap-4'>
							<Link
								to='/tours'
								className='inline-flex items-center gap-2 rounded-full bg-forest-400 px-7 py-3 font-semibold text-forest-950 transition-colors hover:bg-stone-50'
							>
								Смотреть туры <ArrowRight className='h-4 w-4' />
							</Link>
							<a
								href='https://wa.me/996999474797'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-stone-50/40 px-7 py-3 font-semibold text-stone-50 transition-colors hover:bg-stone-50/10'
							>
								<FaWhatsapp className='h-4 w-4' /> Написать в WhatsApp
							</a>
							<a
								href='https://www.instagram.com/kyrgyzgo777?igsi=eTRjdnIwdWU5anJ1'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-stone-50/40 px-7 py-3 font-semibold text-stone-50 transition-colors hover:bg-stone-50/10'
							>
								<FaInstagram className='h-4 w-4' /> Instagram
							</a>
						</div>
					</AnimatedSection>
				</div>

				<Mountains className='relative mt-12 h-16 w-full text-stone-50/[0.05]' />
			</section>
		</article>
	)
}

function Manifesto() {
	const words = 'Горы не нужно покорять — с ними нужно дружить.'.split(' ')
	const accents: Record<string, string> = {}
	return (
		<motion.h2
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-80px' }}
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: 0.08 } },
			}}
			className='mx-auto mt-8 max-w-4xl font-display text-3xl font-bold leading-tight text-stone-50 sm:text-5xl'
		>
			{words.map((word, i) => (
				<motion.span
					key={i}
					variants={{
						hidden: { opacity: 0, y: 18 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
					}}
					className={`inline-block whitespace-pre ${accents[word] ?? ''}`}
				>
					{word}
					{i < words.length - 1 ? ' ' : ''}
				</motion.span>
			))}
		</motion.h2>
	)
}
