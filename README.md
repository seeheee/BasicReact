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

props는 오직 읽는 것만 가능하고 수정은 불가능 ❗

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

state란 컴포넌트에서 비동기 방식으로 동적인 값을 의미

useState는 Hooks의 하나의 종류로써 state의 동적인 값을 바꿀 경우 사용 ❗

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
##### 🚀 map() 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어지 배열로 변환

##### map() 함수는 모든 배열의 값에 Function을 실행하는 Method

👀 array.map(callbackFunction(currenValue, index, array), thisArg)

currenValue : 현재 값
index : 배열 내 현재 값의 인덱스


![image](https://user-images.githubusercontent.com/53335160/90859777-ca470000-e3c3-11ea-89f0-e132060eaa8c.png)

✔️ 배열을 렌더링 할 때에는 key라는 props를 설정해야함<br>

✔️ key값은 고유값으로 설정 ❗ (대부분 ID에 해당)

✔️ 만약 key값으로 설정할 경우가 없다면 콜백함수 두번째 파라미터에 index를 key로 사용

```javascript
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index}/>
      ))}
    </div>
  );
```

### 🔥 useRef 로 컴포넌트 안의 변수 만들기 🔥

```javascript
//useRef 객체 생성
const nextId = useRef(4);


const onCreate = () =>{
  nextId.current += 1;
};
```

✔️ nextId.current의 초기값은 useRef의 파라미터의 값 ➜ 수정, 조회시 current 값을 이용하면 됨 ➜ userRef를 사용하면 조회 및 수정 할 수 있는 변수 관리 용이

### 🔥 CREATE 🔥

➊ useState 를 사용하여 컴포넌트의 상태로서 관리

```javascript
const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
```

```javascript
 const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);
```

➋ onChange와 onCreate 함수 작성

```javascript
 const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
```

```javascript
const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
```

➌ 배열에 등록할 때 불변성 지켜주기

배열의 push , splice, sort 사용 ❌

👀 spread , concat 사용

spread 사용

```javascript
setUsers([...users, user]);
```
<br>
concat 사용

```javascript
setUsers(users.concat(user));
```

### 🔥 DLETE 🔥

➊ onRemove함수에 id값 파라미터로 주기

```javascript
<button onClick={() => onRemove(user.id)}>삭제</button>
```

➋ onRemove함수 filter함수 사용하여 작성

```javascript
const onRemove  = (id) =>{
  setUsers(users.filter(user => user.id != id));
};
```

### 🔥 UPDATE 🔥

undefined 의 선행조건은 null이다 ! 즉 undefined는 null로 체크


### 🔥 useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정 🔥

👀 마운트(처음 나타날때)

useEffect의 첫번째 파라미터 ➜ 함수 , 두번째 파라미터 ➜ 의존값이 들어있는 배열 (deps)

👀 언마운트(사라질 때)

useEffect에서 함수를 반환 할 시 ➜ cleanup 함수 (deps가 비어있을 시 실행)

👀 deps 에 특정 값 넣기

처음 마운트 될 때, 지정한 값이 바뀔때, 값이 바뀌기 전, 언마운트 시 모두 호출<br>

seEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 꼭 넣어주어야 함 ❗ 


### 🔥 useEffect 보충 🔥


### 🔥 useMemo 를 사용하여 연산한 값 재사용하기 🔥

👀 Memo란 memoized를 의미하며 이전에 계산한 값을 재사용한다는 의미를 가지고 있다

💜 countActiveUsers 라는 함수를 만들어서, active 값이 true 인 사용자의 수를 세어서 화면에 렌더링하기 

```javascript
function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user=>user.active).length;
}

const count = countActiveUsers(users);

  return (
    <div>
    <CreateUser username={name} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
    <div>활성 사용자 수 : {count}</div>
    </div>
  );
```

✔️ users에 변화가 있을 뿐 아니라 input값이 바뀔 때도 컴포넌트가 리렌더링된다(***함수 컴포넌트는 매번 함수가 새로 그려지며 실행되기 때문에 한번만 실행되면 되는 함수도 계속 호출되는 문제 발생***) ➜ Hook함수의 하나인 useMemo 사용

useMemo(callback, [변경되는값]);

첫번째 파라미터 : 연산을 정의하는 함수<br>
두번째 파라미터 : deps 함수

 
✔️ 변경되는 값에 변경이 없다면 함수를 한번만 실행한후 값을 재사용한다 ❗

### useMemo()와 useRef(), useCallback()의 차이점
👉 useMemo()는 복잡한 함수의 'return값'을 기억하는 경우<br>
👉 useRef()는 DOM객체처럼 특정 값을 기억하는 경우<br>
👉 useCallback()는 함수의 reference을 기억하는 경우<br>


### 🔥 usecallback을 사용하여 함수 재사용하기 🔥

👀 usecallback은 특정함수를 만들지 않고 재사용하고 싶을 경우 사용

재사용을 왜 해야할까 ❓<br>

컴포넌트에서 props가 바뀌지 않았으면 Virtual DOM에 새로 렌더링하지 않고 컴포넌트의 결과물을 재사용하는 최적화에 필요

함수 안에서 사용하는 상태, props가 있다면 deps 배열안에 포함시켜야 함 ❗ 

### 🔥 React.memo 를 사용한 컴포넌트 리렌더링 방지 🔥

👀 React.memo을 사용하면 컴포넌트의 리렌더링이 필요한 상태에서만 리렌더링 할 수 있음 ❗ 

👀 렌더링 최적화 하지 않을 컴포넌트에 React.memo 를 사용하는것은, 불필요한 props 비교만 하는 것이기 때문에 실제로 렌더링을 방지할수있는 상황이 있는 경우에만 사용 ❗ 

```javascript
export default React.memo(UserList);
```
✔️ 내보낼때 React.memo로 감싸줌

```javascript
const onRemove  = useCallback((id) =>{
  setUsers(users => users.filter(user => user.id != id));
}, []);

 setUsers(users => users.concat(user));
```
✔️ 함수형 업데이트를 사용하여 deps에 users를 넣지 않는다<br>
✔️ setUser의 파라미터로 users을 넘겨줌

### 🔥 useReducer 를 사용하여 상태 업데이트 로직 분리 🔥

💜 상태를 관리하는 2가지 방법
1. usestate
2. useReducer

useReducer을 사용하는 이유는 ❓
컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리 할 수 있음 

💜 useReducer vs useState
useReducer : 컴포넌트에서 관리하는 값이 여러개
useState : 컴포넌트에서 관리하는 값이 하나고 단순한 숫자, 문자열일 경우 이용

👀 const [state, dispatch] = useReducer(reducer, initialState);

state : 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태
dispatch : 액션을 발생시키는 함수
reducer : reducer 함수
initialState : 초기 상태

```javascript
function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}
```
✔️ reducer함수는 현재 상태와 액션객체를 파라미터로 받아 새로운 state를 반환

##### 👀 APP.js에서 구현

```javascript
const initialState = {
    inputs: {
        name: ' ',
        email: ' '
    },
    users : [
        {
            id:1,
            name: 'kwon se hee',
            email: 'ksh2001ksh@naver.com',
            active: true
        },
        {
            id:2,
            name: 'kwon dong dong',
            email: 'kth1203kth@naver.com',
            active: false
        },
        {
            id:3,
            name:'test',
            email: 'test@naver.com',
            active: false
        }
    ]
};
```
✔️ const [state, dispatch] = useReducer(reducer, initialState); 쓸 초기값을 설정
<br>

```javascript
function reducer(state, action){
    switch(action.type){
        case 'CHANGE_INPUT':
            return{
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
            case 'CREATE_USER':
                return{
                    inputs: initialState.inputs,
                    users: state.users.concat(action.user)
                };
            case 'REMOVE_USER':
                return{
                    ...state,
                    users: state.users.filter(user => user.id != action.id)
                };
            case 'TOGGLE_USER':
                return{
                    ...state,
                    users: state.users.map(user => user.id === action.id ? {...user ,active : !user.active} : user)
                }
        default:
            return state;
    }
}
```

✔️ 분리된 업데이트 로직을 작성
<br>
```javascript
function App2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const {users} = state;
    const {name, email} = state.inputs;

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type:'CREATE_USER',
            user: {
                id: nextId.current,
                name,
                email
            },
        });
        nextId.current += 1;
    }, [name, email]);

    const onRemove = useCallback((id) =>{
        dispatch({
            type:'REMOVE_USER',
            id
        });
    }, []);

    const onToggle = useCallback((id) =>{
        dispatch({
            type:'TOGGLE_USER',
            id
        });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <div>
            <CreateUser username={name} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
            <UserList AppUser={users} onRemove={onRemove}  onToggle={onToggle}></UserList>
    <div>활성사용자 수: {count}</div>
        </div>
    );
}
```
✔️ action을 설정
<br>

### 🔥 커스텀 Hooks 만들기 🔥

커스텀 Hooks을 사용하는 이유 ❓
반복되는 hooks들을 쉽게 재사용하기 위해서

👀 커스텀 Hooks를 만들때 파일은 보통 use 키워드로 시작

