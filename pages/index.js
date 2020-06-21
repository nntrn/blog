import Tags from '../components/Tags'
import Page from '../components/Page'
import Link from 'next/link'

import config from '../blog.config'
import routes from '../routes.json'

const Home = (props) => {
  const content = routes

  return (
    <Page>
      {content.map((e, i) => (
        <div key={e.title + i} className="card">
          <h3>
            <Link href={config.dynamic.post} as={e.url}>
              <a>{e.title}</a>
            </Link>
          </h3>
          <p>{e.description}</p>
          <Tags tags={e.tags} />
        </div>
      ))}

      <hr />
      <span>length: {content.length}</span>

      <style jsx>{`
        .card{line-height:1.3}
        .card p{
          margin:0; 
        }
      `}
      </style>
    </Page>
  )
}

export default Home
