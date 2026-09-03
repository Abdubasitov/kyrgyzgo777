import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTourStore } from '../../store/tourStore';
import type { Tour, RoutePoint } from '../../types/tour';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminTourForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tours, setTours } = useTourStore();
  
  const isEditing = Boolean(id);
  const existingTour = tours.find(t => t.id === id);

  const [formData, setFormData] = useState<Partial<Tour>>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    coverImage: '',
    gallery: [],
    price: 0,
    currency: 'KGS',
    durationDays: 1,
    difficulty: 'средний',
    region: '',
    route: [],
    featured: false,
  });

  const [newRoutePoint, setNewRoutePoint] = useState<RoutePoint>({ lat: 0, lng: 0, label: '' });

  useEffect(() => {
    if (existingTour) {
      setFormData(existingTour);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.price) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }

    const tourId = id || `tour-${Date.now()}`;
    
    const tourData: Tour = {
      id: tourId,
      title: formData.title || '',
      shortDescription: formData.shortDescription || '',
      fullDescription: formData.fullDescription || '',
      coverImage: formData.coverImage || '/images/placeholder.jpg',
      gallery: formData.gallery || [],
      price: formData.price || 0,
      currency: formData.currency || 'KGS',
      durationDays: formData.durationDays || 1,
      difficulty: formData.difficulty || 'средний',
      region: formData.region || '',
      route: formData.route || [],
      featured: formData.featured || false,
    };

    if (isEditing) {
      setTours(tours.map(t => t.id === id ? tourData : t));
    } else {
      setTours([...tours, tourData]);
    }
    
    navigate('/admin/tours');
  };

  const addRoutePoint = () => {
    if (newRoutePoint.lat && newRoutePoint.lng) {
      setFormData({
        ...formData,
        route: [...(formData.route || []), { ...newRoutePoint }],
      });
      setNewRoutePoint({ lat: 0, lng: 0, label: '' });
    }
  };

  const removeRoutePoint = (index: number) => {
    setFormData({
      ...formData,
      route: (formData.route || []).filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/admin/tours"
          className="inline-flex items-center gap-2 text-ink/60 hover:text-forest-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад к списку
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-ink/90 mb-6">
        {isEditing ? 'Редактирование тура' : 'Новый тур'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Основная информация</h2>
          
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">
                Название тура *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                placeholder="Например: Озеро Сон-Куль"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Цена *</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Валюта</label>
                <select
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value as 'KGS' | 'USD' })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                >
                  <option value="KGS">KGS (Сом)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Дней</label>
                <input
                  type="number"
                  min="1"
                  value={formData.durationDays}
                  onChange={(e) => setFormData({ ...formData, durationDays: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Сложность</label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                >
                  <option value="лёгкий">Лёгкий</option>
                  <option value="средний">Средний</option>
                  <option value="сложный">Сложный</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Регион</label>
                <input
                  type="text"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                  placeholder="Иссык-Кульская обл."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">
                Краткое описание
              </label>
              <textarea
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                rows={2}
                placeholder="Короткое описание для карточки тура"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">
                Полное описание
              </label>
              <textarea
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                rows={4}
                placeholder="Подробное описание маршрута и программы"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">
                URL изображения обложки
              </label>
              <input
                type="text"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none"
                placeholder="/images/tours/tour-name.jpg"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 text-forest-600 rounded border-stone-300 focus:ring-forest-500"
              />
              <label htmlFor="featured" className="text-sm text-ink/70">
                Показать на главной странице
              </label>
            </div>
          </div>
        </div>

        {/* Route Points */}
        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Точки маршрута</h2>
          
          <div className="space-y-3 mb-4">
            {formData.route && formData.route.length > 0 ? (
              formData.route.map((point, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg">
                  <span className="w-6 h-6 flex items-center justify-center bg-forest-600 text-white text-xs rounded-full">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-sm">{point.label || `${point.lat}, ${point.lng}`}</span>
                  <span className="text-xs text-ink/50">
                    {point.lat.toFixed(4)}, {point.lng.toFixed(4)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeRoutePoint(index)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-ink/50">Нет точек маршрута</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              step="0.0001"
              placeholder="Широта (lat)"
              value={newRoutePoint.lat || ''}
              onChange={(e) => setNewRoutePoint({ ...newRoutePoint, lat: Number(e.target.value) })}
              className="px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none text-sm"
            />
            <input
              type="number"
              step="0.0001"
              placeholder="Долгота (lng)"
              value={newRoutePoint.lng || ''}
              onChange={(e) => setNewRoutePoint({ ...newRoutePoint, lng: Number(e.target.value) })}
              className="px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Название точки"
              value={newRoutePoint.label}
              onChange={(e) => setNewRoutePoint({ ...newRoutePoint, label: e.target.value })}
              className="px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none text-sm"
            />
          </div>
          <button
            type="button"
            onClick={addRoutePoint}
            className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 text-sm text-forest-600 border border-forest-300 rounded-lg hover:bg-forest-50 transition-colors"
          >
            <Plus className="h-3 w-3" />
            Добавить точку
          </button>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            to="/admin/tours"
            className="px-6 py-2 rounded-lg border border-stone-300 text-ink/70 hover:bg-stone-50 transition-colors"
          >
            Отмена
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
          >
            {isEditing ? 'Сохранить изменения' : 'Создать тур'}
          </button>
        </div>
      </form>
    </div>
  );
}
