import routes from '../routes.json'
import Link from 'next/link'
import config from '../blog.config'
import styled from 'styled-components'

export const Count = styled.span`
  font-size: 0.8em;
  margin-left: 0.2em;
  color: #aaa;
`

const TagCount = (props) => {
  return (
    <span className='tag-count'>
      <Count>({props.count})</Count>
    </span>
  )
}

const TagsList = (props) => {
  const tags = {}

  routes.forEach((e) => {
    e.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag] = tags[tag] + 1
      } else {
        tags[tag] = 1
      }
    })
  })

  return (
    <ul {...props} style={{ borderBottom: '2px solid #ddd', paddingBottom: '1rem' }}>
      <li>
        <Link href='/'>
          <a>all</a>
        </Link>
        <TagCount count={routes.length} />
      </li>
      {Object.entries(tags)
        .sort((a, b) => b[1] - a[1])
        .map((e) => (
          <li key={e[0]}>
            <Link href={config.dynamic.tag} as={'/' + e[0].replace(/\s/g, '-')}>
              <a>{e[0]}</a>
            </Link>
            <Count>({e[1]})</Count>
          </li>
        ))}
    </ul>
  )
}

export default TagsList
