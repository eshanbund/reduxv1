import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { changeName, changeEmail } from './actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatchChangeName } = this.props;
    dispatchChangeName();
    const { name } = this.state;
    const newName = name === 'Eric' ? 'John' : 'Eric'; 
    this.setState({
      name: newName,
    });
  }

  render() {
    const { name } = this.state;
    const { nameFromStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {name}!
          </p>
          <p>My name from the store is {nameFromStore}!</p>
          <a
            className="App-link"
            href="#"
            onClick={this.handleClick}
          >
            Change Name
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nameFromStore: state.name,
  emailFromStore: state.email,
  ageFromStore: state.age,
});

const mapDispatchToProps = dispatch => ({
  dispatchChangeName: () => dispatch(changeName())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
