import { useEffect, useState } from 'react';
import './style.css';

const formatDate = (date) => {
    return date.toLocaleDateString(
        undefined,
        {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }
    );
};

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
            Dzisiaj jest {formatDate(currentDate)}
        </p>
    )
};

export default Clock;