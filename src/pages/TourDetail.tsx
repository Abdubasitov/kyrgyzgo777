import { useParams, Link } from 'react-router-dom';
import { useTourStore } from '../store/tourStore';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ArrowLeft, Clock, MapPin, Mountain as DifficultyIcon } from 'lucide-react';
import { formatPrice } from '../lib/format';
import { motion } from 'framer-motion';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function TourDetail() {
  const { id } = useParams();
  const { tours } = useTourStore();
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-forest-800">Тур не найден</h1>
        <p className="mt-4 text-ink/60">Возможно, тур был удалён или ещё не создан.</p>
        <Link to="/tours" className="mt-6 inline-block text-forest-600 font-medium hover:underline">
          Вернуться к каталогу
        </Link>
      </div>
    );
  }

  const center: [number, number] = tour.route.length > 0
    ? [tour.route[0].lat, tour.route[0].lng]
    : [42.8746, 74.6122];
  const path: [number, number][] = tour.route.map(p => [p.lat, p.lng]);

  return (
    <article className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-forest-950"
      >
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
        
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-10">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-stone-50/80 hover:text-stone-50 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Все туры
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 max-w-3xl">
            {tour.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-stone-50/80 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {tour.durationDays} {tour.durationDays === 1 ? 'день' : 'дня'}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {tour.region}
            </span>
            <span className="flex items-center gap-1">
              <DifficultyIcon className="h-4 w-4" /> {tour.difficulty}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-forest-800 mb-4">О маршруте</h2>
            <p className="text-ink/70 leading-relaxed whitespace-pre-line">
              {tour.fullDescription}
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <div className="text-sm text-ink/60">Стоимость от</div>
              <div className="font-display text-3xl font-bold text-forest-600 mt-1">
                {formatPrice(tour.price, tour.currency)}
              </div>
              <Link
                to="/contacts"
                className="mt-4 block w-full rounded-full bg-forest-600 px-5 py-3 text-center font-semibold text-stone-50 hover:bg-forest-800 transition-colors"
              >
                Оставить заявку
              </Link>
              <Link
                to="/contacts"
                className="mt-3 block w-full rounded-full border border-forest-600 px-5 py-3 text-center font-semibold text-forest-600 hover:bg-forest-50 transition-colors"
              >
                Задать вопрос
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-forest-800 mb-6">Маршрут на карте</h2>
          {tour.route.length === 0 ? (
            <p className="text-ink/60">Маршрут для этого тура пока не задан.</p>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-stone-200 h-[480px]">
              <MapContainer
                center={center}
                zoom={8}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap'
                />
                {path.length > 1 && (
                  <Polyline
                    positions={path}
                    pathOptions={{ color: '#3ddc73', weight: 5, opacity: 0.9 }}
                  />
                )}
                {tour.route.map((point, i) => (
                  <Marker key={i} position={[point.lat, point.lng]}>
                    <Popup>
                      <strong>{point.label || `Точка ${i + 1}`}</strong>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}

          {tour.route.length > 0 && (
            <ol className="mt-6 space-y-2">
              {tour.route.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-medium text-ink/90">{point.label || `Точка ${i + 1}`}</div>
                    <div className="text-ink/50 text-xs">
                      {point.lat.toFixed(4)}, {point.lng.toFixed(4)}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </article>
  );
}
