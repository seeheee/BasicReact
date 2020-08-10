//react라이브러리에서 component라는 클래스를 로딩한것
import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
      super(props);
      this.state = {
        //props는 읽기만 되니깐 state로 수정도 가능하게 해줌
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
    }
    render() {
      console.log(this.props.data);
      return(
        <article>
        <h2>Update</h2>
          <form action="create_process" method="post"
            //submit버튼클릭시발생하는form의 고유한 이벤트
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id, 
                this.state.title, 
                this.state.desc);
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p><input 
            type="text" 
            name="title" 
            placeholder="title"
            value={this.state.title}
            onChange={function(e){
              console.log(e.target.value);
              this.setState({ title : e.target.value });
            }.bind(this)}
            ></input></p>
            <p><textarea 
            name="desc" 
            placeholder="description"
            value={this.state.desc}
            onChange={function(e){
              console.log(e.target.value);
              this.setState({ desc : e.target.value });
            }.bind(this)}
            ></textarea></p>
            <p><input type="submit"></input></p>
          </form>
    </article>
      );
    }
  }

export default UpdateContent;