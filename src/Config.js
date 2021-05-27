import React, { useState } from 'react';
import './Config.css';

const GRAY_KANJI_COLORS = [
  'very light gray (#eee)',
  'light gray (#ccc)',
  'gray (#aaa)',
  'dark gray (#777)',
  'very dark gray (#333)',
];

function Config({ onChange }) {
  const [config, setConfig] = useState({
    columnCount: 2,
    fontSize: 30,
    grayKanjiCount: 3,
    grayKanjiColor: GRAY_KANJI_COLORS[1],
    middleLine: true,
    removeDuplicates: true,
    rotate: false,
    shuffle: true,
  });
  onChange(config);

  return (
    <div className="config" title={ JSON.stringify(config, null, 2) }>
      <p className="config-item">
        <button onClick={window.print} className="print">print</button>
      </p>
      <p className="config-item">
        <label className="config-item-label">
          font size:{" "}
          <select
            onChange={e => setConfig({ ...config, fontSize: Number(e.target.value) })}
            value={config.fontSize}
          >
            {[10, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map(fontSize => (
              <option key={fontSize} value={fontSize}>
                {fontSize}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p className="config-item">
        <label className="config-item-label">
          columns:{" "}
          <select
            onChange={e => setConfig({ ...config, columnCount: Number(e.target.value) })}
            value={config.columnCount}
          >
            {[1, 2, 3, 4].map(columnCount => (
              <option key={columnCount} value={columnCount}>
                {columnCount}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p className="config-item">
        <label className="config-item-label">
          gray kanji:{" "}
          <select
            onChange={e => setConfig({ ...config, grayKanjiCount: Number(e.target.value) })}
            value={config.grayKanjiCount}
          >
            {Array(11).fill().map((_, i) => i).map(grayKanjiCount => (
              <option key={grayKanjiCount} value={grayKanjiCount}>
                {grayKanjiCount}
              </option>
            ))}
          </select>
          <select
            onChange={e => {
              setConfig({ ...config, grayKanjiColor: e.target.value })
            }}
            value={config.grayKanjiColor}
          >
            {GRAY_KANJI_COLORS.map(grayKanjiColor => (
              <option key={grayKanjiColor} value={grayKanjiColor}>
                {grayKanjiColor}
              </option>
            ))}
          </select>
        </label>
      </p>
      {[
        { key: "shuffle", name: "shuffle" },
        { key: "removeDuplicates", name: "remove duplicates" },
        { key: "middleLine", name: "middle line" },
        { key: "rotate", name: "rotate" },
      ].map(({ key, name}) => (
        <label className="config-item" key={key}>
          <input
            onChange={e => setConfig({ ...config, [key]: e.target.checked })}
            type="checkbox"
            name={key}
            checked={config[key]}
          />
          {name}
        </label>
      ))}
    </div>
  );
}

export default Config;



