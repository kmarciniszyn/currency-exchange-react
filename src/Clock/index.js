import { useEffect, useState } from 'react';
import './style.css';

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <p className="clock">
            Dzisiaj jest {currentDate.toLocaleDateString(
                undefined,
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                }
            )}
        </p>
    )
};

export default Clock;