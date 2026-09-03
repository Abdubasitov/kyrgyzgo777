import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-forest-800">404</h1>
      <p className="mt-4 text-ink/60">Такой страницы нет.</p>
      <Link to="/" className="mt-6 inline-block text-forest-600 font-medium hover:underline">
        На главную
      </Link>
    </section>
  );
}
