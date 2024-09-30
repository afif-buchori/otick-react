import React, { useState, useEffect } from "react";
import moment from "moment";

function CountdownTime({ endDate = "2024-11-25 08:30" }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = moment();
            const end = moment(endDate, "YYYY-MM-DD HH:mm");
            const duration = moment.duration(end.diff(now));

            if (duration.asSeconds() <= 0) {
                clearInterval(intervalId);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            } else {
                setTimeLeft({
                    days: Math.floor(duration.asDays()),
                    hours: duration.hours(),
                    minutes: duration.minutes(),
                    seconds: duration.seconds(),
                });
            }
        };

        // Update countdown immediately and then set interval
        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, [endDate]);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.days }}></span>
                </span>
                days
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                min
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                sec
            </div>
        </div>
    );
}

export default CountdownTime;
