import Page from '../../components/Page'
import PostItem from '../../components/PostItem'
import POSTS_JSON from '../../summary.json'

import config from '../../blog.config'

const Home = () => {
  return (
    <Page>
      {POSTS_JSON.map((e) => (
        <PostItem 
          key={e.url} 
          href={config.dynamic.post}
          url={e.url} 
          tags={e.tags} 
          description={e.description} 
          title={e.title}/>
      ))}
    </Page>
  )
}

export default Home
