// 导入配置常量，方便维护，CE是ConfigEnum的缩写
import * as CE from '@/enums/app/config.ts';

const defaultConfig = {
  theme: '',
  menu: true,
  device: CE.DEVICE_OPTIONS_DESC.PC端.value,
  topMenu: {
    enable: true,
    selected_key: [''],
  },
  hideMenu: false,
  footer: true,
  appInfos: {
    site_title: 'name',
    site_copyright: 'site_copyright',
    site_logo: 'site_logo',
    site_favicon: 'site_favicon',
  },
  language: CE.LOCALE_OPTIONS_DESC.Simplified_Chinese.value,
};

export default defaultConfig;
