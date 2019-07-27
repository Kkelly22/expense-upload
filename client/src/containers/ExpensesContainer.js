import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import ExpenseInput from '../components/expenses/ExpenseInput'
import { fetchExpenses } from '../actions/expenseActions'


class ExpensesContainer extends Component {

  render() {
    return (
      <div>
      	<ExpenseInput/>
      </div>
    )
  }
}

const mapStateToProps =  state  => ({ 
  expenses: state.expenses
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchExpenses
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer)