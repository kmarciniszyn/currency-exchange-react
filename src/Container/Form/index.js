import { useState } from 'react';
import Result from './Result';
import {
    Fieldset,
    LabelText,
    StyledForm,
    Button,
    Info,
    Legend,
    Field
} from './styled';

const Form = ({ calculateResult, result, ratesData }) => {
    const [fromCurrency, setFromCurrency] = useState("PLN");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(fromCurrency, toCurrency, amount);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            {ratesData.status === "loading" ? (
                <Info>
                    Ładowanie kursów walut z Europejskiego Banku Centralnego...
                </Info>
            ) :
                (ratesData.status === "error" ? (
                    <Info error>
                        Ups! Wystąpił błąd. <br />
                        Sprawdź połączenie z internetem. <br />
                        Jeśli je masz to spróbuj ponownie później.
                    </Info>
                ) :
                    (
                        <>
                            <Fieldset>
                                <Legend>Kalkulator walut</Legend>
                                <p>
                                    <label>
                                        <LabelText>
                                            Przelicz z:
                                        </LabelText>
                                        <Field
                                            as="select"
                                            special
                                            value={fromCurrency}
                                            onChange={({ target }) => setFromCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map(short => (
                                                <option key={short} value={short}>
                                                    {short}
                                                </option>
                                            ))}
                                        </Field>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>
                                            Przelicz na:
                                        </LabelText>
                                        <Field
                                            as="select"
                                            special
                                            value={toCurrency}
                                            onChange={({ target }) => setToCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map(short => (
                                                <option key={short} value={short}>
                                                    {short}
                                                </option>
                                            ))}
                                        </Field>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>
                                            Kwota:
                                        </LabelText>
                                        <Field
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            required
                                        />
                                    </label>
                                </p>
                            </Fieldset>
                            <p>
                                <Button>
                                    Oblicz
                                </Button>
                            </p>
                            <Result
                                result={result}
                            />
                            <Info>
                                Kursy walut pochodzą z Europejskiego Banku Centralnego
                                <br />
                                Kursy aktualne na dzień {ratesData.date}
                            </Info>
                        </>
                    ))}
        </StyledForm>
    );
};

export default Form;