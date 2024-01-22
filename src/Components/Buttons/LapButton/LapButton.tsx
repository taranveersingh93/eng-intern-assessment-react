import React from "react";

type LapButtonProps = {
    resetLap: () => void;
}

const LapButton = ({resetLap}: LapButtonProps) => {
    return (
        <button onClick={() => {resetLap()}}>
            Lap
        </button>
    )
}

export default LapButton;