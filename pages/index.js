import Link from 'next/link'

// import { Markdown } from 'grommet'

import Page from '../components/Page'

import POSTS_JSON from '../summary.json'

const Home = () => {
  return (
    <Page>
      {POSTS_JSON.map(post => (
        <div key={post.stat.created}>
          <Link href="/posts/[...slug]" as={post.url}>
            <a>
              <h2>{post.frontmatter.title}</h2>
            </a>
          </Link>
          <div>{post.frontmatter.description}</div>
        </div>
      ))}
    </Page>
  )
}

export default Home
