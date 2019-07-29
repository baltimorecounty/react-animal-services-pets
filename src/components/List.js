import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
	const { dataSource = [], renderItem = () => {}, itemKey = '' } = props;
	return (
		<div className="list">
			{dataSource.map((item) => (
				<div key={item[itemKey]} className="list-item">
					{renderItem(item)}
				</div>
			))}
		</div>
	);
};

List.propTypes = {
	/** Function to render list item. */
	renderItem: PropTypes.func,
	/** Data to be displayed for the list. */
	dataSource: PropTypes.array,
	/** Property name of the key makes each item unique. */
	itemKey: PropTypes.string.isRequired
};

export default List;
