import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { dataSource, renderItem } = props;
  return <div className="list">{dataSource.map(renderItem)}</div>;
};

List.propTypes = {
  renderItem: PropTypes.func,
  dataSource: PropTypes.array
};

List.defaultProps = {
  renderItem: () => {},
  dataSource: []
};

export default List;
