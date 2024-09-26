import React, { useState, useEffect } from 'react';
import  "./CounterApp.css"
const CounterApp: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

    const increment = () => {
        if (counter < 20) {
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const reset = () => {
        setCounter(0);
        setIsTimerRunning(false);
    };

    const toggleTimer = () => {
        setIsTimerRunning(!isTimerRunning);
    };

    useEffect(() => {
        let timer: number | undefined;

        if (isTimerRunning && counter < 20) {
            timer = window.setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }

        if (counter >= 20 && timer) {
            setIsTimerRunning(false);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isTimerRunning, counter]);

    return (
        <div className="counter_container">
            <h1>Counter: {counter}</h1>
            {counter === 10 && <p>Counter reached 10!</p>}
            {counter === 20 && <p>Counter reached 20! Timer stopped.</p>}
            {counter === 0 && <p>Counter cannot go below 0</p>}

            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>

            <div>
                <button onClick={toggleTimer}>
                    {isTimerRunning ? 'Stop Timer' : 'Start Timer'}
                </button>
            </div>
        </div>
    );
};

export default CounterApp;
