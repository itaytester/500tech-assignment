import React from "react";

const Grid = ({ config, data }) => {

  const renderHeaders = () => {
    return config.map((field) => <th>{field.title}</th>);
  };

  const renderRows = () => {
    return data.map((obj) => {
      return <tr>{renderObjInRow(obj)}</tr>;
    });
  };

  const renderObjInRow = (obj) => {
    return config.map((field) => {
      if (field.hasOwnProperty("component")) {
        const Component = field.component;
        return (
          <td>
            <Component data={obj[field.field]} />
          </td>
        );
      } else {
        return <td>{obj[field.field]}</td>;
      }
    });
  };

  return (
    <table>
      <thead>
        <tr>{renderHeaders()}</tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Grid;
