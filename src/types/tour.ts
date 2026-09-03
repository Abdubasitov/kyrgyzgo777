// Единая модель тура. Именно эту структуру редактирует админ-панель
// (Часть 6) и читают публичные страницы (Части 2-4).

export interface RoutePoint {
  lat: number;
  lng: number;
  /** Название точки на маршруте, показывается в подсказке на карте */
  label?: string;
}

export interface Tour {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  /** Путь к изображению в /public/images/tours/... — см. README про замену фото */
  coverImage: string;
  gallery: string[];
  price: number;
  currency: "KGS" | "USD";
  durationDays: number;
  difficulty: "лёгкий" | "средний" | "сложный";
  region: string;
  /** Точки маршрута по порядку — по ним рисуется линия на OpenStreetMap */
  route: RoutePoint[];
  featured: boolean;
}
