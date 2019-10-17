// Initial State
const initialState = {
  balance: 0,
};

// Actions
const DEPOSIT_FIFTY = 'DEPOSIT_FIFTY';
const DEPOSIT_HUNDRED = 'DEPOSIT_HUNDRED';
const WITHDRAW_FIFTY = 'WITHDRAW_FIFTY';
const WITHDRAW_HUNDRED = 'WITHDRAW_HUNDRED';
const DEPOSIT_CUSTOM_AMOUNT = 'DEPOSIT_CUSTOM_AMOUNT';
const WITHDRAW_CUSTOM_AMOUNT = 'WITHDRAW_CUSTOM_AMOUNT';

// Action Creators
export const depositFiftyActionCreator = () => ({
  type: DEPOSIT_FIFTY,
});

export const depositHundredActionCreator = () => ({
  type: DEPOSIT_HUNDRED,
});

export const withdrawFiftyActionCreator = () => ({
  type: WITHDRAW_FIFTY,
});

export const withdrawHundredActionCreator = () => ({
  type: WITHDRAW_HUNDRED,
});

export const depositCustomAmountActionCreator = () => ({
  type: DEPOSIT_CUSTOM_AMOUNT,
});

export const withdrawCustomAmountActionCreator = () => ({
  type: WITHDRAW_CUSTOM_AMOUNT,
});

// Reducer
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_FIFTY:
      return { ...state, balance: state.balance + 50 };
    case DEPOSIT_HUNDRED:
      return { ...state, balance: state.balance + 100 };
    case WITHDRAW_FIFTY:
      return { ...state, balance: state.balance - 50 };
    case WITHDRAW_HUNDRED:
      return { ...state, balance: state.balance - 100 };
    default:
      return state;
  }
};

export default bankReducer;
