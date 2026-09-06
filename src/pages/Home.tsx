import { motion, useInView } from 'framer-motion'
import {
	ArrowRight,
	Award,
	Clock,
	MapPin,
	Mountain,
	Shield,
	Star,
	Users,
} from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import TourCard from '../components/TourCard'
import { useTourStore } from '../store/tourStore'

const STATS = [
	{ value: 60, suffix: '+', label: 'проведённых туров', icon: Mountain },
	{ value: 12, suffix: '', label: 'регионов Кыргызстана', icon: MapPin },
	{ value: 4.9, suffix: '', label: 'средняя оценка', icon: Star },
]

const WHY_US = [
	{
		icon: Users,
		title: 'Опытные гиды',
		description:
			'У нас опотные гиды знающие все лакации и истории каждой страны.',
	},
	{
		icon: Shield,
		title: 'Безопасность',
		description: 'Страхование, аптечка и спутниковая связь на каждом маршруте',
	},
	{
		icon: Award,
		title: 'Уникальные маршруты',
		description: 'Маршруты, которые не найти в типовых каталогах турфирм',
	},
	{
		icon: Clock,
		title: 'Гибкий график',
		description: 'Выбирайте даты и продолжительность под свой отпуск',
	},
]

const REVIEWS = [
	{
		name: 'Айгуль К.',
		text: 'Незабываемое путешествие на Сон-Куль! Гиды отлично организовали быт в юрточном лагере. Виды — просто космос!',
		tour: 'Озеро Сон-Куль',
		rating: 5,
	},
	{
		name: 'Бектур М.',
		text: 'Треккинг в Джергалане превзошёл все ожидания. Альпийские луга, юрты, звёздное небо — рекомендую всем!',
		tour: 'Иссык-Куль + Джергалан',
		rating: 5,
	},
	{
		name: 'Эльмира А.',
		text: 'Брала однодневный тур в Ала-Арчу — идеально для новичков. Теперь хочу на недельный маршрут!',
		tour: 'Ала-Арча за один день',
		rating: 5,
	},
]

interface AnimatedCounterProps {
	value: number
	suffix: string
}

function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
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

interface AnimatedSectionProps {
	children: React.ReactNode
	delay?: number
}

function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-50px' })
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	)
}

export default function Home() {
	const { tours } = useTourStore()
	const featured = tours.filter(t => t.featured)

	return (
		<>
			<Hero />
			<section className='border-b border-stone-300/50  '>
				<div className='mx-auto grid max-w-6xl grid-cols-3 divide-x divide-stone-200/50 px-5 py-10 text-center rounded-2xl '>
					{STATS.map(stat => (
						<div key={stat.label} className='px-4'>
							<stat.icon className='mx-auto mb-2 h-8 w-8 text-forest-400' />
							<div className='font-display text-3xl sm:text-4xl font-bold text-forest-600'>
								<AnimatedCounter value={stat.value} suffix={stat.suffix} />
							</div>
							<div className='text-xs sm:text-sm text-ink mt-1'>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</section>
			<section className=' py-20 '>
				<div className='mx-auto max-w-6xl px-5'>
					<AnimatedSection>
						<div className='mb-12 text-center'>
							<h2 className='font-display text-3xl sm:text-4xl font-bold text-forest-800 mb-3'>
								Почему выбирают нас
							</h2>
							<p className='text-ink max-w-xl mx-auto'>
								Мы не просто водим туристов по горам — мы делимся любовью к этим
								местам
							</p>
						</div>
					</AnimatedSection>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
						{WHY_US.map((item, i) => (
							<AnimatedSection key={item.title} delay={i * 0.1}>
								<div className='group h-full rounded-2xl backdrop-blur-md backdrop-blur-md border border-stone-300/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
									<div className='mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-forest-100 text-forest-600 transition-colors group-hover:bg-forest-600 group-hover:text-white'>
										<item.icon className='h-7 w-7' />
									</div>
									<h3 className='mb-2 font-display text-lg font-bold text-forest-800'>
										{item.title}
									</h3>
									<p className='text-sm text-ink'>{item.description}</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>
			<section className='mx-auto max-w-6xl px-5 py-20'>
				<AnimatedSection>
					<div className='mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end'>
						<div>
							<h2 className='font-display text-3xl sm:text-4xl font-bold text-forest-800'>
								Популярные маршруты
							</h2>
							<p className='mt-2 text-ink max-w-md'>
								На странице каждого тура — интерактивная карта с маршрутом
							</p>
						</div>
						<Link
							to='/tours'
							className='inline-flex items-center gap-1 font-medium text-forest-600 hover:underline whitespace-nowrap'
						>
							Все туры <ArrowRight className='h-4 w-4' />
						</Link>
					</div>
				</AnimatedSection>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{featured.map((tour, i) => (
						<motion.div
							key={tour.id}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.15, duration: 0.5 }}
						>
							<TourCard tour={tour} />
						</motion.div>
					))}
				</div>
			</section>
			<section className=' py-20 '>
				<div className='mx-auto max-w-6xl px-5'>
					<AnimatedSection>
						<div className='mb-12 text-center'>
							<h2 className='font-display text-3xl sm:text-4xl font-bold text-dark-50 mb-3'>
								Отзывы путешественников
							</h2>
							<p className='text-ink'>
								Что говорят те, кто уже побывал с нами в путешествиях
							</p>
						</div>
					</AnimatedSection>
					<div className='grid gap-6 md:grid-cols-3'>
						{REVIEWS.map((review, i) => (
							<AnimatedSection key={review.name} delay={i * 0.15}>
								<div className='flex h-full flex-col rounded-2xl backdrop-blur-md backdrop-blur-md border border-stone-300/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:bg-white/80'>
									<div className='mb-4 flex gap-1'>
										{[...Array(review.rating)].map((_, j) => (
											<Star key={j} className='h-4 w-4 fill-gold text-gold' />
										))}
									</div>
									<p className='flex-1 text-ink leading-relaxed'>
										"{review.text}"
									</p>
									<div className='mt-4 border-t border-white/10 pt-4'>
										<div className='font-medium text-ink'>{review.name}</div>
										<div className='text-sm text-forest-400'>{review.tour}</div>
									</div>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>
			<section className='relative overflow-hidden  py-20 '>
				<div className='relative z-10 mx-auto max-w-3xl  py-12 '>
					<motion.div
						className='text-center'
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className='font-display text-3xl sm:text-4xl font-bold text-ink mb-4'>
							Готовы к приключению?
						</h2>
						<p className='mb-8 text-lg text-ink/80 max-w-xl mx-auto'>
							Свяжитесь с нами, и мы подберём идеальный маршрут под ваши
							пожелания
						</p>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
							<Link
								to='/contacts'
								className='inline-flex items-center gap-2 rounded-full backdrop-blur-md px-8 py-4 font-semibold text-forest-700 hover:bg-stone-50 transition-colors shadow-lg'
							>
								Связаться с нами <ArrowRight className='h-5 w-5' />
							</Link>
							<Link
								to='/tours'
								className='inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-semibold text-ink hover:bg-stone-50/10 transition-colors'
							>
								Выбрать тур
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	)
}
