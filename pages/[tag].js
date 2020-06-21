import { useRouter } from 'next/router'

import Page from '../components/Page'
import PostItem from '../components/PostItem'

import routes from '../routes.json'
import config from '../blog.config'

const Tag = () => {
  const router = useRouter()
  const content = routes.filter((posts) =>
    posts.tags.includes(router.asPath.replace(/\//g, '').replace(/-/g, ' '))
  )

  const curPage = router.asPath.replace('/', '')
  return (
    <Page
      title={curPage}
      description={`tagged posts for ${curPage}`}
      url={[ config.url, router.asPath ].join('')}
    >
      {curPage.length > 2 && (
        <h1>
          <i className='fas fa-tag fa-xs'></i>
          <span style={{padding: '0 .5rem'}}>{curPage}</span>
        </h1>
      )}

      {content.map(e => (
        <PostItem 
          key={e.url} 
          href={config.dynamic.post} 
          url={e.url} tags={e.tags} 
          description={e.description} 
          title={e.title}/>
      ))}

      <hr />
      <span>length: {content.length}</span>
    </Page>
  )
}

export default Tag
