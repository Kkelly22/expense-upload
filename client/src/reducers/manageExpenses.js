export default function manageExpenses(state = [], action) {
	switch (action.type) {
	    case 'FETCH_EXPENSES':
	      return action.payload
	    case 'CREATE_EXPENSE':
	      return [ ...state, action.payload] 
	    case 'DELETE_EXPENSE':
	      return state.filter(expense => expense.id !== action.payload)
	    default: return state
	}
}