# BasicReact
생활코딩 리엑트 강의와 react 튜토리얼 따라하기

## react 파일 생성방법
1. npx create-react-app begin-react(파일 이름)
2. npm start

## Hello.js 코드

```xml
import React from 'react';

function Hello() {
    return <div>안녕하세요</div>
}

export default Hello;
```

-> 항상 리엑트를 불러와줘야 한다.

-> 리액트 컴포넌트는 클래스 또는 함수로 작성가능

-> HTML처럼 생겼지만 XML로 작성 시 JSX -> javascript로 변환

-> Hello 컴포넌트를 내보내서 다른 컴포넌트에서 사용가능

## 꼭 감싸져야하는 태그

```XML
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello />
    <div>안녕히계세요.</div>
  );
}

export default App;
```

오류발생 -> <>, </> 로 감싸기(Fragment)

JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감
