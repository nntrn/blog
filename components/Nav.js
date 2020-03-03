import Link from 'next/link'

const Nav = ({ routes, ...rest }) => {
  return (
    <nav {...rest}>
      {Object.keys(routes).map(e => (
        <Link href={routes[e]} key={e}>
          <a style={{marginRight: '.3rem'}}>{e}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
