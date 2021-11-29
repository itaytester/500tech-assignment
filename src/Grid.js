import React from "react";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((configObj) => (
          <th key={configObj.field}>{configObj.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((obj) => (
        <tr key={obj[config[0].field]}>
          {config.map((configObj) =>
            configObj.component ? (
              <td key={configObj.field}>
                <configObj.component data={obj[configObj.field]} />
              </td>
            ) : (
              <td key={configObj.field}>{obj[configObj.field]}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
