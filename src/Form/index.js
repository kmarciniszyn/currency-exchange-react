import { useState } from 'react';
import { currencies } from '../currencies';
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

const Form = ({ calculateResult, result }) => {
    const [fromCurrency, setFromCurrency] = useState(currencies[0].short);
    const [toCurrency, setToCurrency] = useState(currencies[1].short);
    const [amount, setAmount] = useState(1);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(fromCurrency, toCurrency, amount);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
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
                            {currencies.map(currency => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.name} ({currency.short})
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
                            {currencies.map(currency => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.name} ({currency.short})
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
                Kursy na dzień 02/11/21
            </Info>
        </StyledForm>
    );
};

export default Form;