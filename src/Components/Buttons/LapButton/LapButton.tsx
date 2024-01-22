import React from "react";

type LapButtonProps = {
    resetLap: () => void;
}

const LapButton = ({resetLap}: LapButtonProps) => {
    return (
        <button className="btn btn-warning ms-3 lap-btn" onClick={() => {resetLap()}}>
            Lap
        </button>
    )
}

export default LapButton;