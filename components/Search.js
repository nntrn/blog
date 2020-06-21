import React from 'react'
import Link from 'next/link'
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
    search: [ e.title, e.description ].join(' '),
  })),
  'search'
)

const Search = (props) => {
  const [ list, setList ] = React.useState(routes)
  const [ value, setValue ] = React.useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
    setList(postList(event.target.value))
  }

  return (
    <div id='searchlist'>
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
      <style jsx>{`
      #searchlist {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        align-self: flex-end;
        width: 100%;
        margin-bottom: 1rem;
        flex-grow: 1;
        font-weight: 600;
        font-size: 0.9em;
        background: transparent;
      }
      input {
        font-size: 16px;
        outline: 0;
        box-shadow: inset 0 0px 0 0 transparent;
        transition: box-shadow 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border: 3px solid #28a745;
      }
      input:focus {
        background:#28a745;
        color: #fff;
      }
      input:focus + .list {
        max-height: 60vh;
        height: fit-content;
        overflow: scroll;
        box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.1);
      }
      .list {
        position: absolute;
        z-index: 1000;
        top: 0;
        background: #fff;
        margin-top: 2rem;
        height: 0;
        max-height: 0;
        overflow: hidden;
      }
      .list:hover {
        max-height: 60vh;
        height: fit-content;
        overflow: scroll;
      }
      .list-item {
        padding: 0.5rem;
        font-weight: 400;
        line-height: 1.2;
        border: 3px solid #28a745;
        border-bottom-width: 1.5px;
        border-top-width: 1.5px;
        background: #fff;
      }
      .list-item:hover {
        background:#34d05822;
      }
      .description {
        font-size: 0.8em;
      }
      a {
        box-shadow: none;
        padding: 0;
        color: #222;
      }
  `}</style>
    </div>
  )
}

export default Search
