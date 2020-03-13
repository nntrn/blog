import styled from '@emotion/styled'
import Link from 'next/link'

const Tags = styled.div`
  margin: 0.4rem 0;
  a {
    padding: 2px 6px;
    font-size: 0.8em;
    text-transform: uppercase;
    font-family: var(--font-sans);
    margin-left:0.25rem;
    border: 2px solid hsl(var(--primary-color-hsl), 0.25);
    border-radius: 41px;
    color: var(--primary-color-darken);
    white-space: pre;

    &:hover {
      box-shadow: none;
      background: hsl(var(--primary-color-hsl), 0.15);
    }
  }
  .fas {
    color: hsl(var(--primary-color-hsl), 0.75);
  }
`

const index = ({ tags, children, ...rest }) => {
  return (
    <Tags {...rest}>
      {children}
      {tags.map((e, i) => (
        <Link href={'/' + e.replace(/\s/g, '-')} key={e + i}>
          <a className='tag'>{e}</a>
        </Link>
      ))}
    </Tags>
  )
}
export default index
