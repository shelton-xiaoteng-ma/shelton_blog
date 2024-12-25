import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const fallbackLng = 'en'
const secondLng = 'zh'
export const locales = [fallbackLng, secondLng]

interface useLangState {
  lang: (typeof locales)[number]
  switch_lang: (value: (typeof locales)[number]) => void
}

export const useLang = create<useLangState, [['zustand/persist', useLangState]]>(
  persist(
    (set) => ({
      lang: 'en',
      switch_lang: (value) => {
        set({ lang: value })
      },
    }),
    {
      name: 'lang-storage',
    }
  )
)
