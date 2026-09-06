import { motion } from 'framer-motion'
import TundukSun from './TundukSun'

export default function SiteBackground() {
	return (
		<div className='fixed inset-0 -z-10 overflow-hidden bg-stone-50'>
			{/*
				Фон: «Song-Kul, Kyrgyzstan» — оз. Сон-Кёль и хребет Кунгёй-Ала-Тоо (Тянь-Шань).
				Фото: Ninara (Flickr), CC BY 2.0, Wikimedia Commons:
				https://commons.wikimedia.org/wiki/File:Song-Kul,_Kyrgyzstan_(44580008121).jpg
				Файл: public/images/background-mountains.jpg
			*/}
			<img
				src='/images/background-mountains.jpg'
				alt=''
				aria-hidden
				className='absolute inset-0 h-full w-full object-cover opacity-[0.5]'
				style={{ objectPosition: 'center 28%' }}
			/>

			{/* Тёплый свет: «рассвет» за солнцем-орнаментом */}
			<motion.div
				className='absolute inset-0'
				style={{
					background:
						'radial-gradient(60% 48% at 50% 4%, rgba(184,145,47,0.24) 0%, rgba(79,169,104,0.12) 45%, rgba(242,244,238,0) 75%)',
				}}
				animate={{ opacity: [0.7, 1, 0.7] }}
				transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
			/>

			{/* Лёгкая вуаль для читаемости: светлее сверху и у футера */}
			<div className='absolute inset-0 bg-gradient-to-b from-stone-50/70 via-stone-50/20 to-stone-50/85' />

			<motion.div
				className='absolute -left-32 top-[28%] h-96 w-96 rounded-full bg-forest-400/[0.09] blur-3xl'
				animate={{ x: [0, 36, 0], y: [0, -26, 0] }}
				transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
			/>
			<motion.div
				className='absolute -right-24 top-[38%] h-80 w-80 rounded-full bg-gold/[0.10] blur-3xl'
				animate={{ x: [0, -28, 0], y: [0, 34, 0] }}
				transition={{
					duration: 23,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
			/>

			<div className='absolute left-1/2 top-[4%] -translate-x-1/2'>
				<motion.div
					className='absolute rounded-full bg-gold/25 blur-2xl'
					style={{ width: 440, height: 440, left: -220, top: -220 }}
					animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.6, 0.35] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<TundukSun size={400} className='relative opacity-[0.5]' />
			</div>
		</div>
	)
}
