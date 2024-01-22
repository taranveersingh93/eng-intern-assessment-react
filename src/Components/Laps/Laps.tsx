import React from "react";
import SingleLap from "../../interfaces";
import SingleLapRow from "./SingleLapRow/SingleLapRow";

type LapsProps = {
    laps: SingleLap[];
}

const Laps = ({laps}: LapsProps) => {
    const lapsCode = () => {
        const descendingLaps = laps.sort((a,b) => b.lapNumber - a.lapNumber); //Sort laps from latest to oldest
        return descendingLaps.map(lap => <SingleLapRow key={lap.lapNumber} lap={lap} />) //generate table row code for each lap
    }

    return (
        <div className="col-12">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Lap Number</th>
                        <th scope="col">Lap Time</th>
                        <th scope="col">Total Time</th>
                    </tr>
                </thead>
                <tbody>
                    {lapsCode()}
                </tbody>
            </table>
        </div>
    )
}

export default Laps;