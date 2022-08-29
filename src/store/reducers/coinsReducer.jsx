import { SET_COINS_DATA, SET_CRYPTOS, SET_PREVIOUS_DATA } from "../actions/coinsActions";

const initialState = {
    data: {},
    cryptocurrencies: {},
    previousData: {},
    currencies: {
        USD: { name: "USD", fullName: "United States Dollar" },
        EUR: { name: "EUR", fullName: "Euro" },
        GBP: { name: "GBP", fullName: "Pround Sterling" },
        CHF: { name: "CHF", fullName: "Swiss Franc" },
        AUD: { name: "AUD", fullName: "Australian Dollar" },
        JPY: { name: "JPY", fullName: "Japanese Yen" },
        CNY: { name: "CNY", fullName: "Chinese Yuan" },
        PLN: { name: "PLN", fullName: "Polish Zloty" },
        UAH: { name: "UAH", fullName: "Ukrainian Hryvnia" },
        BYN: { name: "BYN", fullName: "Belarussian Ruble" },
    }
}

export function coinReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COINS_DATA:
            return { ...state, previousData: state.data, data: action.payload };
        case SET_CRYPTOS:
            return { ...state, cryptocurrencies: action.payload };
        case SET_PREVIOUS_DATA:
            return { ...state, previousData: state.data };
        /* case SET_COIN_PRICE:
            return { ...state, socketsData: { ...state.socketsData, [action.payload.coin]: action.payload.price }}; */

        default: return state
    }
}