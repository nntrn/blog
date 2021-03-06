import Link from 'next/link'
import Page from '../components/Page'
import Tags from '../components/Tags'

import POSTS_JSON from '../summary.json'

const Home = () => {
  return (
    <Page>
      {POSTS_JSON.map((post) => (
        <div key={post.stat.created} className='card'>
          <h2>
            <Link href='/post/[...slug]' as={post.url}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </h2>
          <div className='card-container'>{post.frontmatter.description}</div>
          <Tags tags={post.frontmatter.tags} />
        </div>
      ))}
    </Page>
  )
}

export default Home
