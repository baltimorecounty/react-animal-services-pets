import React from "react";
import PropTypes from "prop-types";

const List = props => {
  return <p>Test</p>;
};

List.propTypes = {
  renderItem: PropTypes.func,
  dataSource: PropTypes.array
};

List.defaultProps = {
  dataSource: []
};

export default List;
