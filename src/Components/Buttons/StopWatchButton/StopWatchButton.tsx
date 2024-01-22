import React from 'react'

type StopWatchButtonProps = {
    timeRunning: boolean;
    toggleTimer: () => void;
}

export default function StopWatchButton({timeRunning, toggleTimer}: StopWatchButtonProps) {
    if (!timeRunning) {
        return(
            <button className='btn btn-success start-btn' onClick={() => {toggleTimer()}}>
                Start
            </button>
        )
    } else {
        return(
            <button className='btn btn-danger stop-btn' onClick={() => {toggleTimer()}}>
                Stop
            </button>
        )
    }
}