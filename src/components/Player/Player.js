import {useState, useRef} from 'react';
const Player = () => {
    const [name,setName] = useState('');
    const input = useRef();
    const setNameHandler = () =>{
        setName(input.current.value);
    };
    return <div className='player'>
        <h2>Welcome {name ? name : 'unknown entity'}</h2>
        <div>
            <input ref={input} type='text'></input>
            <button onClick={setNameHandler}>Set Name</button>
        </div>
    </div>
};
export default Player;