import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TransFilter from '../trans-filter/trans-filter';
import './App.css';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import reducer from '../store/reducer'
import { createStore } from 'redux';

const store = createStore(reducer)

export default class App extends Component {
  render() {
    store.subscribe(() => console.log(store.getState()))
    return (
      <Provider store={store}>
        <div className="App">
        <div className='logo' />
        <div className='main'>
          <TransFilter />
          <div className='main__tickets'>
            <SortFilter />
            <TicketList />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}

export {store}