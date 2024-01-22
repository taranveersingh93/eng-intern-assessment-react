import React from 'react'

type StopWatchProps = {
    time: number;
}

export default function StopWatch({time}: StopWatchProps) {
    return(
        <div>
            {time}
        </div>
    )
}