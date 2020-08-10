//react라이브러리에서 component라는 클래스를 로딩한것
import React, { Component } from 'react';

class Control extends Component {
    //function이름이 render인것
    render() {
    return(
        <ul>
            
        <li><a href="/create" onClick={function(e){
            e.preventDefault();
            //상위컴포넌트의 데이터를 바꾸고 싶을때 이벤트 사용
            this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>

        <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>

        <li><input   onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="delete"></input></li>

        </ul>
    );
    }
}

export default Control;