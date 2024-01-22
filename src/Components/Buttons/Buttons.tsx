import StopWatchButton from "./StopWatchButton/StopWatchButton";
import React from "react";
import ResetButton from "./ResetButton/ResetButton";

type ButtonProps = {
    timeRunning: boolean;
    toggleTimer: () => void; //void function
    resetTimer: () => void;
    timeCounted: boolean;
}

const Buttons = ({timeRunning, toggleTimer, resetTimer, timeCounted}: ButtonProps) => {
    return ( // only display Reset button if time is paused and time is NOT 0
        <div>
            <StopWatchButton timeRunning={timeRunning} toggleTimer={toggleTimer} />
            {!timeRunning && timeCounted && <ResetButton resetTimer={resetTimer} />} 
        </div>
    )
}

export default Buttons;