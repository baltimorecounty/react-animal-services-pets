import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { dataSource = [], renderItem = () => {}, itemKey = '' } = props;
  return (
    <div className="list">
      {dataSource.map(item => (
        <div key={item[itemKey]} className="list-item">{renderItem(item)}</div>
      ))}
    </div>
  );
};

List.propTypes = {
  renderItem: PropTypes.func,
  dataSource: PropTypes.array
};

export default List;
