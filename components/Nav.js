import config from '../blog.config'
import Link from 'next/link'

const routes = {
  '/': 'Home',
}


const Nav = props => {
  return (
    <nav>
      {Object.keys(routes).map(e => (
        <Link href={e} key={e}>
          <a>{routes[e]}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
