import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  state = {
    listArr:[]
  };

  getListFun = ()=>{
    axios.get("http://localhost:3000/user/userList",{
      headers: {"Content-Type": "application/json"}
    }
    )
    .then((res)=>{
      this.setState({
        listArr:res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount(){
    this.getListFun()
  }

  render() {
    let listArr = this.state.listArr;
    return (
      <div>
        <ul>
          {
            !listArr ? console.log('...') 
            : 
            listArr.map((n,i)=>{
              return <li key={i}>username:{n.username}------picture:{n.picture}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
