import React,{Component} from 'react';
import {CardList} from '../src/component/card-list/card-list.component'
import {SearchBox} from '../src/component/search-box/search-box.component'

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      string:"From a string",
      monsters:[],
      searchField:''
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}))
  }
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
  return ( 
    <div className="App">    
      <h1> Monsters RollerDesk</h1>
      <SearchBox placeholder='search monster' handleChange= {
       e=>this.setState({searchField: e.target.value})} /> 
      
      <CardList monsters={filteredMonsters}>
         
      </CardList>    
    </div>
  )
}
}


export default App;
