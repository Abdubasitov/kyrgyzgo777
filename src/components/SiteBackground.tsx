import { motion } from 'framer-motion'
import TundukSun from './TundukSun'

export default function SiteBackground() {
	return (
		<div className='fixed inset-0 -z-10 overflow-hidden bg-stone-50'>
			<motion.div
				className='absolute inset-0'
				style={{
					background:
						'radial-gradient(55% 45% at 50% 6%, rgba(184,145,47,0.20) 0%, rgba(79,169,104,0.10) 40%, rgba(242,244,238,0) 72%)',
				}}
				animate={{ opacity: [0.75, 1, 0.75] }}
				transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
			/>

			<motion.div
				className='absolute -left-32 top-[28%] h-96 w-96 rounded-full bg-forest-400/[0.10] blur-3xl'
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

			<svg
				className='absolute bottom-0 left-0 w-full text-forest-800/[0.055]'
				viewBox='0 0 1440 220'
				preserveAspectRatio='none'
				aria-hidden
			>
				<path
					fill='currentColor'
					d='M0,170 L130,105 L270,155 L430,55 L610,145 L770,85 L950,165 L1140,95 L1310,150 L1440,115 L1440,220 L0,220 Z'
				/>
			</svg>
		</div>
	)
}
