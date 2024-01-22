import React from "react";
import SingleLap from "../../../interfaces";

type SingleLapProp = {
    lap: SingleLap;
}

const SingleLapRow = ({lap}: SingleLapProp) => {
    return (
        <tr key={lap.lapNumber}>
            <th scope="row">{lap.lapNumber}</th>
            <td scope="row">{lap.lapTime}</td>
            <td scope="row">{lap.totalTime}</td>
        </tr>
    )
}

export default SingleLapRow;