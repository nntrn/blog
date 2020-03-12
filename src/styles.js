import { css } from '@emotion/react'
import styled from '@emotion/styled'
import RootStyles from './root'
import media from './media'

export const globalStyles = <RootStyles />

export const style = {
  nav: css`
    max-width: 100%;
    flex-grow: 1;
    font-family: var(--font-monospace);
    border-right: 3px solid var(--text-color--dark);
    padding: 0.25rem 1.25rem;

    h4 {
      display: block;
      border-bottom: 3px dotted white;
      color: hsl(var(--primary-color-hsl), 0.5);
    }
  `,
  section: css`
    width: 80%;
    background: hsl(var(--primary-color-hsl), 0.5);
    background: white;
    padding: 1.25rem;
    border-color: hsl(var(--primary-color-hsl), 0.5);
    border-radius: 3px;
  `,
  search: css`
    --search-width: 30vw;
    position: relative;
    width: var(--search-width);
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    align-self: flex-end;
    width: 100%;

    input {
      padding: 5px 10px;
      border: 0px solid transparent;
      font-size: inherit;
      width: var(--search-width);
      outline: 0;
      background: var(--light);
      box-shadow: inset 0 0px 0 0 transparent;
      transition: box-shadow 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &:focus {
        background: white;
        box-shadow: inset 0 -3px 0 0 var(--color-contrast-higher);

        & + .list {
          max-height: 60vh;
          height: fit-content;
          overflow: scroll;
          box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.13);
        }
      }
    }
    .list {
      position: absolute;
      z-index: 1000;
      top: 0;
      background: white;
      margin-top: 2.6rem;
      height: 0;
      max-height: 0;
      overflow: hidden;
      width: var(--search-width);
      border-radius: 4px;
      // box-shadow: inset 0 -3px 8px 0px rgba(0, 0, 0, 0.13);

      &:hover {
        max-height: 60vh;
        height: fit-content;
        overflow: scroll;
      }

      .list-item {
        padding: 0.5rem;
        font-family: var(--font-sans);
        font-weight: 400;
        line-height: 1.2;
        border-bottom: 2px solid #222;

        .description {
          font-size: 0.8em;
        }
        mark {
          padding: 0;
          color: black;
          background-color: yellow;
        }
      }
      a {
        box-shadow: none;
        padding: 0;
        font-weight: 600;
        text-transform: capitalize;
      }
    }
  `
}

export const TagList = styled('nav')`
  ${style.nav};
  ${media.mobile`
  display:none;
`};
`

export const Section = styled('section')`
  ${style.section};
  ${media.mobile`
  width:100%;
`};
`

export const SearchList = styled('div')`
  ${style.search};
`
