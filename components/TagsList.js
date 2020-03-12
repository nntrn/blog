import routes from '../routes.json'
import Link from 'next/link'

const TagsList = props => {
  const tags = {}

  routes.forEach(e => {
    e.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag] = tags[tag] + 1
      } else {
        tags[tag] = 1
      }
    })
  })

  return (
    <ul {...props}>
      <li>
        <Link href='/'>
          <a>all</a>
        </Link>
      </li>
      {Object.keys(tags).map(e => (
        <li key={e}>
          <Link href={'/' + e.replace(/\s/g, '-')}>
            <a>{e}</a>
          </Link>
          <span hidden>{tags[e]}</span>
        </li>
      ))}
    </ul>
  )
}

export default TagsList
