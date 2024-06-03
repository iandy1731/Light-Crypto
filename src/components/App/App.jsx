import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsData } from '../../helpers/getCoinsData';
import { Cryptocurrencies } from '../Cryptocurrencies/cryptocurrencies';
import { Converter } from '../Converter/converter';
import { Header } from '../Header/header';
import './App.css';

export default function App() {
    const dispatch = useDispatch();
    const currencyList = useSelector((store) => store.coins.currencies);

    useEffect(() => {
        dispatch(getCoinsData(currencyList));
    })

    console.log('test')

    return (
        <Fragment>
            <Header />
            <main className="main">
                <article className="light-crypto">
                    <Converter />
                    <Cryptocurrencies />
                </article>
            </main>
        </Fragment>
    );
}