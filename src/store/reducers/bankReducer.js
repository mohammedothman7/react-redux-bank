// Initial State
const initialState = {
  balance: 0,
};

// Actions Types
const DEPOSIT_FIFTY = 'DEPOSIT_FIFTY';
const DEPOSIT_ONE_HUNDRED = 'DEPOSIT_ONE_HUNDRED';
const WITHDRAW_FIFTY = 'WITHDRAW_FIFTY';
const WITHDRAW_ONE_HUNDRED = 'WITHDRAW_ONE_HUNDRED';

// Action Creators
export const depositFiftyActionCreator = () => ({
  type: DEPOSIT_FIFTY,
});

export const depositOneHundredActionCreator = () => ({
  type: DEPOSIT_ONE_HUNDRED,
});

export const withdrawFiftyActionCreator = () => ({
  type: WITHDRAW_FIFTY,
});

export const withdrawOneHundredActionCreator = () => ({
  type: WITHDRAW_ONE_HUNDRED,
});

// Reducer
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    // Your cases here
    case DEPOSIT_FIFTY:
      return {
        ...state,
        balance: state.balance + 50,
      };

    case DEPOSIT_ONE_HUNDRED:
      return {
        ...state,
        balance: state.balance + 100,
      };

    case WITHDRAW_FIFTY:
      return {
        ...state,
        balance: state.balance - 50,
      };

    case WITHDRAW_ONE_HUNDRED:
      return {
        ...state,
        balance: state.balance - 100,
      };

    default:
      return state;
  }
};

// Exports
export default bankReducer;
