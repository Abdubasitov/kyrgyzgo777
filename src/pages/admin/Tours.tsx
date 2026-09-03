import { Link } from 'react-router-dom';
import { useTourStore } from '../../store/tourStore';
import { Plus, Edit, MapPin, Trash2 } from 'lucide-react';
import { formatPrice } from '../../lib/format';

export default function AdminTours() {
  const { tours, deleteTour } = useTourStore();

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Удалить тур "${title}"?`)) {
      deleteTour(id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-ink/90">Управление турами</h1>
        <Link
          to="/admin/tours/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Добавить тур
        </Link>
      </div>

      {tours.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-stone-200">
          <p className="text-ink/60">Нет туров. Создайте первый!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {tours.map(tour => (
            <div 
              key={tour.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-stone-200 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={tour.coverImage}
                  alt={tour.title}
                  className="w-20 h-14 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium text-ink/90">{tour.title}</h3>
                  <p className="text-sm text-ink/60">
                    {tour.durationDays} дней • {tour.region} • от {formatPrice(tour.price, tour.currency)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/tours/${tour.id}`}
                  className="p-2 rounded-full text-ink/40 hover:text-forest-600 hover:bg-forest-50 transition-colors"
                  target="_blank"
                  title="Просмотр"
                >
                  <MapPin className="h-4 w-4" />
                </Link>
                <Link
                  to={`/admin/tours/${tour.id}/edit`}
                  className="p-2 rounded-full text-ink/40 hover:text-forest-600 hover:bg-forest-50 transition-colors"
                  title="Редактировать"
                >
                  <Edit className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => handleDelete(tour.id, tour.title)}
                  className="p-2 rounded-full text-ink/40 hover:text-red-500 hover:bg-red-50 transition-colors"
                  title="Удалить"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}