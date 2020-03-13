import Link from 'next/link'
import styled from 'styled-components'

import Search from './Search'

const style = {
  zIndex: 1000,
  background: 'white',
  padding: '1rem 0',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap'
}

const PostLink = styled.a`
  background: var(--background);
  padding: 5px 10px;
  color: var(--text-color--dark);
  font-family: var(--font-sans);
  font-weight: 400;
  text-transform: uppercase;
  --primary-color-800: var(--primary-color-400);
  box-shadow: inset 0 0 0 3px black;
  white-space: pre;

  &:hover {
    background: var(--text-color--dark);
    color: var(--background);
    box-shadow: inset 0 0 0 3px black;
  }
`

export default ({ routes, ...rest }) => {
  return (
    <nav style={style} {...rest}>
      {Object.keys(routes).map(e => (
        <Link href={routes[e]} key={e}>
          <PostLink style={{ marginRight: '.5rem' }}>{e}</PostLink>
        </Link>
      ))}
      <Search />
    </nav>
  )
}
