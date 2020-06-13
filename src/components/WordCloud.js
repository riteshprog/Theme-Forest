import React, { useState } from 'react'
import { TagCloud } from 'react-tagcloud'

const defaultData = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular.js', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'NPM', count: 11 },
]

export default () => {
  const [minSize, setMinSize] = useState(50)
  const [maxSize, setMaxSize] = useState(15)
  const [data, setData] = useState(defaultData)
  const [randomColor, setRandomColor] = useState(true)
  const [shuffle, setShuffle] = useState(true)
  return (
    <div className="chart-data">
      <TagCloud
        width={'500px'}
        height={'500px'}
      
        minSize={minSize}
        maxSize={maxSize}
        tags={data}
        shuffle={shuffle}
        disableRandomColor={!randomColor}
        className="simple-cloud"
        onClick={tag => {
          const value = prompt('Edit tag value', tag.value)
          if (value == null) {
            return
          }
          const newTag = { value, count: tag.count }
          const newData = data.map(t => {
            if (t.value === tag.value) {
              return newTag
            }
            return t
          })
          setData(newData)
        }}
      />
    </div>
  )
}