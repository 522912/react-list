var React = require('react');
var CompletedItem = require('./CompletedItem.react.js');
var CollectionStore = require('../stores/CollectionStore');

var Completed = React.createClass({
	handleRemovingItem: function (item) {
		this.props.onRemoveItem(item);
	},
	render: function () {
		var showItems = [];

		for (var key in this.props.items) {

			showItems.push(<CompletedItem itemText={key} key={key} onAddItemRemoved={this.handleRemovingItem} />);
		}
		return (
			<div className="list-group need-list">
				<div className="list-group-item h4 active">
					Completed
				</div>
				{showItems}
			</div>
		);
	}
});

module.exports = Completed;
