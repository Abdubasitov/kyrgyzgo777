import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

export default function Hero() {
	return (
		<section className='relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-forest-950'>
			{/* TODO: заменить на реальное фото гор/озера от клиента, 1920x1080+ */}
			<img
				src='/images/hero-mountains.jpg'
				alt='Горы Кыргызстана'
				className='absolute inset-0 h-full w-full object-cover opacity-70'
				onError={e => {
					e.currentTarget.src =
						'https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=1920&auto=format&fit=crop'
				}}
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/10' />

			<motion.div
				variants={container}
				initial='hidden'
				animate='visible'
				className='relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-25'
			>
				<motion.span
					variants={item}
					className='text-stone-50/70 text-sm font-medium tracking-wide'
				>
					Тянь-Шань · Иссык-Куль · Ташкент · Самарканд
				</motion.span>

				<motion.h1
					variants={item}
					className='mt-3 font-display text-5xl sm:text-7xl font-bold text-stone-50 max-w-2xl leading-[1.1]'
				>
					Туры по Центральной Азии
				</motion.h1>

				<motion.p
					variants={item}
					className='mt-5 max-w-lg text-stone-50/80 text-base sm:text-lg'
				>
					Юрточные лагеря, катания на лошадях, горы, живописная природа,
					ознакомления с традициями, культурами, национальной кухней кочевого
					народа и история великой шелковой пути каравана.
				</motion.p>

				<motion.div variants={item} className='mt-8 flex flex-wrap gap-4'>
					<Link
						to='/tours'
						className='inline-flex items-center gap-2 rounded-full bg-forest-400 px-6 py-3 font-semibold text-forest-950 hover:bg-stone-50 transition-colors'
					>
						Смотреть туры <ArrowRight className='h-4 w-4' />
					</Link>
					<Link
						to='/contacts'
						className='inline-flex items-center gap-2 rounded-full border border-stone-50/40 px-6 py-3 font-semibold text-stone-50 hover:bg-stone-50/10 transition-colors'
					>
						Подобрать маршрут
					</Link>
				</motion.div>
			</motion.div>
		</section>
	)
}
