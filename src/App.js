import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import axios from './axios-user'

//The class is by default created
class App extends Component {

  state = {
    userName : 'Masoud Soltanveis',
    response : null
  }

  manipulator = (event) => {
    event.preventDefault();
    this.setState(
      {userName : event.target[0].value}
    )
  }

  // callAPI = (props) => {
  //   axios.get()
  //   .then(response => {
  //     this.setState({response : response.data})  
  //     //  console.log(response);
  //   })
  // }
  callAPI = (props) => {
    //alert("Let's proceed!");
    const body = {
      credentials : { 
        firstname : 'Masoud',
        lastname : 'Soltanveis',
        email: 'masoudso@vays.com'
        }
    }
    axios.post('/body.json', body)
        .then(response => console.log(response))
                .catch(error => console.log(error));
}

  render() {
    let response = <p> Here comes the response! </p>
    const myMainContainer = {maxWidth:'400px', height:'300px', margin:'10px auto', padding:'10px 0',
            backgroundColor:'#3b5998', color:'white' ,textAlign:'center', border:'1px solid #000'};
            if (this.state.response) {
              response = (
              <p>{this.state.response.people}</p>
              )
       }
    return (
      <div className="App" style = {myMainContainer}>
        <UserOutput userName = {this.state.userName}/>
        <UserInput changed={this.manipulator} callAPI={this.callAPI}/>
        <div>{response}</div>
      </div>
    );
  }
}

export default App;
