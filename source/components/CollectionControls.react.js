var React = require('react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

var CollectionControls = React.createClass({
	getInitialState: function () {
		return {
			inputValue: ''
		};
	},
	setInputValue: function(inputValue) {
		this.setState({
			inputValue: inputValue
		});
	},
	handleInputValueChange: function (event) {
		var inputValue = event.target.value;
		this.setInputValue(inputValue);
	},
	handleFormSubmit: function (event) {
		event.preventDefault();
		var needed = this.state.inputValue;
		this.props.onFormSubmit(needed);
		this.setInputValue();
	},
	resetForm: function (event) {
		event.preventDefault();
		this.props.onReset();
	},
	componentDidMount: function() {
		this.refs.itemText.focus();
	},
	render: function () {
		return (


				<form className="input-group mb5 add-to-list">
					<input ref="itemText" onChange={this.handleInputValueChange}
					       value={this.state.inputValue}
					       type="text"
					       className="add-item form-control"
					/>
					<span className="input-group-btn">
						<button className="add-item btn" onClick={this.handleFormSubmit}>Add</button>
						<button className="add-item btn" onClick={this.resetForm}>Clear List</button>
					</span>

				</form>
		);
	}
});

module.exports = CollectionControls;
