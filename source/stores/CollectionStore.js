var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT =  'change';
var needed = [];
var completed = [];

function addItemToNeeded(item) {

	if(item === undefined || item === "" || item === null){
		return;
	}

	if(completed[item] === undefined || completed[item] === "" || completed[item] === null){
		needed[item] = item;
	}

}

function removeItemFromNeeded(itemId) {
	delete needed[itemId];
}

function addItemToCompleted(item) {
	completed[item] = item;
}

function removeItemFromCompleted(itemId) {
	delete completed[itemId];
}

function clearList() {
	needed = [];
	completed = [];
}

function emitChange() {
	CollectionStore.emit(CHANGE_EVENT);
}

var CollectionStore = assign({}, EventEmitter.prototype, {

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getCollectionNeeded: function () {
		return needed;
	},
	getCollectionCompleted: function () {
		return completed;
	}
});

function handleAction(action) {
	switch (action.type) {
		case 'add_item_to_needed':
			addItemToNeeded(action.item);
			emitChange();
			break;
		case 'remove_item_from_needed':
			removeItemFromNeeded(action.itemId);
			emitChange();
			break;
		case 'add_item_to_completed':
			addItemToCompleted(action.item);
			removeItemFromNeeded(action.item);
			emitChange();
			break;
		case 'remove_item_from_completed':
			removeItemFromCompleted(action.itemId);
			emitChange();
			break;
		case 'clear_list':
			clearList();
			emitChange();
			break;
		default: // ... do nothing
	}
}
CollectionStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = CollectionStore;