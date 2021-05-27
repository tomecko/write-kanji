import React from 'react';

import { Text } from './Text';

export function Texts({ config, text }) {
  const grayKanjiColorHex = config.grayKanjiColor &&
    config.grayKanjiColor.replace('(', '|').replace(')', '|').split('|')[1].trim();
  return (
    <p
      className={`output-line ${
        config.middleLine ? "output-middle-line" : ""} ${
        config.rotate ? "output-rotate" : ""}`}
    >
      <Text className="output-example" text={text} />
      {config.grayKanjiCount
        ? Array(config.grayKanjiCount).fill().map((_, i) => (
          <Text
            className="output-example"
            text={text}
            style={{ color: grayKanjiColorHex }}
            key={i}
          />
        ))
        : ''
      }
    </p>
  );
}
