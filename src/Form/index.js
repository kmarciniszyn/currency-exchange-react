import { useState } from 'react';
import { currencies } from '../currencies';
import './style.css';

const Form = () => {
    const [fromCurrency, setFromCurrency] = useState(currencies[0].short);
    const [toCurrency, setToCurrency] = useState(currencies[1].short);
    const [amount, setAmount] = useState(1);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Przelicz z:
                        </span>
                        <select
                            className="form__field form__field--select"
                            value={fromCurrency}
                            onChange={({ target }) => setFromCurrency(target.value)}
                        >
                            {currencies.map(currency => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.name} ({currency.short})
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Przelicz na:
                        </span>
                        <select
                            className="form__field form__field--select"
                            value={toCurrency}
                            onChange={({ target }) => setToCurrency(target.value)}
                        >
                            {currencies.map(currency => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.name} ({currency.short})
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota:
                        </span>
                        <input
                            className="form__field"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            min="0"
                            step="0.01"
                            required
                        />
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">
                    Oblicz
                </button>
            </p>
            <p className="form__info">
                Kursy na dzień 02/11/21
            </p>
        </form>
    );
};

export default Form;