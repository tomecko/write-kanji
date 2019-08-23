import React from 'react';

import { Text } from './Text';

export function Texts({ config, text }) {
  return (
    <p
      className={`output-line ${
        config.middleLine ? "output-middle-line" : ""} ${
        config.rotate ? "output-rotate" : ""}`}
    >
      <Text className="output-example" text={text} />
      {config.grayKanjiCount
        ? Array(config.grayKanjiCount).fill().map((_, i) => (
          <Text className="output-example output-example-gray" text={text} key={i} />
        ))
        : ''
      }
    </p>
  );
}
