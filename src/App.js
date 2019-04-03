import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo1 from './assets/circular1.png';
import logo2 from './assets/circular2.png';
import './App.css';

import { changeName, changeEmail, changePhone,changeImage  } from './actions/actions';

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
     const { dispatchChangeEmail,dispatchChangephone,dispatchChangeImage } = this.props;

     dispatchChangeName();
     dispatchChangeEmail();
     dispatchChangephone();
     dispatchChangeImage();
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
    const { nameFromStore,emailFromStore,ageFromStore,phoneFromStore,imageStore } = this.props;
    {console.log('app newimage--->' + {imageStore})}
    var tmp=''
    {imageStore==='logo1' ?  
    tmp= <img src={logo1}  className="App-logo" alt="logo" />
    :
    tmp= <img src={logo2}  className="App-logo" alt="logo" />
  }
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo1} className="App-logo" alt="logo" /> */}
          {tmp}
          <p>
            {/* My name is {name}! */}
          </p>
          <p>My name from the store is {nameFromStore}!</p>
          <p>Email : {emailFromStore}</p>
          <p>Phone : {phoneFromStore}</p>
          <p>logo : {imageStore}</p>
          <a
            className="App-link"
            href="#"
            onClick={this.handleClick}
          >  
            Change Name , image and etc
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
  imageStore:state.image,

});
//console.log('here' +{emailFromStore});
const mapDispatchToProps = dispatch => ({
  dispatchChangeName: () => dispatch(   changeName()) ,
  dispatchChangeEmail: () => dispatch( changeEmail()),
  dispatchChangephone: () => dispatch( changePhone()), 
  dispatchChangeImage: () => dispatch( changeImage()), 
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
