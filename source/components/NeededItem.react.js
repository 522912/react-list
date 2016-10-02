var React = require('react');

var NeededItem = React.createClass({
	onItemCompleted : function(e) {
		var inputValue = e.target.value;

		this.props.onAddItemDone(inputValue);
	},
	render : function() {

		return (
			<div className="list-group-item">
				<input onChange={this.onItemCompleted} type="checkbox" value={this.props.itemText}/> {this.props.itemText}
			</div>
		);
	}
});

module.exports = NeededItem;
