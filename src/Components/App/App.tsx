import React, {useState, useEffect} from 'react'
import StopWatch from '../StopWatch/StopWatch';
import Buttons from '../Buttons/Buttons';
import SingleLap from '../../interfaces';
import Laps from '../Laps/Laps';

export default function App() {
    const [totalTimeInMs, setTotalTimeInMs] = useState<number>(0); //numerical track (ms) of total time lapsed
    const [timeRunning, setTimeRunning] = useState<boolean>(false); //boolean indicator of whether timer is running or not
    const [timeCounted, setTimeCounted] = useState<boolean>(false); //boolean to indicate a non 0 total time val
    const [laps, setLaps] = useState<SingleLap[]>([]); //Array of all laps
    const [currentLapTimeInMs, setCurrentLapTimeInMs] = useState<number>(0); //Running lap's time - separate from total time

    useEffect(() => {
        let intervalId: any; //Need to store this to clear up the setInterval function.

        if (timeRunning) {
            intervalId = setInterval(() => {
                setTotalTimeInMs(currentTime => currentTime + 10);
                setCurrentLapTimeInMs(currentTime => currentTime + 10);
            }, 10)
        } // if the timer state indicates true, keep resetting the "totalTimeInMS" state to += 10 every 10ms. This way, the time stays in ms
          // I chose to go with increments of 10 because I intend to display just 2 digits in milliseconds. Any increment less than 10
          // would not make a difference to those milliseconds 2-digits.
          
        return () => {clearInterval(intervalId)}; //the cleanup function of useEffect. Avoids continues alteration of the time state.
    }, [timeRunning])

    useEffect(() => {
        if (totalTimeInMs) { // if totalTime is non 0, time counted will be marked true
            setTimeCounted(true);
        } else {
            setTimeCounted(false);
        }
    }, [totalTimeInMs])

    const toggleTimer = (): void => { //Handler function that the stopwatch button will trigger
        if (timeRunning) {
            setTimeRunning(false);
        } else {
            setTimeRunning(true);
        }
    }

    const resetTimer = (): void => {
        setTimeRunning(false);
        setTotalTimeInMs(0);
        setLaps([]);
        setCurrentLapTimeInMs(0);
    }

    const resetLap = (): void => {
        const currentLap: SingleLap = {
            lapNumber: laps.length + 1, //The first lap would be added when array length would be 0 - and so on
            lapTime: currentLapTimeInMs,
            totalTime: totalTimeInMs
        };
        setCurrentLapTimeInMs(0); //Reset lap time so it can start again
        setLaps([...laps, currentLap]); //destructure or spread out all existing elements of laps and
                                        // add/append the current lap at the end. Finally pack them back into an array
    }

    return(
        <section>
            <div className='d-flex flex-column align-items-center'>
                <StopWatch time={totalTimeInMs} />
                <Buttons 
                    timeRunning={timeRunning}
                    toggleTimer={toggleTimer}
                    resetTimer={resetTimer}
                    timeCounted={timeCounted}
                    resetLap={resetLap}    
                />
            </div>
            {laps.length && <div className='row d-flex justify-content-center'> <Laps laps={laps}/> </div>}
        </section>
    )
}