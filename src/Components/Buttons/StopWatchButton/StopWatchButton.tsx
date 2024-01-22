import React from 'react'

type StopWatchButtonProps = {
    timeRunning: boolean;
    toggleTimer: () => void;
}

export default function StopWatchButton({timeRunning, toggleTimer}: StopWatchButtonProps) {
    if (!timeRunning) {
        return(
            <button onClick={() => {toggleTimer()}}>
                Start
            </button>
        )
    } else {
        return(
            <button onClick={() => {toggleTimer()}}>
                Stop
            </button>
        )
    }
}