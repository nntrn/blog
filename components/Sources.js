import styled from 'styled-components'

const Sources = styled.div`
  margin: 4rem 0;
`

const List = styled.ul`
  margin: 1rem 0;
  width: 20vw;
`

export default ({ title = 'Source', sources, ...props }) => {
  return (
    <Sources {...props}>
      <h3>
        {title}
        {sources.length > 1 ? 's' : ''}:
      </h3>
      <List>
        {sources.map((link) => (
          <li key={link}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </List>
    </Sources>
  )
}
