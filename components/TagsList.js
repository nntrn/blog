import routes from '../routes.json'
import Link from 'next/link'
import config from '../blog.config'

const TagCount = (props) => {
  return (
    <span className='tag-count'>
      {`(${props.count})`}
      <style jsx>{`
        font-size: 0.8em;
        margin-left: 0.2em;
        color: #aaa;
      `}</style>
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
    <ul {...props}>
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
            <TagCount count={e[1]} />
          </li>
        ))}
      <style jsx>{`
        ul{
          margin:0;
        }`}
      </style>
    </ul>
  )
}

export default TagsList
