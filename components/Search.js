import React from 'react'
import Link from 'next/link'
import { SearchList } from '../src/styles'
import routes from '../routes.json'
import config from '../blog.config'

import { simpleMarkdownToHTML } from './utils/mark'

// https://stackoverflow.com/a/27412445/7460613
var fuzzy = function (items, key) {
  return function (query) {
    var words = query.toLowerCase().split(' ')
    return items.filter(function (item) {
      var normalizedTerm = item[key].toLowerCase()
      return words.every(function (word) {
        return normalizedTerm.indexOf(word) > -1
      })
    })
  }
}

const postList = fuzzy(
  routes.map((e) => ({
    ...e,
    description: e.description,

    search: [e.title, e.description].join(' '),
  })),
  'search'
)

const Search = (props) => {
  const [list, setList] = React.useState(routes)
  const [value, setValue] = React.useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
    setList(postList(event.target.value))
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
        onChange={(e) => handleChange(e)}
        value={value}
        required={true}
      />

      <div className='list'>
        {list.map((item) => {
          let re = new RegExp(`(${value})`, 'gi')

          return (
            <div className='list-item' key={item.url}>
              <Link href={config.dynamic.post} as={item.url}>
                <a>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: simpleMarkdownToHTML(item.title.replace(re, '<mark>$1</mark>')),
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: simpleMarkdownToHTML(item.description.replace(re, '<mark>$1</mark>')),
                    }}
                  />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </SearchList>
  )
}

export default Search
