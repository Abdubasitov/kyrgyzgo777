import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTourStore } from '../../store/tourStore';
import { ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login, isAdminMode } = useTourStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Если уже залогинен - редирект на дашборд
  if (isAdminMode) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <ShieldCheck className="h-12 w-12 text-forest-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-ink/90">Вход в админ-панель</h2>
          <p className="mt-2 text-sm text-ink/60">
            КиргизГо777 — система управления туром
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-ink/70 mb-1">
              Логин
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(''); }}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-colors"
              placeholder="Введите логин"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-ink/70 mb-1">
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-colors"
              placeholder="Введите пароль"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-forest-600 text-white font-medium hover:bg-forest-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}