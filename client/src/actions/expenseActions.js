
export const fetchExpenses = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`expenses`, data)
      .then(response => response.json())
      .then(expenses => dispatch({
          type: 'FETCH_EXPENSES',
          payload: expenses
      }))
      .catch(err => err)
  }
}

export const createExpense = expense => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ expense })
  }
  
  return dispatch => {
    fetch(`expenses`, data)
      .then( response => {
        if (!response.ok) { throw response }
          alert("Upload Successful!")
          return response.json()  //we only get here if there is no error
        })
     // .then(response => response.json())
      .then(expense => {
        dispatch({
              type: 'CREATE_EXPENSE',
              payload: expense
            })})
      .catch(err => alert("Upload Failed")) 
  }
}

export const deleteExpense = expense => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`expenses/${expense.id}`, data)
      .then(response => response.json())
      .then(expense => dispatch({
        type: 'DELETE_EXPENSE',
        payload: expense.id
      }))
      .catch(err => err)
  }
}