import React, { useEffect, useState } from 'react'

function ReactCounter() {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        let autoCount;

        if (counter === 20) {
            setTimer(false);
        }

        if (timer && counter < 20) {
            autoCount = setInterval(() => {
                setCounter(prev => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(autoCount)
        }
    }, [timer, counter]);


    useEffect(() => {
        if (counter === 10) {
            setTimeout(() => {
                alert("Counter reached 10!");
            }, 200);
        }
    }, [counter]);

    function handleIncrement() {
        setCounter(prev => prev + 1);
    }

    function handleDecrement() {
        if (counter !== 0) {
            setCounter(prev => prev - 1)
        } else {
            alert("Counter cannot go below 0");
        }
    }


    return (
        <div className='counter'>
            <button onClick={() => setTimer(prev => !prev)} className={`${timer ? "stop__btn" : "start__btn"}`}>
                {
                    timer ?
                        <span className='counter__timer-stop'>Stop Timer</span>
                        :
                        <span className='counter__timer-start'>Start Timer</span>
                }
            </button>
            <h1 className='counter__heading'>{counter}</h1>
            <div className='counter__btn'>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={() => setCounter(0)}>Reset</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}

export default ReactCounter