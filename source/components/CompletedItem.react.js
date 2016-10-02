var React = require('react');

var CompletedItem = React.createClass({
	onItemRemoved : function(e) {
		event.preventDefault();
		var inputValue = e.target.id;

		this.props.onAddItemRemoved(inputValue);
	},
	render : function() {
		return (
			<div className="list-group-item">
				<button onClick={this.onItemRemoved} id={this.props.itemText} className="btn btn-default">X</button> {this.props.itemText}
			</div>
		);
	}
});

module.exports = CompletedItem;
