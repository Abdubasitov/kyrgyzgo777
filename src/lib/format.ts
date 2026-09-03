export function formatPrice(price: number, currency: 'KGS' | 'USD') {
	const symbol = currency === 'KGS' ? 'сом' : '$'
	return `${price.toLocaleString('ru-RU')} ${symbol}`
}
