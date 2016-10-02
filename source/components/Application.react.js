var React = require('react');
var CollectionControls = require('./CollectionControls.react');
var Needed = require('./Needed.react');
var Completed = require('./Completed.react');

var CollectionActionCreators = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

var Application = React.createClass({
	getInitialState: function () {
		return {
			needed: CollectionStore.getCollectionNeeded(),
			completed: CollectionStore.getCollectionCompleted()
		};
	},
	handleItemAdd : function(item) {
		CollectionActionCreators.addItemToNeeded(item);
		this.setStateGeneral();

	},
	handleItemCompleted : function(item) {
		CollectionActionCreators.addItemToCompleted(item);
		this.setStateGeneral();

	},
	handleItemRemoved : function(item) {
		CollectionActionCreators.removeItemFromCompleted(item);
		this.setStateGeneral();
	},
	handleReset : function(item) {
		CollectionActionCreators.clearList();
		this.setStateGeneral();
	},
	setStateGeneral: function () {
		var needed = CollectionStore.getCollectionNeeded();
		var completed = CollectionStore.getCollectionCompleted();
		this.setState({
			needed: needed,
			completed: completed
		});
	},
	render: function() {
		return (
				<div>
						<CollectionControls onFormSubmit={this.handleItemAdd} onReset={this.handleReset}/>
						<Needed items={this.state.needed} onAddItemToCompleted={this.handleItemCompleted}/>
						<Completed items={this.state.completed} onRemoveItem={this.handleItemRemoved}/>
				</div>
		);
	}
});
module.exports = Application;
