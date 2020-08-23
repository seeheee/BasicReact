import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        pa: ' ',
        nickname: ' '
    });

    const nameInput = useRef();

    const { pa, nickname } = inputs;
    
    const onChange = (e) => {
        const {value, name} = e.target;

        setInputs({
            ...inputs, 
            [name]: value 
        });
    };

    const onRest = () => {
        setInputs({
            pa: ' ',
            nickname: ' ',
        });
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="pa" placeholder="이름" onChange={onChange} value={pa} ref={nameInput}></input>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}></input>
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값 </b>
                {pa} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;