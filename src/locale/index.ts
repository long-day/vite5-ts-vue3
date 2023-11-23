import { createI18n } from 'vue-i18n';
import en from './en-US';
import simplified_chinese from './zh-CN';
import traditional_chinese from './zh-TW';

const defaultLocale = localStorage.getItem('arco-locale') || 'zh-CN';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'zh-CN',
  legacy: false,
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': simplified_chinese,
    'zh-TW': traditional_chinese,
  },
});

export default i18n;
