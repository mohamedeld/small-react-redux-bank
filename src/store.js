import { combineReducers, createStore } from "redux";
import { accountReducer } from "./features/accounts/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

store.dispatch({ type: "account/deposit", payload: 500 });
store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    purpose: "buy a car",
  },
});

export default store;
