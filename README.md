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

&#9996; true이므로 <b>*</b>이것이 나옴
```javascript
function App() {
  //자바스크립트 객체 생성
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fonSize:24,
    padding: '1rem'
  }
  return (
    <Wrapper>
    {/* Hello 컴포넌트에게 name 값을 전달해주고 싶다  */}
    <Hello name="kwon se hee" color='blue' isSpecial={true}></Hello>
    <div style={style}>{name}</div>
    <div className="box"></div>
    </Wrapper>
  );
}

```
<br>

### &#128293; useState 를 통해 컴포넌트에서 바뀌는 값 관리하기 &#128293;

함수형 컴포넌트에서 상태를 관리하는 방법은 &#10068;
Hooks 사용

상태란 컴포넌트에서 동적인 값을 의미

useState는 Hooks의 하나의 종류

엘리먼트에 이벤트를 설정하는 방법은 &#10068;
on이벤트이름={실행하고싶은함수}

&#10060; 밑에 코드처럼 작성 시 렌더링되는 시점에 함수가 호출되므로 잘못되었음 !

```
onClick={onIncrease()}
```

이벤트를 설정할때에는 함수타입의 값을 넣어주어야 한다

```
const [number, setNumber] = useState(0);
```

첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수

### &#128293; input 상태 관리하기 &#128293;

```javascript
import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState(' ');
    
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onRest = () => {
        setText('  ');
    };

    return(
        <div>
            <input onChange={onChange} value={text}></input>
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
```

✔️ 이벤트 객체 e를 파라미터로 받아와서 e.target은 input DOM을 가리킴

✔️ value 값을 설정해줘야 상태가 바뀌었을 때 input값의 내용도 업데이트 됨


### 여러개의 input 상태 관리하기

### &#128161; 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 함 &#128161;


```javascript
inputs[name] = value;
```
&#10060; 이런 식으로 직접 객체를 수정하는 것 안됨<br>
👀 기존 상태를 직접 수정하게 되면 리엑트 컴포넌트는 상태가 업데이트 되었다는 것을 인지하지 못하여 값을 바꿔도 리렌더링이 되지 않음 

```javascript
setInputs({
  ...inputs,
  [name]: value
});
```
✔️ 새로운 객체를 만들어서 새로운 객체에 변화를 줘야 함

```javascript
function InputSample() {
    const [inputs, setInputs] = useState({
        //문자열이 아니라 객채 형태로 초기화
        pa: ' ',
        nickname: ' '
    });

    const { pa, nickname } = inputs;
    
    const onChange = (e) => {
        //이벤트 객체가 value와 name을 가리킴
        const {value, name} = e.target;

        setInputs({
            ...inputs, // spread 사용하여 기존의 input 객체를 복사한 뒤
            [name]: value //name키를 가진 값을 value로 설정
        });
    };

    const onRest = () => {
        setInputs({
            pa: ' ',
            nickname: ' ',
        });
    };

    return(
        <div>
            <input name="pa" placeholder="이름" onChange={onChange} value={pa} ></input>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} ></input>
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값 </b>
                {pa} ({nickname})
            </div>
        </div>
    );
}
```

### useRef 로 특정 DOM 선택하기

&#10102; useRef() 를 사용하여 Ref 객체 생성

```javascript
const nameInput = useRef();
```

&#10103; 함수에 무슨 효과를 줄 것인지 적기 (Ref 객체의 .current 값은 우리가 원하는 DOM을 가리킴)

```javascript
 nameInput.current.focus();
```

&#10104; ref로 효과가 사용될 태그에 자바스크립트 객체를 넣기

```javascript
ref={nameInput}
```

### 🙆 배열에 렌더링하기 🙆

```javascript
function UserUse({user}) {
    return(
        <div>
            <b>{user.name} ({user.email})</b>
        </div>
    );
}

function UserList() {
    const user = [
        {
            id:1,
            name: 'kwon se hee',
            email: 'ksh2001ksh@naver.com'
        },
        {
            id:2,
            name: 'kwon dong dong',
            email: 'kth1203kth@naver.com'
        },
        {
            id:3,
            name:'test',
            email: 'test@naver.com'
        }
    ];
    return(
        <div>
        <UserUse user = {user[0]}></UserUse>
        <UserUse user = {user[1]}></UserUse>
        <UserUse user = {user[2]}></UserUse>
        </div>
    );
}
```

✔️ 이 방법은 동적인 배열을 렌더링 하지 못함 ❗

### 동적인 배열 렌더링하는 방법 = 자바스크립트 배열의 내장함수 map() 을 사용

```javascript
  return (
    <div>
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
```

✔️ 배열을 렌더링 할 때에는 key라는 props를 설정해야함<br>

✔️ key값은 고유값으로 설정 ❗ (대부분 ID에 해당)

🚀 
