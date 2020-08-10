//react라이브러리에서 component라는 클래스를 로딩한것
import React, { Component } from 'react';

class Subject extends Component {
    //function이름이 render인것
    render() {
      return(
        //props를 받아서 동적으로 만들기
      //   <header>
      //   <h1>WEB</h1>
      //   world wide web!
      // </header>
            <header>
            <h1><a href = "/" onClick={function(e){
              e.preventDefault();
              this.props.onPageChange();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
      );
    }
  }

export default Subject;