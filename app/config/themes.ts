/**
 * @see https://github.com/system-ui/theme-specification/issues/8
 * @see https://emotion.sh/docs/emotion-theming
 * @see https://github.com/system-ui/theme-specification
 */
export interface ThemeUiSpec {
  borders?: { [name: string]: number }
  borderStyles?: { [name: string]: number }
  borderWidths?: { [name: string]: number }
  buttons?: { [name: string]: Record<string, unknown> }
  colors?: { [name: string]: string } | { modes?: { [name: string]: string } }
  fonts?: { [name: string]: string }
  fontSizes?: { [name: string]: number }
  fontWeights?: { [name: string]: number }
  letterSpacings?: { [name: string]: number }
  lineHeights?: { [name: string]: number }
  radii?: { [name: string]: number }
  space?: { [name: string]: number }
  sizes?: { [name: string]: number }
  transitionDurations?: { [name: string]: number }
  transitionTiming?: {
    [name: string]: {
      x1: number
      y1: number
      x2: number
      y2: number
    }
  }
  zIndices?: { [name: string]: number }
}

export interface Themes {
  [key: string]: ThemeUiSpec
}

const themes: Themes = {
  // https://github.com/system-ui/theme-specification/issues/1
  default: {
    fontSizes: {},
    colors: {
      primary: '#07c',
      gray: '#f6f6ff',
    },
    buttons: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      outline: {
        color: 'primary',
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 2px',
      },
    },
  },
}

export default themes
