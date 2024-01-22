import React from "react";

type ResetButtonProps = {
    resetTimer: () => void;
}

const ResetButton = ({resetTimer}: ResetButtonProps) => {
    return (
        <button className="btn btn-primary ms-3 reset-btn" onClick={() => {resetTimer()}}>
            Reset
        </button>
    )
}

export default ResetButton;