import { Wrapper } from './styled';
import { useCurrentDate } from './useCurrentDate';

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
    const currentDate = useCurrentDate();

    return (
        <Wrapper>
            Dzisiaj jest {formatDate(currentDate)}
        </Wrapper>
    )
};

export default Clock;