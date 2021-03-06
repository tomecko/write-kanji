import React, { useState } from 'react';

import Config from './Config';
import { deduplicatePrimitivesArray, shuffleArray } from './helpers';
import { Texts } from './Texts';

import './App.css';

const getOutput = (config) => (input) => {
  let output = input
    .split('、').join(',')
    .split(',')
    .filter(val => Boolean(val));
  if (config.removeDuplicates) {
    output = deduplicatePrimitivesArray(output);
  }
  if (config.shuffle) {
    output = shuffleArray(output);
  }
  return output;
}

export function App() {
  const [input, setInput] = useState('々,一,丁,七,万,三,上,下,不,中');
  const [config, setConfig] = useState({});
  const output = getOutput(config)(input);

  return (
    <div>
      <header className="no-print">
        <h1>Write Kanji</h1>
        <p>
          Generate and print kanji writing practice worksheets.<br/>
          Works well with items copied from {' '}
          <a href="https://www.wkstats.com:10001/items/joyo">
            https://www.wkstats.com:10001/items/joyo
          </a> or any comma-separated input.
        </p>
      </header>
      <main>
        <div className="no-print">
          <Config onChange={setConfig} />
          <textarea
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="paste comma-separated kanji/vocab"
            rows="10"
          ></textarea>
        </div>
        {input
          ? <div
              className="output"
              style={{ columns: config.columnCount, fontSize: `${config.fontSize}px` }}
            >
            { output.map((text, i) => (
              <Texts config={config} text={text} key={i} />
            )) }
          </div>
          : <p className="output-placeholder">Cool stuff will appear here…</p>}
      </main>
      <footer className="no-print">
        <p>
          Kanji stroke order font:{' '}
          <a href="https://sites.google.com/site/nihilistorguk/">
            https://sites.google.com/site/nihilistorguk/
          </a>
        </p>
      </footer>
    </div>
  );
}
