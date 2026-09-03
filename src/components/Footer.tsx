import { FaInstagram, FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='	 backdrop-blur-ms text-stone-50 mt-24'>
			<div className='mx-auto max-w-6xl px-5 py-12 grid gap-10 sm:grid-cols-3'>
				<div>
					<img
						src='/images/IMG_1738.PNG'
						alt='KyrgyzGo777'
						className='h-20 w-20 rounded-full object-cover ring-2 ring-forest-500/40 shadow-md shadow-forest-900/30 transition-transform duration-300 hover:scale-105 hover:ring-forest-500'
					/>
					<p className='mt-3 text-sm text-ink/70 max-w-xs'>
						Авторские туры по Кыргызстану: горы, озёра, юрточные лагеря и
						маршруты, которые не найти в типовых каталогах.
					</p>
				</div>

				<div>
					<div className='text-sm font-semibold text-ink/70 mb-3'>
						Навигация
					</div>
					<ul className='space-y-2 text-ink/70 text-sm'>
						<li>
							<Link className='hover:text-forest-400' to='/tours'>
								Все туры
							</Link>
						</li>
						<li>
							<Link className='hover:text-forest-400' to='/about'>
								О компании
							</Link>
						</li>
						<li>
							<Link className='hover:text-forest-400' to='/contacts'>
								Контакты
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<div className='text-sm font-semibold text-ink/70 mb-3'>
						Связаться
					</div>
					<ul className='space-y-3 text-sm text-ink/80'>
						<li>
							<a
								href='https://wa.me/996999474797'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 hover:text-green-500 transition-colors'
							>
								<FaWhatsapp className='h-5 w-5 text-green-400' />
								+996 999 474 797
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/kyrgyzgo777?igsi=eTRjdnIwdWU5anJ1'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 hover:text-pink-500 transition-colors'
							>
								<FaInstagram className='h-5 w-5 text-pink-400' />
								kyrgyzgo777
							</a>
						</li>
						<li className='inline-flex items-center gap-2'>
							<FaLocationDot className='h-5 w-5 text-forest-400 flex-shrink-0' />
							г. Манас, Кыргызстан
						</li>
					</ul>
				</div>
			</div>
			<div className='border-t border-ink/20 py-4 text-center text-xs text-ink/70'>
				© {new Date().getFullYear()} KyrgyzGo777. Все права защищены.
			</div>
		</footer>
	)
}
