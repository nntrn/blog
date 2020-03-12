import { css, Global } from '@emotion/react'
import config from '../blog.config'

import { kebabCase, hexToHSL } from './utils'

function hslTheme(color, name = '') {
  const toHSL = hexToHSL(color)

  const styles = []

  const baseName = name ? kebabCase(name) + '-' : name

  const cssCustomName = (key, value) => `--${baseName}${key}: ${value};`
  const customVarName = key => `var(--${baseName}${key})`
  const cssCalc = (...args) => `calc(${args.join(' ')})`
  const cssHsl = arr => `hsl(${arr.join(', ')})`

  Object.entries(toHSL).forEach(e => {
    styles.push(cssCustomName(e[0], e[1]))
  })

  if (baseName) {
    styles.push(`--${kebabCase(name)}: hsl(var(--${baseName}-hsl));`)
    styles.push(
      `--${kebabCase(name)}-darken: ${cssHsl([
        customVarName('h'),
        customVarName('s'),
        cssCalc(customVarName('l'), '-', 'var(--darknessTransform)')
      ])};`
    )
    styles.push(
      `--${kebabCase(name)}-lighten: ${cssHsl([
        customVarName('h'),
        customVarName('s'),
        cssCalc(customVarName('l'), '+', 'var(--lightnessTransform)')
      ])};`
    )
  }

  return styles.join('\n')
}

const RootStyles = () => {
  const themeColors = Object.entries(config.theme.color).map(e => hslTheme(e[1], e[0] + 'Color'))

  return (
    <Global
      styles={css`
        :root {
          --lightnessTransform: 25%;
          --darknessTransform: 20%;
          ${themeColors.join('\n')}
          --a: 1;
          --pre-background: #061c2f;

          --primary-color-rgb: 56, 128, 255;

          --light: #f5f7fa;
          --pre-border-color: var(--line-rule-color);
          --background: white;
          --code-background: #f5f7fa;
          --code-color: var(--text-color--dark);

          --line-rule-color: #edf2f6;
          --offset-background: #fdfdff;
          --offset-background--dark: #f7f7ff;
          --text-color: #383838;
          --text-color--darker: #24282e;
          --text-color--dark: #020814;
          --text-color--lighter: #abb2bf;
          --text-color--light: #73849a;
          --page-padding: 3rem;

          --font-monospace: 'SFMono-Regular', 'Roboto Mono', Consolas, 'Liberation Mono', Menlo,
            Courier, monospace;
          --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
            Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          --font-serif: 'Adobe Caslon', Georgia, Times, 'Times New Roman', serif;
          --heading-font-family: var(--font-sans);
        }
      `}
    />
  )
}

export default RootStyles
