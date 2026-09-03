import { motion } from 'framer-motion'
import { FaInstagram, FaLocationDot, FaWhatsapp } from 'react-icons/fa6'

export default function Contacts() {
	return (
		<section className='mx-auto max-w-4xl px-5 py-16'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className='font-display text-4xl font-bold text-forest-800 mb-4'>
					Контакты
				</h1>
				<p className='text-ink/60 mb-12 max-w-xl'>
					Свяжитесь с нами любым удобным способом. Мы ответим в течение часа в
					рабочее время.
				</p>

				<div className='grid gap-6 md:grid-cols-2'>
					<div className='backdrop-blur-md rounded-2xl border border-stone-200 p-6 shadow-sm'>
						<h2 className='font-display text-xl font-bold text-forest-800 mb-6'>
							Связаться с нами
						</h2>

						<div className='space-y-5'>
							<a
								href='https://wa.me/996999474797'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group'
							>
								<div className='w-12 h-12 rounded-full bg-green-500 flex items-center justify-center'>
									<FaWhatsapp className='h-6 w-6 text-white' />
								</div>
								<div>
									<div className='text-sm text-ink/60'>WhatsApp</div>
									<div className='font-medium text-ink/90 group-hover:text-green-600 transition-colors'>
										+996 999 474 797
									</div>
								</div>
							</a>

							<a
								href='https://www.instagram.com/kyrgyzgo777?igsi=eTRjdnIwdWU5anJ1'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors group'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center'>
									<FaInstagram className='h-6 w-6 text-white' />
								</div>
								<div>
									<div className='text-sm text-ink/60'>Instagram</div>
									<div className='font-medium text-ink/90 group-hover:text-pink-600 transition-colors'>
										@kyrgyzgo777
									</div>
								</div>
							</a>

							<div className='flex items-center gap-4 p-4 rounded-xl bg-stone-50'>
								<div className='w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center'>
									<FaLocationDot className='h-5 w-5 text-forest-600' />
								</div>
								<div>
									<div className='text-sm text-ink/60'>Локация</div>
									<div className='font-medium text-ink/90'>
										г. Манас, Кыргызстан
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='backdrop-blur-md rounded-2xl border border-stone-200 p-6 shadow-sm'>
						<h2 className='font-display text-xl font-bold text-forest-800 mb-6'>
							Напишите нам
						</h2>
						<form className='space-y-4' onSubmit={e => e.preventDefault()}>
							<div>
								<label className='block text-sm font-medium text-ink/70 mb-1'>
									Ваше имя
								</label>
								<input
									type='text'
									className='w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-colors'
									placeholder='Как к вам обращаться?'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-ink/70 mb-1'>
									Телефон или WhatsApp
								</label>
								<input
									type='tel'
									className='w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-colors'
									placeholder='+996 XXX XXX XXX'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-ink/70 mb-1'>
									Сообщение
								</label>
								<textarea
									rows={4}
									className='w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-colors resize-none'
									placeholder='Какой тур вас интересует? Когда планируете поездку?'
								/>
							</div>
							<button
								type='submit'
								className='w-full py-3 px-6 rounded-lg bg-forest-600 text-white font-semibold hover:bg-forest-700 transition-colors'
							>
								Отправить заявку
							</button>
						</form>
					</div>
				</div>
			</motion.div>
		</section>
	)
}
