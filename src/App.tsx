import { Route, Routes } from 'react-router-dom'
import WalkingIbirs from './components/WalkingIbirs'
import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TourDetail from './pages/TourDetail'
import Tours from './pages/Tours'
import AdminDashboard from './pages/admin/Dashboard'
import AdminLogin from './pages/admin/Login'
import AdminTourForm from './pages/admin/TourForm'
import AdminTours from './pages/admin/Tours'

export default function App() {
	return (
		<>
			<WalkingIbirs />

			<Routes>
				<Route element={<PublicLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/tours' element={<Tours />} />
					<Route path='/tours/:id' element={<TourDetail />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='*' element={<NotFound />} />
				</Route>
				<Route path='/admin/login' element={<AdminLogin />} />
				<Route path='/admin' element={<AdminLayout />}>
					<Route index element={<AdminDashboard />} />
					<Route path='tours' element={<AdminTours />} />
					<Route path='tours/new' element={<AdminTourForm />} />
					<Route path='tours/:id/edit' element={<AdminTourForm />} />
				</Route>
			</Routes>
		</>
	)
}
