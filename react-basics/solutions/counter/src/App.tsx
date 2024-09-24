import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
    var [count, setCount] = useState<number>(0);
    var [timerActive, setTimerActive] = useState<boolean>(false);
    var [timerId, setTimerId] = useState<number | undefined>();

    function increment() {
        setCount((prevCnt) => prevCnt + 1);
    }

    function decrement() {
        if (count == 0) {
            alert("Counter cannot go below 0!");
        } else {
            setCount((prevCnt) => prevCnt - 1);
        }
    }

    function reset() {
        setCount(0);
    }

    function clearTimer() {
        clearInterval(timerId);
        reset();
    }

    useEffect(() => {
        if (count == 10) alert("Counter reached 10!");
        else if (count == 21) clearTimer();
    }, [count]);

    useEffect(() => {
        if (timerActive == true) {
            setTimerId(setInterval(increment, 1000));
        } else {
            clearTimer();
        }

        return clearTimer;
    }, [timerActive]);

    return (
        <>
            <div className="counter-container">{count}</div>
            <div className="control-buttons">
                <button className="increment" onClick={increment}>
                    Increment
                </button>
                <button className="decrement" onClick={decrement}>
                    Decrement
                </button>
                <button className="reset" onClick={reset}>
                    Reset
                </button>
            </div>
            <button
                className="timer"
                type="button"
                onClick={() => setTimerActive((prevState) => !prevState)}
            >
                {timerActive == true ? "Stop Timer" : "Start Timer"}
            </button>
        </>
    );
}
