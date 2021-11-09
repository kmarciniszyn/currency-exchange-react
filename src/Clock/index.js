import { useEffect, useState } from 'react';
import { Wrapper } from './styled';

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
        <Wrapper>
            Dzisiaj jest {formatDate(currentDate)}
        </Wrapper>
    )
};

export default Clock;