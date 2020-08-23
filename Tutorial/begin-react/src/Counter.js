import React , { useReducer } from 'react';

// function Counter() {

//     const [number, setNumber] = useState(0);

//     //이벤트 설정하기위해 객체 생성
//     const onIncrease = () => {
//         setNumber(prevNumber => prevNumber + 1);
//     }
//     const onDecrease = () => {
//         setNumber(prevNumber => prevNumber - 1);
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }
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

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch( {type : 'INCREMENT'});
            }
    const onDecrease = () => {
        dispatch( {type : 'DECREMENT'});
            }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
};

export default Counter;

