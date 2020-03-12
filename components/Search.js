import React from 'react'
import Link from 'next/link'

import Fuse from 'fuse.js'

import { SearchList } from '../src/styles'
import routes from '../routes.json'

const routes2 = routes.map(e => ({
  ...e,
  description: e.description.replace(/`(\S+)`/g, '<code>$1</code>')
}))

const Search = props => {
  const [ list, setList ] = React.useState([])
  const [ value, setValue ] = React.useState([])

  const handleChange = event => {
    setValue(event.target.value)
    setList(searchPosts(event.target.value))
  }

  return (
    <SearchList id='searchlist'>
      <input
        type='search'
        id='search'
        placeholder='search posts'
        autoCorrect='off'
        autoComplete='off'
        spellCheck='false'
        onChange={e => handleChange(e)}
        value={value}
      />
      <div className='list'>
        {list.map(item => {
          return (
            <div className='list-item' key={item.url}>
              <h4>
                <Link href={item.url}>{item.title}</Link>
              </h4>
              <div
                className='description'
                dangerouslySetInnerHTML={{
                  __html: item.description.replace(
                    new RegExp(`(${value})`, 'gi'),
                    '<mark>$1</mark>'
                  )
                }}
              />
            </div>
          )
        })}
      </div>
    </SearchList>
  )
}

export default Search

export const searchPosts = searchString => {
  var options = {
    keys: [ 'title', 'tags', 'description' ]
  }
  var fuse = new Fuse(routes2, options)
  return fuse.search(searchString)
}
