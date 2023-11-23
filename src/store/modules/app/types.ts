export interface AppInfos {
  site_title?: string;
  site_copyright?: string;
  site_logo?: string;
  site_favicon?: string;
}
export interface TopMenu {
  enable?: boolean;
  selected_key?: string[];
}

export interface AppState {
  theme: string;
  menu: boolean;
  device: string;
  topMenu: TopMenu;
  hideMenu: boolean;
  footer: boolean;
  appInfos: AppInfos;
  language: string;
}
