var AppDispatcher = require('../dispatcher/AppDispatcher');
module.exports = {
	addItemToNeeded: function (item) {
		var action = {
			type: 'add_item_to_needed',
			item: item
		};
		AppDispatcher.dispatch(action);
	},
	removeItemFromNeeded: function (itemId) {
		var action = {
			type: 'remove_item_from_needed',
			itemId: itemId
		};
		AppDispatcher.dispatch(action);
	},
	addItemToCompleted: function (item) {
		var action = {
			type: 'add_item_to_completed',
			item: item
		};
		AppDispatcher.dispatch(action);
	},
	removeItemFromCompleted: function (itemId) {
		var action = {
			type: 'remove_item_from_completed',
			itemId: itemId
		};
		AppDispatcher.dispatch(action);
	},
	clearList: function () {
		var action = {
			type: 'clear_list'
		};
		AppDispatcher.dispatch(action);
	}
};