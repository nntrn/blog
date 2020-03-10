import styled from 'styled-components';

const Tags = styled.div`
  margin: 0.4rem 0;
  span {
    background: var(--code-background);
    border-radius: 3px;
    padding: 2px 4px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: var(--font-sans);
    margin: 0 0.25rem;
    color: var(--text-color--lighter);
  }
  .fas {
    color: var(--text-color--lighter)
  }
`;

const index = ({tags, ...rest}) => {
  return (
    <Tags>
      <i className="fas fa-tags fa-sm"></i>
      {tags.map((e) => (
        <span key={e} {...rest}>
          {e}
        </span>
      ))}
    </Tags>
  )
}
export default index;
