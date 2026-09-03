import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
	{ to: '/', label: 'Главная' },
	{ to: '/tours', label: 'Туры' },
	{ to: '/about', label: 'О нас' },
	{ to: '/contacts', label: 'Контакты' },
]

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 bg-stone-50/60 backdrop-blur-md border-b border-stone-300/50'>
			<div className='mx-auto max-w-6xl px-5 h-24 flex items-center justify-between'>
				<NavLink to='/' className='flex items-center gap-2 group'>
					<img
						src='/images/IMG_1738.PNG'
						alt='KyrgyzGo777'
						className='h-20 w-20 rounded-full object-cover ring-2 ring-forest-500/40 shadow-md shadow-forest-900/20 transition-transform duration-300 group-hover:scale-105 group-hover:ring-forest-500'
					/>
				</NavLink>

				<nav className='hidden md:flex items-center gap-8'>
					{NAV_LINKS.map(link => (
						<NavLink
							key={link.to}
							to={link.to}
							end={link.to === '/'}
							className={({ isActive }) =>
								`text-sm font-medium transition-colors ${
									isActive
										? 'text-forest-600'
										: 'text-ink hover:text-forest-600 font-semibold'
								}`
							}
						>
							{link.label}
						</NavLink>
					))}
					<NavLink
						to='/tours'
						className='rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-stone-50 hover:bg-forest-800 transition-colors'
					>
						Подобрать тур
					</NavLink>
				</nav>

				<button
					className='md:hidden text-ink'
					aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
					onClick={() => setOpen(v => !v)}
				>
					{open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
				</button>
			</div>

			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: 'easeInOut' }}
						className='md:hidden overflow-hidden border-t border-stone-300 bg-stone-50'
					>
						<div className='flex flex-col gap-1 px-5 py-4'>
							{NAV_LINKS.map(link => (
								<NavLink
									key={link.to}
									to={link.to}
									end={link.to === '/'}
									onClick={() => setOpen(false)}
									className={({ isActive }) =>
										`py-2 text-sm font-medium ${isActive ? 'text-forest-600' : 'text-ink/70'}`
									}
								>
									{link.label}
								</NavLink>
							))}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}
