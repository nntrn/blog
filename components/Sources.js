import styled from 'styled-components'

const Sources = styled.div`
  margin: 4rem 0;
  font-family: var(--font-sans);
  ul {
    margin: 1rem 0;
  }
`

export default ({ sources, ...props }) => {
  return (
    <Sources>
      <h3>Source{sources.length > 1 ? 's' : ''}:</h3>
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

//   <div className="sources">
//   <h3>Source{content.frontmatter.sources.length > 1 ? 's' : ''}:</h3>
//   <ul>
//     {content.frontmatter.sources.map((e) => (
//       <li key={e}>{e}</li>
//     ))}
//   </ul>
// </div>
