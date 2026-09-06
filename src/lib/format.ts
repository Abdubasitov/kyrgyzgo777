import i18n from '../i18n'

const LOCALE_MAP: Record<string, string> = {
	ru: 'ru-RU',
	ky: 'ky-KG',
	en: 'en-US',
	de: 'de-DE',
	tr: 'tr-TR',
	zh: 'zh-CN',
	ar: 'ar-EG',
}

export function formatPrice(price: number, currency: 'KGS' | 'USD') {
	const lang = i18n.language
	const locale = LOCALE_MAP[lang] ?? 'ru-RU'
	const symbol =
		currency === 'USD'
			? '$'
			: lang === 'ru' || lang === 'ky'
				? 'сом'
				: lang === 'ar'
					? 'سوم'
					: 'KGS'
	return `${price.toLocaleString(locale)} ${symbol}`
}
