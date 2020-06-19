import styled from 'styled-components'
import Link from 'next/link'
import config from '../blog.config'

const Tags = styled.div`
  margin: 0;
`

const index = ({ tags, children, ...rest }) => {
  return (
    <Tags className='tags' {...rest}>
      {children}
      {tags.map((e, i) => (
        <Link href={config.dynamic.tag} as={'/' + e.replace(/\s/g, '-')} key={e + i}>
          <a className='tag'>{e}</a>
        </Link>
      ))}
    </Tags>
  )
}
export default index
