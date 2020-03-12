import styled from 'styled-components';
import Link from 'next/link'

const Tags = styled.div`
  margin: 0.4rem 0;
  a {
    padding: 2px 4px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: var(--font-sans);
    margin: 0 0.25rem;
    color: var(--primary-color-lighten);
    white-space:pre;
  }
  .fas {
    color: hsl(var(--primary-color-hsl), 0.75);
  }
`;

const index = ({tags, children, ...rest}) => {
  return (
    <Tags {...rest}>
      {children}
      {tags.map((e) => (
        <Link href={'/' + e.replace(/\s/g, '-')} key={e} {...rest}>
          <a>{e}</a>
        </Link>
      ))}
    </Tags>
  )
}
export default index;
