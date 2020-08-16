const format = (fontNames?: Array<string>) =>
  fontNames?.length ? `${fontNames.map((it) => `'${it}'`).join(',')},` : ''

// https://github.com/Huxpro/huxpro.github.io/blob/79fd39137828a99425ec5092b609f860c97f037e/less/mixins.less
export function serif(...fontNames: Array<string>): string {
  return `font-family: ${format(fontNames)} 'Lora', 'Times New Roman', serif;`
}

export function sansSerif(...fontNames: Array<string>): string {
  return `// System Font
  // https://www.webkit.org/blog/3709/using-the-system-font-in-web-content/
  // OSX ^10.11 & iOS ^9  San Francisco & 苹方 for Safari
  font-family: ${format(fontNames)} -apple-system,
    // OSX ^10.11 & iOS ^9  San Francisco & 苹方 for Blink
      BlinkMacSystemFont,
    // English First
      // OSX
      'Helvetica Neue',
    // Win "Helvetica"
      'Arial',
    // Chinese Fallback
      // OSX ^10.11 & iOS ^9  苹方（华康信凭黑）
      'PingFang SC',
    // OSX ^10.6            冬青黑体
      'Hiragino Sans GB',
    // OSX <10.6  & iOS <9  华文黑体
      'STHeiti',
    // Win                  微软雅黑
      'Microsoft YaHei',
    // Win                  微软正黑
      'Microsoft JhengHei',
    // SourceHan - begin    思源黑体
      'Source Han Sans SC',
    'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC',
    'Source Han Sans TC', 'Noto Sans CJK TC',
    // SourceHan - end
      // Linux                文泉驿微米黑
      'WenQuanYi Micro Hei',
    // Win old              中易宋体
      SimSun,
    // System Fallback
      sans-serif;`
}

// https://code.visualstudio.com/updates/v1_44#_new-default-monospace-font
export function monospace(...fontNames: Array<string>) {
  return `font-family:
  /* priority */ ${format(fontNames)} /* mac */ 'SF Mono', Monaco, Menlo,
    Courier, /* linux*/ 'Ubuntu Mono', 'Liberation Mono', 'DejaVu Sans Mono',
    /* windows */ Consolas, 'Courier New', monospace;`
}
