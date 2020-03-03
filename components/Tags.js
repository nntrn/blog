import styled from 'styled-components'

const Tags = styled.div`
  span {
    background: var(--code-background);
    border-radius: 3px;
    padding: 2px 4px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: sans-serif;
    margin: 0 0.25rem;
    color: var(--text-color--lighter);
  }
  .fas {
    color: var(--primary-color-500);
  }
`

const index = ({ tags, ...rest }) => {
  return (
    <Tags>
      <i className="fas fa-tags fa-sm"></i>
      {tags.map(e => (
        <span key={e} { ...rest }>{e}</span>
      ))}
    </Tags>
  )
}
export default index
