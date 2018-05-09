import React, { Component } from 'react';
import logo from '../logo.svg';
import Link from './Link'
import ComArray from './ComArray'
import '../App.css';

class ComIndex extends Component {
 

  render() {
    let name='chenjian'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {name}</h1>
          
        </header>
        <div>
          <Title/>
          <Header />
          <Main />
          <Footer />
        </div>
       
      </div>
    );
  }
}

class Title extends Component {
  render (){
    return (
        <h1> i am title</h1>
    )
  }
}

class Header extends Component {
  handleClick(a,e){
    //console.info(e.target.innerHTML)
    console.info(a)
  }

  render (){
    return (
      <div onClick={this.handleClick.bind(this,'123')}>
        I am header 
      </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <Link wording={{likedText:'已赞', unlikedText:'赞'}}
        onClick ={()=>{console.info( 'i am click')}}
      />
    </div>
    )
  }
}

const users = [
  { name: 'Jerry', age: 21, gender: 'male' },
  { name: 'Tomy', age: 22, gender: 'male' },
  { name: 'Lily', age: 19, gender: 'female' },
  { name: 'Lucy', age: 20, gender: 'female' }
]

class Footer extends Component {
  render () {
    return (
    <div>
        {users.map((user,index)=><ComArray key={index} user={user} />)}
    </div>
    )
  }
}


export default ComIndex;
