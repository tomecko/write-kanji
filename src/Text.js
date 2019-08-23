import React from 'react';

export function Text({ className, text }) {
  return (
    <span>
      {text.split('').map((letter, i) => (
        <span className={className} key={i}>{ letter }</span>
      ))}
    </span>
  );
}
