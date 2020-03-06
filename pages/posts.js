import Link from 'next/link'
import Page from '../components/Page'
import Container from '../components/Container'

import POSTS_JSON from '../summary.json'

const Home = () => {
  return (
    <Page>
      <Container component="main">
      {POSTS_JSON.map(post => (
        <div key={post.stat.created} className="card">
          <Link href="/posts/[...slug]" as={post.url}>
            <h2>
              <a>{post.frontmatter.title}</a>
            </h2>
          </Link>
          <div className="card-container">{post.frontmatter.description}</div>
        </div>
      ))}
      </Container>
    </Page>
  )
}

export default Home
