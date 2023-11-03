import Challenge from "./Challenge";
import ResultModal from "../result/ResultModal";
import { useRef, useState } from "react";

const AllChallenges = () => {
    const challenges = [
        {
            id: 1,
            name: 'easy',
            time: 1
        },
        {
            id: 2,
            name: 'not easy',
            time: 5
        },
        {
            id: 3,
            name: 'getting tough',
            time: 10
        },
        {
            id: 4,
            name: 'pros only',
            time: 15
        }
    ];
    const [time,setTime]=useState(0);
    const [timeElapsed,setTimeElapsed] = useState(0);
    const dialog = useRef();
    const showModal = (time, timeElapsed) => {
        setTime(time);
        setTimeElapsed(timeElapsed);
        dialog.current.open();
    }
    return <div className="challenges_container">
        <ResultModal ref={dialog} time={time} timeElapsed={timeElapsed}/>
        {
            challenges.map(challenge =>
                <Challenge showModal={showModal} key={challenge.id} name={challenge.name} time={challenge.time} />)
        }
    </div>
};
export default AllChallenges;