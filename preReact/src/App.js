import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import './mock/toList'
const crypto = require('crypto');

class App extends Component {
  state = {
    listArr:[],
    dataSource:[]
  };
  //MD5生成法则
  createHashFun = (str)=>{
    return crypto.createHash('md5').update(str,'UTF8').digest('hex');
  }

  getListFun = ()=>{
    axios.get("http://localhost:8000/user/userList",{
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
    const that = this;  
    axios.get('http://20181024Mock.com/mode1/tableDataOne').then((res) => {
        if(res.status === 200){
            that.setState({
                dataSource: res.data.dataSource
            })
        }
    })
    
    //this.getListFun();
    //test crypto 
    const hs = this.createHashFun('fuyanran') 
    console.log(hs,'---md5---');
  }

  render() {
    console.log(this.state.dataSource);
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
