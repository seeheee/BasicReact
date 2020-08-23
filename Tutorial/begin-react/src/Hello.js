//react 불러오기
import React from 'react';

//리액트컴포넌트는 클래스,함수형태로 작성가능함

function Hello({color, name,isSpecial}) {
    //HTML처럼 생겼지만 자바스크립트로써 XML로 작성하면 자바스크립트로 변환해줌
return <div style={{color}}>
    {isSpecial ? <b>**</b> : null}
    안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name : 'props을 설정하지 않았을 때 기본값으로 뜨는 값'
}
//Hello라는 컴포넌트를 내보내겠다
export default Hello;