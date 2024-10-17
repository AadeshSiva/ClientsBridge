import { createStore, combineReducers } from 'redux';
import { freelancerReducer } from './FreelancerData';
import { companyReducer } from './CompanyData';

const rootReducer = combineReducers({
    freelancerData: freelancerReducer,
    companyData: companyReducer,
});

const regStore = createStore(rootReducer);

export default regStore;
