import type { TFunction } from 'i18next'
import i18n from '../i18n'
import type { Tour } from '../types/tour'

/**
 * Возвращает копию тура с переведёнными текстовыми полями,
 * если для данного тура (по его id) есть переводы в i18n.
 * Для туров, созданных в админке (id вне списка) — возвращает тур без изменений.
 */
export function localizeTour(tour: Tour, t: TFunction): Tour {
	const prefix = `data.${tour.id}`
	if (!i18n.exists(`${prefix}.title`)) return tour

	return {
		...tour,
		title: t(`${prefix}.title`) || tour.title,
		shortDescription: t(`${prefix}.short`) || tour.shortDescription,
		fullDescription: t(`${prefix}.full`) || tour.fullDescription,
		region: t(`${prefix}.region`) || tour.region,
		route: tour.route.map((point, i) =>
			point.label
				? { ...point, label: t(`${prefix}.route.${i}`) || point.label }
				: point,
		),
	}
}