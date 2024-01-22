import React, {useState, useEffect} from 'react'

export default function App() {
    const [totalTimeInMs, setTotalTimeInMs] = useState<number>(0); //numerical track (ms) of total time lapsed
    const [timeRunning, setTimeRunning] = useState<boolean>(false); //boolean indicator of whether timer is running or not

    useEffect(() => {
        let intervalId: any; //Need to store this to clear up the setInterval function.

        if (timeRunning) {
            intervalId = setInterval(() => {
                setTotalTimeInMs(currentTime => currentTime + 10);
            }, 10)
        } // if the timer state indicates true, keep resetting the "totalTimeInMS" state to += 10 every 10ms. This way, the time stays in ms
          // I chose to go with increments of 10 because I intend to display just 2 digits in milliseconds. Any increment less than 10
          // would not make a difference to those milliseconds 2-digits.
          
        return () => {clearInterval(intervalId)}; //the cleanup function of useEffect. Avoids continues alteration of the time state.
    }, [timeRunning])

    const toggleTimer = (): void => { //Handler function that the stopwatch button will trigger
        if (timeRunning) {
            setTimeRunning(false);
        } else {
            setTimeRunning(true);
        }
    }

    return(
        <div>
            
        </div>
    )
}