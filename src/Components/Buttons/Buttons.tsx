import StopWatchButton from "./StopWatchButton/StopWatchButton";
import React from "react";
import ResetButton from "./ResetButton/ResetButton";
import LapButton from "./LapButton/LapButton";

type ButtonProps = {
    timeRunning: boolean;
    toggleTimer: () => void; //void function
    resetLap: () => void;
    resetTimer: () => void;
    timeCounted: boolean;
}

const Buttons = ({timeRunning, toggleTimer, resetTimer, timeCounted, resetLap}: ButtonProps) => {
    return ( // only display Reset button if time is paused and time is NOT 0
        <div>
            <StopWatchButton timeRunning={timeRunning} toggleTimer={toggleTimer} />
            {timeRunning && <LapButton resetLap={resetLap} />}
            {!timeRunning && timeCounted && <ResetButton resetTimer={resetTimer} />} 
        </div>
    )
}

export default Buttons;