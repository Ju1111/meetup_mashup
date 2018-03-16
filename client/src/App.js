import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RsvpList from './rsvps/RsvpList'
import TopicsList from './topics/TopicsList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meetup Mashup</h1>
        </header>
        <div>
          <RsvpList />
          <TopicsList />
        </div>
      </div>
    );
  }
}

export default App;
