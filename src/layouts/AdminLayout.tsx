import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { LogOut, ShieldCheck } from 'lucide-react';
import { useTourStore } from '../store/tourStore';

export default function AdminLayout() {
  const { isAdminMode, logout } = useTourStore();

  // Redirect to login if not in admin mode
  if (!isAdminMode) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <header className="border-b border-stone-200 px-6 py-4 bg-white flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <ShieldCheck className="h-6 w-6 text-forest-600" />
          <h1 className="text-xl font-semibold text-ink/90">КыргызГо777 Админ-панель</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-stone-300 text-sm text-ink/60 hover:bg-stone-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </button>
        </div>
      </header>

      <nav className="border-b border-stone-200 px-6 py-3 bg-white shadow-sm">
        <div className="flex items-center space-x-6">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? 'border-b-2 border-forest-500 text-forest-700'
                  : 'text-ink/60 hover:text-ink/90'
              }`}
          >
            Дашборд
          </NavLink>
          
          <NavLink
            to="/admin/tours"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? 'border-b-2 border-forest-500 text-forest-700'
                  : 'text-ink/60 hover:text-ink/90'
              }`}
          >
            Туры
          </NavLink>
        </div>
      </nav>

      <main className="flex-1 px-6 py-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}