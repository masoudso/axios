import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//The class is by default created
class App extends Component {

  state = {
    userName : 'Masoud Soltanveis'
  }

  manipulator = (event) => {
    event.preventDefault();
    this.setState(
      {userName : event.target[0].value}
    )
  }


  render() {
    const myMainContainer = {maxWidth:'400px', height:'300px', margin:'10px auto', padding:'10px 0',
            backgroundColor:'#3b5998', color:'white' ,textAlign:'center', border:'1px solid #000'};
    return (
      <div className="App" style = {myMainContainer}>
        <UserOutput userName = {this.state.userName}/>
        <UserInput changed={this.manipulator}/>
      </div>
    );
  }
}

export default App;
