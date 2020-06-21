import Tags from './Tags'
import Link from 'next/link'

const PostItem = (props)=>{

  return (
    <div className="card">
      <h3>
        <Link href={props.href} as={props.url}>
          <a>{props.title}</a>
        </Link>
      </h3>
      <p>{props.description}</p>
      <Tags tags={props.tags} />
      <style jsx>{`
        .card{ line-height: 1.3 }
        .card p{ margin:0; }
      `}
      </style>
    </div>
  )
}
export default PostItem
