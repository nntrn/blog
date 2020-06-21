import Link from 'next/link'
import config from '../blog.config'

const Tags = ({ tags, children, ...rest }) => {
  return (
    <div className='tags' {...rest}>
      {children}
      {tags.map((e, i) => (
        <Link href={config.dynamic.tag} as={'/' + e.replace(/\s/g, '-')} key={e + i}>
          <a style={{color: '#aaa'}}>{e}</a>
        </Link>
      ))}
      <style jsx>{`
        font-size: 0.85em;
        text-transform: uppercase;
        margin-right: 0.5rem;
        border-radius: 41px;
        white-space: pre-line;
        word-break:keep-all;
      a{
        display:inline-block;
      }
  `}</style>
    </div>
  )
}
export default Tags
