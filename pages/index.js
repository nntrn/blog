import { useRouter } from 'next/router'
import Tags from '../components/Tags'
import Page from '../components/Page'
import Link from 'next/link'

import routes from '../routes.json'

const Home = props => {
  const router = useRouter()
  const content = routes

  return (
    <Page>
      <>
        <h1></h1>
        <div>
          {content.map((e, i) => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }} key={e.title + i}>
              <h3>
                <Link href={e.url}>
                  <a>{e.title}</a>
                </Link>
              </h3>
              <Tags tags={e.tags} />
            </div>
          ))}
        </div>
        <hr />
        <span>length: {content.length}</span>
      </>
    </Page>
  )
}

export default Home
