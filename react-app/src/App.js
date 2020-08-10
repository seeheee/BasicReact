//component만드는코드

import React, { Component } from 'react';
import Subject from './components/Subject.js';
import ReadContent from './components/ReadContent.js';
import Practice from './components/Practice.js';
import Control from './components/Control.js';
import CreateContent from './components/CreateContent.js';
import UpdateContent from './components/UpdateContent.js';
import './App.css';


//자바스크립트코드가 아니라 JSX가 자바스크립트로 변환되는것(유사 자바스크립트)
class App extends Component {
  //props값 초기화
  constructor(props){
    super(props);
    this.max_content_id = 2;
    //state값 초기화(부모)
    this.state = {
      mode:'read',
      selected_content_id:2,
      welcome:{title:'welcome', sub:'Hello, React!'},
      Subject : {title:"java" , sub:"hahahaha"},
      Practice : [
        {id : 1, title:"sehee1", desc:"popo"},
        {id : 2, title:"sehee2", desc: "popo2"},
      ]
    }
  }
  getReadContent(){
    var i = 0;
        while(i < this.state.Practice.length){
          var data =  this.state.Practice[i];
          if(data.id === this.state.selected_content_id){
            return data;
          }
          i = i + 1;
        }
  }
  getContent(){
    var _title, _pa, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _pa = this.state.welcome.sub;
      _article = <ReadContent title={_title} pa={_pa}></ReadContent>
    }else if(this.state.mode === 'read'){
    var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} pa={_content.pa}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _pa){
        console.log(_title, _pa);
        //add content to this.state.Practice
        //push만하면 데이터의값이 변경되었다는 것을 react는 모름
        this.max_content_id = this.max_content_id + 1;
        // this.state.Practice.push(
        //   {id : this.max_content_id, title:_title, pa: _pa}
        // );
        //기존의데이터를건드리지않고 데이터를 추가해서 복사한 값을 리턴해주는 것(concat)
        var result = this.state.Practice.concat(
          {id : this.max_content_id, title:_title, pa: _pa}
        );
        this.setState({
          Practice: result,
          mode:'read',
          //현재아이디값을 해당페이지에 보여지게하는것
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      var _content = this.getReadContent();
      _article = <UpdateContent data = {_content} onSubmit={
        function(_id, _title, _pa){
        var result = Array.from(this.state.Practice);
        var i = 0;
        while(i < result.length){
          if(result[i].id === _id){
            result[i] = {id : _id, title:_title, pa: _pa}
            break;
          }
          i = i + 1;
        }
        this.setState({
          Practice: result,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    return(
      //자식이 state받을때는 props을 이용하여 받음
      <div className="App">
      { <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}
        //내가이벤트를직접작성한것
          onPageChange={function(){
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}
          >
      </Subject> }
      {/* <header>
            <h1><a href="/" onClick={function(e){
              //e는 이벤트핸들러
              //이벤트의원래작동을못하게하는것
              //예를들면 a는 페이지전환하는태그인데 그거를 못하게막음
              e.preventDefault();
              //this.state.mode = 'welcome';
              //위에꺼안되고 가능하게하기위해서는 
              //1.setState
              //2.bind
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}>{this.state.Subject.title}</a></h1>
            {this.state.Subject.sub}
        </header> */}
      <Practice onPageChange={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
      }.bind(this)}
      data={this.state.Practice}
      ></Practice>
      <Control onChangeMode = {function(_mode){
        if(_mode === 'delete'){
          if(window.confirm('really?')){
            var result = Array.from(this.state.Practice);
            var i = 0;
            while(i < result.length){
              if(result[i].id === this.state.selected_content_id){
                result.splice(i,1);
                break;
              }
              i = i +1;
            }
          }
          this.setState({
            mode: 'welcome',
            Practice : result
          });
        }else {
          this.setState({
            mode : _mode,
            selected_content_id : this.state.id
          });
        }
      }.bind(this)}></Control>
      {this.getContent()}
    </div>
    );
  }
}

export default App;
