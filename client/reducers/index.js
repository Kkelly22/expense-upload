import { combineReducers } from "redux";
import manageExpenses from './manageExpenses';
 
const rootReducer = combineReducers({
  expenses: manageExpenses
});
 
export default rootReducer;