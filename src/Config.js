import React, { useState } from 'react';
import './Config.css';

function Config({ onChange }) {
  const [config, setConfig] = useState({
    columnCount: "2",
    fontSize: "medium",
    shuffle: true,
    removeDuplicates: true,
    horizontalLine: true,
  });
  onChange(config);

  return (
    <div className="config" title={ JSON.stringify(config, null, 2) }>
      <p className="config-item">
        <button onClick={window.print} className="print">print</button>
      </p>
      <p className="config-item">
        font size:
        {["small", "medium", "large"].map(fontSize => (
          <label className="config-item-label" key={fontSize}>
            <input
              onChange={e => setConfig({ ...config, fontSize: e.target.value })}
              type="radio"
              name="fontSize"
              value={fontSize}
              checked={fontSize === config.fontSize}
            />
            {fontSize}
          </label>
        ))}
      </p>
      <p className="config-item">
        columns count:
        {["1", "2", "3"].map(columnCount => (
          <label key={columnCount}>
            <input
              onChange={e => setConfig({ ...config, columnCount: e.target.value })}
              type="radio"
              name="columnCount"
              value={columnCount}
              checked={columnCount === config.columnCount}
            />
            {columnCount}
          </label>
        ))}
      </p>
      {[
        { key: "shuffle", name: "shuffle" },
        { key: "removeDuplicates", name: "remove duplicates" },
        { key: "horizontalLine", name: "horizontal line" },
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



