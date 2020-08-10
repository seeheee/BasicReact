//react라이브러리에서 component라는 클래스를 로딩한것
import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
      return(
        <article>
        <h2>{this.props.title}</h2>
        {this.props.pa}
    </article>
      );
    }
  }

export default ReadContent;