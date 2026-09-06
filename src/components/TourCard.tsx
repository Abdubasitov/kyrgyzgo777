import { motion } from 'framer-motion'
import { Clock, Mountain as DifficultyIcon, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../lib/format'
import type { Tour } from '../types/tour'

export default function TourCard({ tour }: { tour: Tour }) {
	return (
		<motion.article
			whileHover={{ y: -6 }}
			transition={{ type: 'spring', stiffness: 300, damping: 22 }}
			className='group overflow-hidden rounded-2xl backdrop-blur-md backdrop-blur-md border border-stone-300/70 shadow-sm'
		>
			<Link to={`/tours/${tour.id}`}>
				<div className='relative aspect-[4/3] overflow-hidden bg-stone-100'>
					{/* TODO: заменить на реальное фото тура */}
					<img
						src={tour.coverImage}
						alt={tour.title}
						className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
						onError={e => {
							e.currentTarget.src =
								'https://placehold.co/640x480/1D6B3B/F2F4EE?text=' +
								encodeURIComponent(tour.title.slice(0, 20))
						}}
					/>
					<span className='absolute top-3 left-3 rounded-full bg-forest-950/80 text-stone-50 text-xs font-medium px-3 py-1'>
						{tour.durationDays} {tour.durationDays === 1 ? 'день' : 'дня'}
					</span>
				</div>

				<div className='p-5'>
					<h3 className='font-display text-xl font-bold text-forest-800 leading-tight'>
						{tour.title}
					</h3>
					<p className='mt-2 text-sm text-ink/60 line-clamp-2'>
						{tour.shortDescription}
					</p>

					<div className='mt-4 flex items-center gap-4 text-xs text-ink/50'>
						<span className='flex items-center gap-1'>
							<MapPin className='h-3.5 w-3.5' /> {tour.region}
						</span>
						<span className='flex items-center gap-1'>
							<DifficultyIcon className='h-3.5 w-3.5' /> {tour.difficulty}
						</span>
					</div>

					<div className='mt-4 flex items-center justify-between border-t border-stone-300 pt-4'>
						<span className='font-display text-lg font-bold text-forest-600'>
							от {formatPrice(tour.price, tour.currency)}
						</span>
						<span className='flex items-center gap-1 text-sm font-medium text-forest-600'>
							<Clock className='h-3.5 w-3.5' /> Маршрут на карте
						</span>
					</div>
				</div>
			</Link>
		</motion.article>
	)
}
