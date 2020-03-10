import styled from 'styled-components'

const Sources = styled.div`
  margin: 4rem 0;
  font-family: var(--font-sans);
  ul {
    margin: 1rem 0;
  }
`

export default ({ title = 'Source', sources, ...props }) => {
  return (
    <Sources {...props}>
      <h3>{title}{sources.length > 1 ? 's' : ''}:</h3>
      <ul>
        {sources.map(link => (
          <li key={link}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </Sources>
  )
}
