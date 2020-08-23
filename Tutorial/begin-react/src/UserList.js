import React, { useEffect } from 'react';

const UserUse = React.memo(function UserUse({user, onRemove, onToggle}) {
    console.log('이거 안찍혀야해');
    useEffect(() => {
            console.log('user 값이 설정됨');
            return () => {
                console.log('user가 바뀌기 전');
            };
        
    } , []);
    return(
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'red'
            }}
            onClick={() => onToggle(user.id)} >
            {user.name}
            </b>
            <b>({user.email})</b>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({AppUser, onRemove, onToggle}) {
    return(
        <div>
        {/* <UserUse user = {user[0]}></UserUse>
        <UserUse user = {user[1]}></UserUse>
        <UserUse user = {user[2]}></UserUse> */}
        {AppUser.map(users => (
            <UserUse user={users} key = {users.id} onRemove = {onRemove} onToggle={onToggle}></UserUse>
        ))}
        </div>
    );
}

export default React.memo(UserList); 