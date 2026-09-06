import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from './locales/ru'
import ky from './locales/ky'
import en from './locales/en'
import de from './locales/de'
import tr from './locales/tr'
import zh from './locales/zh'
import ar from './locales/ar'

const STORAGE_KEY = 'kyrgyzgo777-lang'

function getInitialLanguage(): string {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && ['ru', 'ky', 'en', 'de', 'tr', 'zh', 'ar'].includes(saved)) {
    return saved
  }
  const browser = navigator.language?.toLowerCase() ?? ''
  if (browser.startsWith('ky')) return 'ky'
  if (browser.startsWith('ru')) return 'ru'
  if (browser.startsWith('de')) return 'de'
  if (browser.startsWith('tr')) return 'tr'
  if (browser.startsWith('zh')) return 'zh'
  if (browser.startsWith('ar')) return 'ar'
  if (browser.startsWith('en')) return 'en'
  return 'ru'
}

const initialLang = getInitialLanguage()

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    ky: { translation: ky },
    en: { translation: en },
    de: { translation: de },
    tr: { translation: tr },
    zh: { translation: zh },
    ar: { translation: ar },
  },
  lng: initialLang,
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
  returnEmptyString: false,
})

function applyDocumentDirection(lng: string) {
  document.documentElement.lang = lng
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
}

applyDocumentDirection(i18n.language)

i18n.on('languageChanged', lng => {
  localStorage.setItem(STORAGE_KEY, lng)
  applyDocumentDirection(lng)
})

export default i18n