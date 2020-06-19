import { useRouter } from 'next/router'
import Tags from '../components/Tags'
import Page from '../components/Page'
import Link from 'next/link'

import routes from '../routes.json'
import config from '../blog.config'

const Tag = (props) => {
  const router = useRouter()
  const content = routes.filter((posts) =>
    posts.tags.includes(router.asPath.replace(/\//g, '').replace(/-/g, ' '))
  )

  const curPage = router.asPath.replace('/', '')
  return (
    <Page
      title={curPage}
      description={`tagged posts for ${curPage}`}
      url={[config.url, router.asPath].join('')}
    >
      {curPage.length > 2 && (
        <h1>
          <i
            className='fas fa-tag fa-xs'
            style={{
              color: 'hsl(var(--primary-color-hsl), 1)',
              marginRight: '.5rem',
            }}
          ></i>
          <span>{curPage}</span>
        </h1>
      )}

      {content.map((e, i) => (
        <div className='card' key={e.url}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            }}
          >
            <h3>
              <Link href={config.dynamic.post} as={e.url}>
                <a>{e.title}</a>
              </Link>
            </h3>
            <Tags tags={e.tags} />
          </div>
          <div>{e.description}</div>
        </div>
      ))}

      <hr />
      <span>length: {content.length}</span>
    </Page>
  )
}

export default Tag
