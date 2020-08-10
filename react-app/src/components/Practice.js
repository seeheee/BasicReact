import React, { Component } from 'react';

//immutable.js는 원본의 데이터에 대해서 불변함
//배열을 바꾸고 싶다(array.from)
//객체를 바꾸고 싶다(object.assign)

class Practice extends Component {
    //로딩하거나 다른것을 클릭했을때 필요없는것까지 reload되는것을 방지
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        //this.props.data - 이전의 데이터 값
        //newProps.data - 바뀐 데이터 값
        //concat이 아니라 push 사용시 이전의 데이터값과 바뀐 데이터의값이 똑같음
        if(this.props.data === newProps.data){
            //render함수 호출안됨
            return false;
        }
        //render함수 호출됨
        return true;
    }
    render() {
        console.log('Practice render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
        lists.push(
        <li key={data[i].id}>
            <a 
                href={'/content/'+data[i].id}
                //data-id={data[i].id} 
                //하위컴포넌트는이벤트구s현을통해서상위컴포넌트의값을바꿀수있다
                //상위는하위값을줄때props
                onClick={function(id, e){
                    e.preventDefault();
                    this.props.onPageChange(id);
                }.bind(this, data[i].id)}>
                    {data[i].title}
            </a>
        </li>);
            i = i+1;
        }
    return(
        <nav>
        <ul>
            {/* <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li> */}
            {lists}
        </ul>
    </nav>
    );
    }
}

export default Practice;