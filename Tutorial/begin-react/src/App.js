import React, { useRef, useState, useMemo, useCallback } from 'react';
import Counter from './Counter.js';
import './App.css';
import UserList from './UserList.js';
import  CreateUser from './CreateUser.js';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user=>user.active).length;
}
function App() {
  //자바스크립트 객체 생성
  const [inputs, setInputs] = useState({
    name: ' ',
    email: ' '
});

const { name, email } = inputs;

const onChange = useCallback((e) => {
    const {value, name} = e.target;

    setInputs(inputs =>({
        ...inputs, 
        [name]: value 
    }));
}, []);

// const name = 'react';

  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fonSize:24,
    padding: '1rem'
  }
  const [users, setUsers] = useState([
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
]);

//useRef 객체 생성
const nextId = useRef(4);

const onCreate = useCallback(() =>{
  console.log('먹히고잇니?');
  const user = {
  id: nextId.current,
  name,
  email
  };

  // setUsers([...user, user]);
  setUsers(users => users.concat(user));

  setInputs({
    name: ' ',
    email: ' '
  });
  nextId.current += 1;
}, [name, email] );

const onRemove  = useCallback((id) =>{
  setUsers(users => users.filter(user => user.id != id));
}, []);

const onToggle = useCallback((id) => {
  setUsers(users =>
    users.map(user => user.id === id ? {...user ,active : !user.active} : user)
  );
  
  // else{
  //   users.map(user => users.concat({active : !user.active}));
  // }
  
}, []);

// const count = countActiveUsers(users);
const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <div>
    {/* Hello 컴포넌트에게 name 값을 전달해주고 싶다  */}
    {/* <Hello name="kwon se hee" color='blue' isSpecial={true}></Hello> */}
    <Counter></Counter>
    {/* <InputSample></InputSample> */}
    <CreateUser username={name} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
    <UserList AppUser={users} onRemove={onRemove} onToggle={onToggle}></UserList>
  <div>활성 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
