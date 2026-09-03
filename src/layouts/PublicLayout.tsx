import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SiteBackground from '../components/SiteBackground'

export default function PublicLayout() {
	return (
		<div className='min-h-screen flex flex-col'>
			<SiteBackground />
			<Header />
			<main className='flex-1'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
