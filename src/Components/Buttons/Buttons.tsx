import StopWatchButton from "./StopWatchButton/StopWatchButton";
import React from "react";

type ButtonProps = {
    timeRunning: boolean;
    toggleTimer: () => void; //void function
}

const Buttons = ({timeRunning, toggleTimer}: ButtonProps) => {
    return (
        <div>
            <StopWatchButton timeRunning={timeRunning} toggleTimer={toggleTimer} />
        </div>
    )
}

export default Buttons;