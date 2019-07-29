import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { dataSource = [], renderItem = () => {} } = props;
  return (
    <div className="list">
      {dataSource.map(item => (
        <div className="list-item">{renderItem(item)}</div>
      ))}
    </div>
  );
};

List.propTypes = {
  renderItem: PropTypes.func,
  dataSource: PropTypes.array
};

export default List;
