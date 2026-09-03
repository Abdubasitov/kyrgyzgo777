import { useTourStore } from '../../store/tourStore';
import { Link } from 'react-router-dom';
import { Plus, Edit, MapPin } from 'lucide-react';

export default function AdminDashboard() {
  const { tours } = useTourStore();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-ink/90">Дашборд</h1>
        <Link
          to="/admin/tours/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Новый тур
        </Link>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-forest-100 text-forest-600">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-ink/60">Всего туров</h2>
              <p className="text-2xl font-bold text-ink/90">{tours.length}</p>
            </div>
          </div>
        </div>
      </div>

      {tours.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-ink/90 mb-4">Все туры</h2>
          <div className="grid gap-4">
            {tours.map(tour => (
              <div 
                key={tour.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-stone-200 shadow-sm"
              >
                <div>
                  <h3 className="font-medium text-ink/90">{tour.title}</h3>
                  <p className="text-sm text-ink/60">{tour.shortDescription}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/admin/tours/${tour.id}/edit`}
                    className="p-2 rounded-full text-forest-600 hover:bg-forest-50 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <Link
                    to={`/tours/${tour.id}`}
                    className="p-2 rounded-full text-forest-600 hover:bg-forest-50 transition-colors"
                    target="_blank"
                  >
                    <MapPin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}