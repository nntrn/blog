import styled, { css } from 'styled-components'

import media from './media'

export const theme = {
  main: '#fff',
  bg: {
    accent: '#f6f8fa',
    light: '#fff',
  },
  color: {
    link: '#0366d6',
    body: '#24292e',
  },
  border: {
    accent: '#e1e4e8',
    darker: '#d1d5da',
    light: '#fff',
  },
}

const style = {
  nav: css`
    flex-grow: 1;
    padding: 1rem 1.25rem;
    margin: 1rem 0;
    font-size: 14px;
    display: block;
    }
  `,
  section: css`
    padding: 1.25rem;
    margin: 'auto';
    flex-grow: 3;
  `,
  search: css`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    align-self: flex-end;
    width: 100%;
    margin-bottom: 1rem;
    flex-grow: 1;
    font-weight: 600;
    font-size: 0.9em;
    background: transparent;

    input {
      font-size: 16px;
      outline: 0;
      box-shadow: inset 0 0px 0 0 transparent;
      transition: box-shadow 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      border-bottom: 5px solid ${theme.border.accent};

      &:focus {
        background: #fff;
        border-bottom: 5px solid ${theme.border.darker};

        & + .list {
          max-height: 60vh;
          height: fit-content;
          overflow: scroll;
          box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .list {
      position: absolute;
      z-index: 1000;
      top: 0;
      background: ${theme.main};
      margin-top: 2rem;
      height: 0;
      max-height: 0;
      overflow: hidden;

      &:hover {
        max-height: 60vh;
        height: fit-content;
        overflow: scroll;
      }

      .list-item {
        padding: 0.5rem;
        font-weight: 400;
        line-height: 1.2;
        border: 3px solid ${theme.border.accent};
        border-bottom-width: 1.5px;
        border-top-width: 1.5px;
        background: ${theme.main};
        color: ${theme.color.main};

        &:hover {
          background: ${theme.bg.accent};
        }
        code {
          background: ${theme.main};
        }
        .description {
          font-size: 0.8em;
        }
        mark {
          padding: 0;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      a {
        box-shadow: none;
        padding: 0;
      }
    }
  `,
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
