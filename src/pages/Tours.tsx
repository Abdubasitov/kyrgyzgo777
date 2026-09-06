import { useState, useMemo } from 'react';
import { useTourStore } from '../store/tourStore';
import TourCard from '../components/TourCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Tours() {
  const { tours } = useTourStore();
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [durationFilter, setDurationFilter] = useState<string>('all');

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(search.toLowerCase()) ||
        tour.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        tour.region.toLowerCase().includes(search.toLowerCase());
      
      const matchesDifficulty = difficultyFilter === 'all' || tour.difficulty === difficultyFilter;
      
      const matchesDuration = durationFilter === 'all' || 
        (durationFilter === '1' && tour.durationDays === 1) ||
        (durationFilter === '2-4' && tour.durationDays >= 2 && tour.durationDays <= 4) ||
        (durationFilter === '5+' && tour.durationDays >= 5);
      
      return matchesSearch && matchesDifficulty && matchesDuration;
    });
  }, [tours, search, difficultyFilter, durationFilter]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="rounded-2xl backdrop-blur-md bg-white/60 border border-stone-300/70 shadow-sm p-6">
      <h1 className="font-display text-4xl font-bold text-forest-800 mb-8">
        Каталог туров
      </h1>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink/40" />
          <input
            type="text"
            placeholder="Поиск по названию, описанию или региону..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-stone-300 pl-10 pr-4 py-2.5 text-sm focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <SlidersHorizontal className="h-5 w-5 text-ink/40" />
          
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none"
          >
            <option value="all">Любая сложность</option>
            <option value="лёгкий">Лёгкий</option>
            <option value="средний">Средний</option>
            <option value="сложный">Сложный</option>
          </select>

          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none"
          >
            <option value="all">Любая длительность</option>
            <option value="1">1 день</option>
            <option value="2-4">2-4 дня</option>
            <option value="5+">5+ дней</option>
          </select>
        </div>
      </div>

      {filteredTours.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-ink/60">Туры не найдены. Попробуйте изменить параметры поиска.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-ink/50 mb-6">
            Найдено туров: {filteredTours.length}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </>
      )}
      </div>
    </section>
  );
}
