'use strict';

import jsdom from 'jsdom';
import chai from 'chai';

import { listPrototype } from './list.js';

// build the DOM properties we will use in testing
const { document, Element } = new jsdom.JSDOM('').window;
// create a global variable named `document` that behaves just like in the browser
// you view function will not work without this
global.document = document;

// declare the `expect` variable for testing
const expect = chai.expect;

describe('listPrototype: methods for list instances', () => {
  describe('list title: getter and setter', () => {
    it("sets the list's title", () => {
      // create new data for this instance
      const newTitle = 'toads';
      // create the instance
      const list = Object.create(listPrototype);
      // initialize the instance's data
      list._state = {
        title: '',
        entries: [],
      };
      // set the instance's entries
      list.title = newTitle;
      expect(list._state.title).to.equal(newTitle);
    });
    it("gets the list's title", () => {
      // initial data
      const newTitle = 'toads';
      // create the instance
      const list = Object.create(listPrototype);
      // initialize the instance's data
      list._state = {
        title: newTitle,
        entries: [],
      };
      expect(list.title).to.equal(newTitle);
    });
  });
  describe('set entries: copies entries from an array into state', () => {
    it('does not store the same array', () => {
      // create new data for this instance
      const newEntries = [
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ];
      // create the instance
      const list = Object.create(listPrototype);
      // initialize the instance's data
      list._state = {
        title: '',
        entries: [],
      };
      // set the instance's entries
      list.entries = newEntries;
      expect(list._state.entries).to.not.equal(newEntries);
    });
    it('does store the correct entries', () => {
      const newEntries = [
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ];
      const list = Object.create(listPrototype);
      list._state = {
        entries: [],
      };
      list.entries = newEntries;
      expect(list._state.entries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ]);
    });
  });

  describe("get entries: read the app's entries from state", () => {
    // set the initial state for this grouping of tests
    const newEntries = [
      { text: 'hello', completed: true },
      { text: 'bye', completed: false },
    ];
    const list = Object.create(listPrototype);
    list._state = {
      entries: [],
    };
    list.entries = newEntries;

    it('returns a new array', () => {
      const gotEntries = list.entries;
      expect(gotEntries).to.not.equal(list._state.entries);
    });
    it('with the correct entries', () => {
      const gotEntries = list.entries;
      expect(gotEntries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ]);
    });
  });

  describe('list.toggleCompleted: given a todo index, change its status', () => {
    // set the initial state for this grouping of tests

    const list = Object.create(listPrototype);
    list._state = {
      entries: [],
    };
    list.entries = [
      { text: 'hello', completed: false },
      { text: 'bye', completed: false },
    ];

    it('changes the first todo', () => {
      list.toggleCompleted(0);
      expect(list.entries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ]);
    });
    it('changes the second todo', () => {
      list.toggleCompleted(1);
      expect(list.entries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: true },
      ]);
    });
    it('changes the first todo again', () => {
      list.toggleCompleted(0);
      expect(list.entries).to.deep.equal([
        { text: 'hello', completed: false },
        { text: 'bye', completed: true },
      ]);
    });
    it('does nothing if the index is out of range', () => {
      list.toggleCompleted(71);
      expect(list.entries).to.deep.equal([
        { text: 'hello', completed: false },
        { text: 'bye', completed: true },
      ]);
    });
  });

  describe('renderTodos: renders all saved list into a UL element', () => {
    it('would be a nice challenge to write a test for this!', () => {});
  });

  describe('... writing tests for the rest of the methods ...', () => {
    it('is', () => {});
    it('fun', () => {});
    it('!', () => {});
  });
});
