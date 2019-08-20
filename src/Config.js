import React, { useState } from 'react';
import './Config.css';

function Config({ onChange }) {
  const [config, setConfig] = useState({
    columnCount: "2",
    fontSize: 30,
    grayKanji: true,
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
            onChange={e => setConfig({ ...config, fontSize: e.target.value })}
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
            onChange={e => setConfig({ ...config, columnCount: e.target.value })}
            value={config.columnCount}
          >
            {["1", "2", "3", "4"].map(columnCount => (
              <option key={columnCount} value={columnCount}>
                {columnCount}
              </option>
            ))}
          </select>
        </label>
      </p>
      {[
        { key: "shuffle", name: "shuffle" },
        { key: "removeDuplicates", name: "remove duplicates" },
        { key: "middleLine", name: "middle line" },
        { key: "grayKanji", name: "gray kanji" },
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



