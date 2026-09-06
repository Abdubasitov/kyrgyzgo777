import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ky', label: 'Кыргызча', flag: '🇰🇬' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
] as const

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const current =
    LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0]

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(e: globalThis.KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <div className='relative' ref={rootRef}>
      <button
        type='button'
        onClick={() => setOpen(v => !v)}
        aria-label={t('header.chooseLang')}
        aria-expanded={open}
        className='inline-flex items-center gap-1.5 rounded-full border border-stone-300/80 bg-stone-50/70 px-3 py-1.5 text-sm font-medium text-ink shadow-sm backdrop-blur transition-colors hover:border-forest-500 hover:text-forest-600'
      >
        <Globe className='h-4 w-4 text-forest-600' />
        <span className='leading-none'>{current.flag}</span>
        <span className='hidden sm:inline'>{current.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-ink/50 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className='absolute end-0 z-50 mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-stone-300/70 bg-white/95 p-1.5 shadow-xl shadow-forest-900/10 backdrop-blur-md'
          >
            {LANGUAGES.map(lang => {
              const active = lang.code === i18n.language
              return (
                <li key={lang.code}>
                  <button
                    type='button'
                    onClick={() => {
                      i18n.changeLanguage(lang.code)
                      setOpen(false)
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors ${
                      active
                        ? 'bg-forest-600 text-stone-50'
                        : 'text-ink hover:bg-forest-50 hover:text-forest-700'
                    }`}
                  >
                    <span className='text-base leading-none'>
                      {lang.flag}
                    </span>
                    <span className='flex-1 text-start font-medium'>
                      {lang.label}
                    </span>
                    {active && <Check className='h-4 w-4' />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}