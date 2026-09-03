import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function WalkingIbirs() {
	const [isVisible, setIsVisible] = useState(true)
	const [direction, setDirection] = useState(1) // 1 = вправо, -1 = влево

	// Случайное изменение направления каждые 5-10 секунд
	useEffect(() => {
		const interval = setInterval(
			() => {
				setDirection(d => d * -1)
			},
			Math.random() * 5000 + 5000,
		)
		return () => clearInterval(interval)
	}, [])

	// Добавим wiggle-эффект для лап
	const pawVariants = {
		walk1: { rotate: -15, y: 0 },
		walk2: { rotate: 15, y: 2 },
		walk3: { rotate: -15, y: 0 },
		walk4: { rotate: 15, y: 2 },
	}

	return (
		<motion.div
			className='fixed bottom-4 z-40 cursor-pointer'
			initial={{ x: -100, y: 0, opacity: 0 }}
			animate={{
				x: [
					0, 300, 600, 900, 1200, 1500, 1200, 900, 600, 300, 0, -300, -600,
					-900, -600, -300,
				],
				opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			}}
			transition={{
				x: { duration: 45, repeat: Infinity, ease: 'linear' },
				opacity: { duration: 2, repeat: Infinity },
			}}
			onClick={() => setDirection(d => -d)}
		>
			<div className='relative' style={{ transform: `scaleX(${direction})` }}>
				{/* Тень */}
				<motion.div
					className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/20 rounded-full blur-sm'
					animate={{ scaleX: [1, 0.9, 1, 0.9, 1] }}
					transition={{ duration: 0.5, repeat: Infinity }}
				/>

				{/* Тело илбирса */}
				<svg
					width='70'
					height='60'
					viewBox='0 0 70 60'
					fill='none'
					className='drop-shadow-lg'
				>
					{/* Тело */}
					<ellipse cx='35' cy='40' rx='22' ry='15' fill='#B8C4D0' />
					<ellipse cx='35' cy='38' rx='20' ry='13' fill='#D4DCE4' />

					{/* Голова */}
					<circle cx='52' cy='28' r='14' fill='#B8C4D0' />
					<circle cx='52' cy='27' r='12' fill='#D4DCE4' />

					{/* Уши */}
					<circle cx='44' cy='16' r='5' fill='#B8C4D0' />
					<circle cx='44' cy='16' r='3' fill='#FFB6C1' />
					<circle cx='58' cy='16' r='5' fill='#B8C4D0' />
					<circle cx='58' cy='16' r='3' fill='#FFB6C1' />

					{/* Пятна */}
					<circle cx='48' cy='32' r='3' fill='#8B9CAF' />
					<circle cx='55' cy='35' r='2' fill='#8B9CAF' />
					<circle cx='28' cy='38' r='2.5' fill='#8B9CAF' />
					<circle cx='38' cy='42' r='2' fill='#8B9CAF' />
					<circle cx='32' cy='45' r='1.5' fill='#8B9CAF' />
					<circle cx='45' cy='24' r='2' fill='#8B9CAF' />

					{/* Мордочка */}
					<ellipse cx='56' cy='30' rx='5' ry='4' fill='#E8EDF2' />

					{/* Глаза */}
					<ellipse cx='48' cy='26' rx='3' ry='3.5' fill='#2D3748' />
					<ellipse cx='56' cy='26' rx='3' ry='3.5' fill='#2D3748' />
					<circle cx='49' cy='25' r='1' fill='white' />
					<circle cx='57' cy='25' r='1' fill='white' />

					{/* Носик */}
					<ellipse cx='61' cy='30' rx='2' ry='1.5' fill='#4A5568' />

					{/* Усы */}
					<line
						x1='62'
						y1='29'
						x2='68'
						y2='27'
						stroke='#4A5568'
						strokeWidth='0.5'
					/>
					<line
						x1='62'
						y1='31'
						x2='68'
						y2='31'
						stroke='#4A5568'
						strokeWidth='0.5'
					/>
					<line
						x1='62'
						y1='33'
						x2='67'
						y2='35'
						stroke='#4A5568'
						strokeWidth='0.5'
					/>

					{/* Хвост */}
					<motion.path
						d='M13 40 Q5 35 8 25 Q10 20 15 22'
						stroke='#B8C4D0'
						strokeWidth='6'
						strokeLinecap='round'
						fill='none'
						animate={{
							d: [
								'M13 40 Q5 35 8 25 Q10 20 15 22',
								'M13 40 Q5 38 7 30 Q9 25 14 28',
								'M13 40 Q5 35 8 25 Q10 20 15 22',
							],
						}}
						transition={{ duration: 1, repeat: Infinity }}
					/>

					{/* Передние лапы */}
					<motion.g
						animate={{
							y: [0, 3, 0, 3, 0, 3, 0, 3],
							rotate: [-10, 10, -10, 10, -10, 10, -10, 10],
						}}
						transition={{ duration: 0.4, repeat: Infinity }}
					>
						<ellipse cx='45' cy='52' rx='4' ry='6' fill='#B8C4D0' />
						<ellipse cx='45' cy='54' rx='3' ry='4' fill='#D4DCE4' />
					</motion.g>
					<motion.g
						animate={{
							y: [3, 0, 3, 0, 3, 0, 3, 0],
							rotate: [10, -10, 10, -10, 10, -10, 10, -10],
						}}
						transition={{ duration: 0.4, repeat: Infinity }}
					>
						<ellipse cx='52' cy='52' rx='4' ry='6' fill='#B8C4D0' />
						<ellipse cx='52' cy='54' rx='3' ry='4' fill='#D4DCE4' />
					</motion.g>

					{/* Задние лапы */}
					<motion.g
						animate={{
							y: [0, 3, 0, 3, 0, 3, 0, 3],
							rotate: [-10, 10, -10, 10, -10, 10, -10, 10],
						}}
						transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
					>
						<ellipse cx='22' cy='52' rx='4' ry='6' fill='#B8C4D0' />
						<ellipse cx='22' cy='54' rx='3' ry='4' fill='#D4DCE4' />
					</motion.g>
					<motion.g
						animate={{
							y: [3, 0, 3, 0, 3, 0, 3, 0],
							rotate: [10, -10, 10, -10, 10, -10, 10, -10],
						}}
						transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
					>
						<ellipse cx='29' cy='52' rx='4' ry='6' fill='#B8C4D0' />
						<ellipse cx='29' cy='54' rx='3' ry='4' fill='#D4DCE4' />
					</motion.g>
				</svg>
			</div>
		</motion.div>
	)
}
