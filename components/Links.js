import styled from 'styled-components'
import PropTypes from 'prop-types'

const LinkContainer = styled.div`
  margin: 2rem 0;
`

const List = styled.ul`
  margin: 1rem 0;
`

const Links = ({ title = 'Link', links = [], ...props }) => {
  if (links.length < 1) {
    return ''
  }

  return (
    <LinkContainer {...props}>
      <h3 id={title}>
        {title}
        {links.length > 1 ? 's:' : ':'}
      </h3>
      <List>
        {links.map((link) => (
          <li key={link}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </List>
    </LinkContainer>
  )
}

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
}

export default Links
