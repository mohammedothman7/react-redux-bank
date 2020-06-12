/* eslint-disable complexity */

// Imports
import axios from 'axios';

// Initial State
const initialState = {
  balance: 0,
  transactions: [],
};

// Action Types
const DEPOSIT_FIFTY = 'DEPOSIT_FIFTY';
const DEPOSIT_HUNDRED = 'DEPOSIT_HUNDRED';
const DEPOSIT_CUSTOM_AMOUNT = 'DEPOSIT_CUSTOM_AMOUNT';
const WITHDRAW_FIFTY = 'WITHDRAW_FIFTY';
const WITHDRAW_HUNDRED = 'WITHDRAW_HUNDRED';
const WITHDRAW_CUSTOM_AMOUNT = 'WITHDRAW_CUSTOM_AMOUNT';
const CONVERT_CURRENCY = 'CONVERT_CURRENCY';

// Action Creators
export const depositFiftyActionCreator = sourceCurrency => ({
  type: DEPOSIT_FIFTY,
  sourceCurrency,
});

export const depositHundredActionCreator = sourceCurrency => ({
  type: DEPOSIT_HUNDRED,
  sourceCurrency,
});

export const depositCustomAmountActionCreator = (
  sourceCurrency,
  customAmount
) => ({
  type: DEPOSIT_CUSTOM_AMOUNT,
  sourceCurrency,
  customAmount,
});

export const withdrawFiftyActionCreator = sourceCurrency => ({
  type: WITHDRAW_FIFTY,
  sourceCurrency,
});

export const withdrawHundredActionCreator = sourceCurrency => ({
  type: WITHDRAW_HUNDRED,
  sourceCurrency,
});

export const withdrawCustomAmountActionCreator = (
  sourceCurrency,
  customAmount
) => ({
  type: WITHDRAW_CUSTOM_AMOUNT,
  sourceCurrency,
  customAmount,
});

export const convertCurrencyActionCreator = (
  sourceCurrency,
  targetCurrency,
  conversionRate
) => ({
  type: CONVERT_CURRENCY,
  sourceCurrency,
  targetCurrency,
  conversionRate,
});

// Thunk Creators
export const convertCurrencyThunkCreator = (sourceCurrency, targetCurrency) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://www.freeforexapi.com/api/live?pairs=${sourceCurrency}${targetCurrency}`
      );

      const conversionRate = data.rates[sourceCurrency + targetCurrency].rate;

      dispatch(
        convertCurrencyActionCreator(
          sourceCurrency,
          targetCurrency,
          conversionRate
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
};

// Reducer
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_FIFTY:
      return {
        ...state,
        balance: state.balance + 50,
        transactions: [],
      };

    case DEPOSIT_HUNDRED:
      return {
        ...state,
        balance: state.balance + 100,
        transactions: [],
      };

    case DEPOSIT_CUSTOM_AMOUNT:
      return {
        ...state,
        balance: state.balance + action.customAmount,
        transactions: [],
      };

    case WITHDRAW_FIFTY:
      return {
        ...state,
        balance: state.balance - 50,
        transactions: [],
      };

    case WITHDRAW_HUNDRED:
      return {
        ...state,
        balance: state.balance - 100,
        transactions: [],
      };

    case WITHDRAW_CUSTOM_AMOUNT:
      return {
        ...state,
        balance: state.balance - action.customAmount,
        transactions: [],
      };

    case CONVERT_CURRENCY:
      return {
        ...state,
        balance: state.balance * action.conversionRate,
        transactions: [],
      };

    default:
      return state;
  }
};

// Exports
export default bankReducer;
