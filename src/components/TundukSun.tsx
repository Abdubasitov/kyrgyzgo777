import { motion } from 'framer-motion'

const RADII = [10, 28, 48, 68, 86]
const N = 16

function wobble(seed: number) {
	const x = Math.sin(seed * 12.9898) * 43758.5453
	return x - Math.floor(x)
}

interface Pt {
	x: number
	y: number
}

export default function TundukSun({
	size = 560,
	className = '',
	color = '#F2A93A',
	glowColor = '#FBC94D',
	rock = true,
}: {
	size?: number
	className?: string
	color?: string
	glowColor?: string
	rock?: boolean
}) {
	const cx = 100
	const cy = 100

	const rings: Pt[][] = RADII.map((radius, ringIdx) =>
		Array.from({ length: N }, (_, i) => {
			const angle = (i / N) * Math.PI * 2 + ringIdx * 0.12
			const r = radius * (1 + (wobble(ringIdx * 97 + i) - 0.5) * 0.14)
			return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
		}),
	)

	const spikes: { from: Pt; to: Pt }[] = rings[rings.length - 1]
		.filter((_, i) => i % 2 === 0)
		.map((p, idx) => {
			const angle = ((idx * 2) / N) * Math.PI * 2
			const len = 8 + wobble(idx * 13) * 10
			return {
				from: p,
				to: { x: p.x + len * Math.cos(angle), y: p.y + len * Math.sin(angle) },
			}
		})

	return (
		<motion.svg
			viewBox='0 0 200 200'
			width={size}
			height={size}
			className={className}
			style={{ overflow: 'visible' }}
			animate={rock ? { rotate: [-7, 7, -7] } : undefined}
			transition={
				rock ? { duration: 10, repeat: Infinity, ease: 'easeInOut' } : undefined
			}
		>
			<defs>
				<radialGradient id='tunduk-sun-glow' cx='50%' cy='50%' r='50%'>
					<stop offset='0%' stopColor={glowColor} stopOpacity='0.9' />
					<stop offset='35%' stopColor={glowColor} stopOpacity='0.4' />
					<stop offset='70%' stopColor={glowColor} stopOpacity='0.1' />
					<stop offset='100%' stopColor={glowColor} stopOpacity='0' />
				</radialGradient>
			</defs>

			<circle cx={cx} cy={cy} r={108} fill='url(#tunduk-sun-glow)' />

			{rings.map((ring, ringIdx) =>
				ring.map((p, i) => {
					const next = ring[(i + 1) % N]
					return (
						<line
							key={`ring-${ringIdx}-${i}`}
							x1={p.x}
							y1={p.y}
							x2={next.x}
							y2={next.y}
							stroke={color}
							strokeWidth={1.1}
							strokeLinecap='round'
							opacity={0.55}
						/>
					)
				}),
			)}

			{rings.slice(0, -1).map((ring, ringIdx) =>
				ring.map((p, i) => {
					const outer = rings[ringIdx + 1][i]
					return (
						<line
							key={`spoke-${ringIdx}-${i}`}
							x1={p.x}
							y1={p.y}
							x2={outer.x}
							y2={outer.y}
							stroke={color}
							strokeWidth={1.1}
							strokeLinecap='round'
							opacity={0.5}
						/>
					)
				}),
			)}

			{spikes.map((s, i) => (
				<line
					key={`spike-${i}`}
					x1={s.from.x}
					y1={s.from.y}
					x2={s.to.x}
					y2={s.to.y}
					stroke={color}
					strokeWidth={1.4}
					strokeLinecap='round'
					opacity={0.7}
				/>
			))}

			{rings.map((ring, ringIdx) =>
				ring.map((p, i) => (
					<circle
						key={`dot-${ringIdx}-${i}`}
						cx={p.x}
						cy={p.y}
						r={
							ringIdx === rings.length - 1
								? 2.6
								: 1.7 + wobble(ringIdx * 31 + i) * 1.1
						}
						fill={color}
					/>
				)),
			)}
			{spikes.map((s, i) => (
				<circle
					key={`spike-dot-${i}`}
					cx={s.to.x}
					cy={s.to.y}
					r={2.4}
					fill={glowColor}
				/>
			))}
		</motion.svg>
	)
}
