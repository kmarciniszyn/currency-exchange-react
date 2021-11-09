const Result = ({ result }) => (
    <p>
        {!!result && (
            <>
                {result.amount.toFixed(2)}&nbsp;{result.fromCurrency}&nbsp;=
                {" "}
                <strong>
                    {result.resultAmount.toFixed(2)}&nbsp;{result.toCurrency}
                </strong>
            </>
        )}
    </p>
);

export default Result;