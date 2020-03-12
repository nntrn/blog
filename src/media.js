import { css } from '@emotion/react'

const sizes = {
   xl: 1000,
   l: 900,
   m: 700,
   sm: 400,
   mobile: 768,
   tablet: 769,
   desktop: 1024,
   widescreen: 1216,
   fullhd: 1408
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media screen and (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})
