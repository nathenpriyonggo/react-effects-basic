import { useState, useEffect } from "react";

export default function ProgressBar({ TIMER }) {

    const [remainingTime, setRemainingTime] = useState(3000);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setRemainingTime(prev => prev - 10);
        }, 10);
    
        return () => {
          clearInterval(interval);
        }
      }, [])


    return (
        <progress value={remainingTime} max={TIMER}/>
    )
}