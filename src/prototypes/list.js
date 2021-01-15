'use strict';

/*
  you will be able to use your todo methods from last week's project as a starting point
  what will change the most is how you use them in your program
  - you will create new instances that inherit these methods in your handlers
  - the data for each list will not be an own property of this object
*/

export const listPrototype = {
  // no state here!
  //  each instance will have it's own state
  //  and will inherit these methods

  // getters & setters
  get title() {
    return this._state.title;
  },
  set title(newTitle) {
    if (typeof newTitle !== 'string') {
      throw new TypeError('newTitle is not a string');
    }
    this._state.title = newTitle;
  },

  get entries() {
    return [...this._state.entries];
  },
  set entries(newEntries) {
    if (!Array.isArray(newEntries)) {
      throw new TypeError('newEntries is not an array');
    }
    if (newEntries.some((entry) => !entry || typeof entry !== 'object')) {
      throw new TypeError('some entries are not objects');
    }
    this._state.entries = [...newEntries];
  },

  // logic methods
  toggleCompleted(position) {
    if (position < 0 || this.entries.length <= position) {
      return;
    }
    const todo = this.entries[position];
    todo.completed = !todo.completed;
  },

  // view methods
  createDeleteButton() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  render() {
    const todosUl = document.createElement('ul');

    for (let position = 0; position < this.entries.length; position++) {
      // ...
    }

    return todosUl;
  },
};
