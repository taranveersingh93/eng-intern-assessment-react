import React from "react";
import SingleLap from "../../../interfaces";
import { getStopWatchTime } from "../../../helperFunctions";

type SingleLapProp = {
    lap: SingleLap;
}

const SingleLapRow = ({lap}: SingleLapProp) => {
    return (
        <tr key={lap.lapNumber}>
            <th scope="row">{lap.lapNumber}</th>
            <td className="laptime">{getStopWatchTime(lap.lapTime)}</td>
            <td className="totaltime">{getStopWatchTime(lap.totalTime)}</td>
        </tr>
    )
}

export default SingleLapRow;