import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm} from  'redux-form'
import { Redirect } from 'react-router-dom'

import { createExpense } from '../../actions/expenseActions'

class ExpenseInput extends Component {
  state = {
    name: '',
    email: '',
    phone_number: '',
    cost: '',
    description: '',
    attachment: ''
  }

  handleOnChange(event) {
    // if (event.target.name === "attachment") {
    //   this.setState({
    //     [event.target.name]: event.target.files[0]
    //   })
    // } else
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    let c = window.confirm("Please make sure information on form is accurate! This cannot be undone! Proceed?");
    if (c == false) {
      return <Redirect to='/' />
      return false;
    } else {
      event.preventDefault();
      this.props.createExpense({...this.state}, () => this.props.history.push('/'));
      this.setState({
        name: '',
        email: '',
        phone_number: '',
        cost: '',
        description: '',
        attachment: ''
      });
    }
  }

  extractFilename (path) {
    if (path.substr(0, 12) == "C:\\fakepath\\")
      return path.substr(12); // modern browser
    var x;
    x = path.lastIndexOf('/');
    if (x >= 0) // Unix-based path
      return path.substr(x+1);
    x = path.lastIndexOf('\\');
    if (x >= 0) // Windows-based path
      return path.substr(x+1);
    return path; // just the file name
  }

  updateFilename (event) {
   this.setState({
      [event.target.name]: this.extractFilename(event.target.value)
    })
  }


  render() {
    return (
      <div>
      <h3>Upload Your Expense Here:</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Phone Number</label>
          <input type="text" name="phone_number" value={this.state.phone_number} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Amount In Dollars</label>
          <input type="text" name="cost" value={this.state.cost} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Description (Max 1000 Characters) </label>
          <br />
          <div className="richtextarea">
            <textarea name="description" maxLength="1000" style={{height:'100px', width:'300px'}} value={this.state.description} onChange={(event) => this.handleOnChange(event)}></textarea>
          </div>
          <br />
          <label>Attachment</label>
          <Field component="input" type="file" id="attachment" name="attachment" value={null} onChange={(event) => this.updateFilename(event)} />
          <br />
          <label>Create Expense Report</label>
          <button type="submit" style={{color:'blue'}}>Submit</button>
        </form>
      </div>
    );
  }
};


const newExpenseInput=reduxForm({
  form: 'ExpenseInput'
})(ExpenseInput);

const mapDispatchToProps = dispatch => bindActionCreators({
  createExpense
}, dispatch)

export default connect(null, mapDispatchToProps)(newExpenseInput)