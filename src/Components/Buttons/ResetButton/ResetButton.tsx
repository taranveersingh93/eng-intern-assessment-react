import React from "react";

type ResetButtonProps = {
    resetTimer: () => void;
}

const ResetButton = ({resetTimer}: ResetButtonProps) => {
    return (
        <button onClick={() => {resetTimer()}}>
            Reset
        </button>
    )
}

export default ResetButton;