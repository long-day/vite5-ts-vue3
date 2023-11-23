interface InfoBind {
  label: string;
  value: string;
}
// Warning: XXX 和 XXX_DESC 相互跟随，需要更改需要对应上
export const LOCALE_OPTIONS: InfoBind[] = [
  { label: "简体中文", value: "zh-CN" },
  { label: "English", value: "en-US" },
  { label: "繁体中文", value: "zh-TW" },
];
// Warning: XXX 和 XXX_DESC 相互跟随，需要更改需要对应上
export const LOCALE_OPTIONS_DESC = {
  Simplified_Chinese: LOCALE_OPTIONS[0],
  English: LOCALE_OPTIONS[1],
  Traditional_Chinese: LOCALE_OPTIONS[2],
};

// Warning: XXX 和 XXX_DESC 相互跟随，需要更改需要对应上
export const DEVICE_OPTIONS: InfoBind[] = [
  { label: "移动端", value: "Phone" },
  { label: "PC端", value: "PC" },
  { label: "Pad端", value: "Pad" },
];
// Warning: XXX 和 XXX_DESC 相互跟随，需要更改需要对应上
export const DEVICE_OPTIONS_DESC = {
  移动端: DEVICE_OPTIONS[0],
  PC端: DEVICE_OPTIONS[1],
  Pad端: DEVICE_OPTIONS[2],
};
