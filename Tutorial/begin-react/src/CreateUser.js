import React from 'react';

const CreateUser = ( { onChange, username, email, onCreate } ) => {
    return(
        <div>
            <input name="name" placeholder="사용자" onChange={onChange} value = {username}></input>
            <input name="email" placeholder="이메일" onChange={onChange} value = {email}>
            </input>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);