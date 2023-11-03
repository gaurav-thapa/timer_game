import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef((props, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    const time = props.time;
    const timeElapsed = props.timeElapsed;
    const userLost = (timeElapsed === -1);
    const remainingTime = (time - timeElapsed).toFixed(2);
    const score = (timeElapsed / time * 100).toFixed();
    const content = <p>You stopped the timer with <strong>{remainingTime}{' '}{remainingTime > 1 ? 'seconds' : 'second'}</strong> left</p>
    const onReset = () => {
    };
    return createPortal(<dialog ref={dialog} className="result_modal" onClose={onReset}>
        <h1>{userLost ? 'You Lost' : 'Your Score: ' + score}</h1>
        <p>The target time was <strong>{time}{' '}{time > 1 ? 'seconds' : 'second'}</strong></p>
        {userLost ? 'Timer Expired' : content}
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>, document.getElementById('modal'));
});
export default ResultModal;