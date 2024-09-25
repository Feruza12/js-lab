import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const [visibility, setVisibility] = useState<boolean>(false)
  const [timerRunning, setTimerRunning] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (timerRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 20) {
            return prevCount + 1;
          } else {
            setTimerRunning(false);
            return prevCount;
          }
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timerRunning]);

  function increment() {
    setCount(count + 1)
    setVisibility(false)
  }

  function decrement() {
    if(count > 0){
      setCount(count - 1)
    } else {
      setVisibility(true)
    }
  }

  function toggleTimerRunning() {
    setTimerRunning(!timerRunning)
    console.log(timerRunning);
  }

  return (
    <div className='counter'>
      <div className='count'>{count}</div>
      {visibility && <div className='warning'>Counter cannot go below 0</div>}
      {count == 10 && <div className='info'>Counter reached 10!</div>}
      <div className='btns'>
        <button onClick={increment} style={{backgroundColor: 'seagreen'}} >Increment</button>
        <button onClick={decrement} style={{backgroundColor: 'crimson'}}>Decrement</button>
        <button
          onClick={() => {setCount(0), setVisibility(false)}}
          style={{backgroundColor: 'gold'}}
        >Reset</button>
        <button onClick={toggleTimerRunning}>
          {timerRunning ? 'Stop Timer' : 'Start Timer'}
        </button>
      </div>
    </div>
  );
};

export default Counter;