# 큰 나무보기
react 튜토리얼 따라하기


## react 파일 생성방법
1. npx create-react-app begin-react(파일 이름)
2. npm start

## Hello.js 코드

```javascript
import React from 'react';

function Hello() {
    return <div>안녕하세요</div>
}

export default Hello;
```

1. 항상 리엑트를 불러와줘야 한다.
2. 리액트 컴포넌트는 클래스 또는 함수로 작성가능
3. HTML처럼 생겼지만 XML로 작성 시 JSX -> javascript로 변환
4. Hello 컴포넌트를 내보내서 다른 컴포넌트에서 사용가능

## 꼭 감싸져야하는 태그

```javascript
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

## style과 className

```javascript
import React from 'react';
import Hello from './Hello.js';
import './App.css';


function App() {
  //자바스크립트 변수 생성
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fonSize:24,
    padding: '1rem'
  }
  return (
    <div>
    <Hello></Hello>
    <div style={style}>{name}</div>
    <div className="box"></div>
    </div>
  );
}

export default App;
```

✔️ JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감쌈<br>
✔️ css을 사용할때는 import해서 불러와주고 **className**을 사용하여 **css name**을 가지고 옴<br>

## props와 state
props 는 properties 의 줄임말

#### props는 언제 사용할까 &#10068;
어떤 값을 컴포넌트에서 전달해줘야 할 때
값을 객체 형태로 전달되며 파라미터를 통해 조회

## &#10122; props을 사용하는 방법

```javascript
import React from 'react';

function Hello(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
}

export default Hello;
```
## &#10123; 비구조화 할당 = 구조 분해

```javascript
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;
```
✔️파라미터로 객체를 받아오며 props을 생략하고 작성가능 

## 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을때 props.children 사용

```javascript
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
```
✔️ **props.children을 사용하는 자리는 상위 컴포넌트 안에서 사용해야함. 그래야 Wrapper컴포넌트 안에 있는 다른 컴포넌트들과 내용들이 보임**

## 조건부 렌더링

&#9996; 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미

```javascript
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}
```

```

```
