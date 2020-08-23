//usestate가 아니라 useReducer 사용
import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import Counter from './Counter.js';
import './App.css';
import UserList from './UserList.js';
import  CreateUser from './CreateUser.js';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

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

export default App2;