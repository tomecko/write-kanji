import React from 'react';

export function Text({ className, style, text }) {
  return (
    <span style={style}>
      {text.split('').map((letter, i) => (
        <span className={className} key={i}>{ letter }</span>
      ))}
    </span>
  );
}
