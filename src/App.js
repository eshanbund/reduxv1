import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { changeName, changeEmail, changePhone  } from './actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
 /*   this.state = {
      name: 'Eric',
    }*/
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatchChangeName } = this.props;
     const { dispatchChangeEmail,dispatchChangephone } = this.props;

     dispatchChangeName();
     dispatchChangeEmail();
     dispatchChangephone();
    //const { name, email } = this.state;
   /* const newName = name === 'Eshan' ? 'John' : 'Eric'; 
    this.setState({
      name: newName,
      //email:nw
      
    });*/
  }

  render() {
    //const { name } = this.state;
   // const { nameFromStore } = this.props;
    const { nameFromStore,emailFromStore,phoneFromStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* My name is {name}! */}
          </p>
          <p>My name from the store is {nameFromStore}!</p>
          <p>Email : {emailFromStore}</p>
          <p>Phone : {phoneFromStore}</p>
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
  phoneFromStore: state.phone,
});

const mapDispatchToProps = dispatch => ({
  dispatchChangeName: () => dispatch(   changeName()) ,
  dispatchChangeEmail: () => dispatch( changeEmail()),
  dispatchChangephone: () => dispatch( changePhone()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
