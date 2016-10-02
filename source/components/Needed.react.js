var React = require('react');
var NeededItem = require('./NeededItem.react.js');
var CollectionStore = require('../stores/CollectionStore');


var Needed = React.createClass({
	handleItemDone: function (item) {
		this.props.onAddItemToCompleted(item);
	},
	render: function () {
        var showItems = [];

		for (var key in this.props.items) {

			showItems.push(<NeededItem itemText={key} key={key} onAddItemDone={this.handleItemDone}/>);
		}

		return (
			<div className="list-group need-list">
				<div className="list-group-item h4 active">
					Needed
				</div>
				{showItems}
			</div>
		);
	}
});

module.exports = Needed;
