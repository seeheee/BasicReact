//react라이브러리에서 component라는 클래스를 로딩한것
import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return(
        <article>
        <h2>create</h2>
          <form action="create_process" method="post"
            //submit버튼클릭시발생하는form의 고유한 이벤트
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p><input type="submit"></input></p>
          </form>
    </article>
      );
    }
  }

export default CreateContent;