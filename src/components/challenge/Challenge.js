import { useState, useRef } from 'react';

const Challenge = (props) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const [startTime, setStartTime] = useState(0);
    let timeElapsed = 0;
    const startHandler = () => {
        setTimerStarted(true);
        setStartTime(new Date().getTime());
        // console.log(startTime);
        timer.current = setTimeout((
        ) => {
            setTimerStarted(false);
            timeElapsed = -1; //value for timer expired
            props.showModal(props.time, timeElapsed);
            setTimerStarted(false);
        }, props.time * 1000);
    };
    const stopHandler = () => {
        setTimerStarted(false);
        clearTimeout(timer.current);
        const currentTime = new Date().getTime();
        timeElapsed = (currentTime - startTime) / 1000;
        props.showModal(props.time, timeElapsed);

    };

    return <div className="challenge">
        <h2>{props.name.toUpperCase()}</h2>
        <h3>{props.time} {props.time > 1 ? 'Seconds' : 'Second'}</h3>
        <button onClick={timerStarted ? stopHandler : startHandler}> {timerStarted ? 'Stop' : 'Start'}{' '}Challenge</button>
        <p>{timerStarted ? 'Timer is Running' : 'Timer Inactive'}</p>
    </div>
};
export default Challenge;