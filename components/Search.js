import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Fuse from 'fuse.js'

import routes from '../routes.json'

const Searchlist = styled.div`
  position: relative;
  width: 300px;
  input {
    padding: 5px 10px;
    border: 3px solid var(--text-color--dark);
    font-size: inherit;
  }
  .list {
    position: absolute;
    z-index: 1000;
    top: 0;
    background: white;
    margin-top: 2.6rem;
    max-height: 60vh;
    overflow: scroll;
    box-shadow: inset 0 0 0px 3px var(--text-color--dark);
    width: 300px;

    .list-item {
      padding: 0.5rem;
      font-family: var(--font-sans);
      font-weight: 400;
      font-size: 0.7em;
      line-height: 1.2;
    }
    a {
      box-shadow: none;
      padding: 0;
      font-family: var(--font-serif);
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`

const Search = props => {
  const [ list, setList ] = React.useState([])
  const [ value, setValue ] = React.useState([])

  const handleChange = event => {
    setValue(event.target.value)
    setList(searchPosts(event.target.value))
  }

  return (
    <Searchlist id='searchlist'>
      <input
        type='search'
        id='search'
        autoCorrect='off'
        autoComplete='off'
        spellCheck='false'
        onChange={e => handleChange(e)}
        value={value}
      />
      <div className='list'>
        {list.map(item => {
          return (
            <div className='list-item'>
              <h4>
                <Link href={item.url}>{item.title}</Link>
              </h4>
              <div className='description'>{item.description || item.content}</div>
            </div>
          )
        })}
      </div>
    </Searchlist>
  )
}

export default Search

export const searchPosts = searchString => {
  var options = {
    keys: [ 'title', 'tags' ]
  }
  var fuse = new Fuse(routes, options)
  return fuse.search(searchString)
}
