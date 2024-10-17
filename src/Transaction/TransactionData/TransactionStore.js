import { createStore, combineReducers } from 'redux';
import { TransReducer } from './TransactionDetails';

const rootReducer = combineReducers({
    transactionData: TransReducer,
});

const store = createStore(rootReducer);

export default store;
