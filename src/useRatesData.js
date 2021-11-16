import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ status: "loading" });

    useEffect(() => {
        setTimeout(() => {
            const apiURL = "https://api.exchangerate.host/latest?base=PLN?source=ecb";
            axios.get(apiURL)
                .then(response => {
                    setRatesData({
                        status: "success",
                        base: response.data.base,
                        date: response.data.date,
                        rates: response.data.rates,
                    });
                })
                .catch(() => {
                    setRatesData({
                        status: "error",
                    });
                });
        }, 1000);
    }, []);

    return ratesData;
};