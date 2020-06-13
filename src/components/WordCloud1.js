import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import words from './word1';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

function WordCloud2() {
  return (
    <div>
        <div style={resizeStyle}>
          <ReactWordcloud width={500} words={words} />
        </div>
     
    </div>
  );
}
export default WordCloud2;