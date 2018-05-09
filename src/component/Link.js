import React, { Component } from 'react';
import '../App.css';

class Link extends Component {
  static defaultProps = {
    wording:{
      likedText: '取消',
      unlikedText: '点赞'
    }
  }

  constructor(){
    super()
    this.state = { isLiked :false ,count:0}
  }

  handleClickButton(){
    this.setState((prveState)=>{
      console.info(prveState)
      return {
        count:prveState.count+1,
        isLiked:!this.state.isLiked
      }
    })
    if(this.props.onClick){
      this.props.onClick()
    }
  }



  render(){ 
    return (
      <div>
      <button onClick={this.handleClickButton.bind(this)}>
        {this.state.isLiked ? this.props.wording.likedText : this.props.wording.unlikedText} 👍
      </button>
      </div>
    );
  }
}




export default Link;
