import React from 'react'
import { getStopWatchTime } from '../../helperFunctions';
import './StopWatch.css'

type StopWatchProps = {
    time: number;
}

export default function StopWatch({time}: StopWatchProps) {
    return(
        <div className='p-4 stopwatch'>
            {getStopWatchTime(time)}
        </div>
    )
}