const getStopWatchTime = (time : number): string => {
    const milliseconds: number = Math.floor(time); // Since time is already in ms, no processing needed
    const seconds: number = Math.floor((time/1000)); //1000ms make 1 second and also, I don't want to display decimals in seconds representing ms so using Math floor
    const minutes: number = Math.floor((seconds/60));
    const hours: number = Math.floor((minutes/60));

    //Because I want the milliseconds to reset to 0 once they complete a full second, I am only displaying the remainder of the time when 
    //divided by 1000. So milliseconds will always represent the "spillover" ms after the seconds have been completed.
    //The padstart decides how many digits I want to show (3) and the second param is for what I want to show if there are no 
    //digits filling in those spots.
    const millisecondsString: string = String(milliseconds%1000).padStart(3, "0").slice(0, -1);
    const secondsString: string = String(seconds%60).padStart(2, "0");
    const minutesString: string = String(minutes%60).padStart(2, "0");
    const hoursString: string = String(hours).padStart(2,"0");
    return `${hoursString}:${minutesString}:${secondsString}:${millisecondsString}`;
}

export {getStopWatchTime};