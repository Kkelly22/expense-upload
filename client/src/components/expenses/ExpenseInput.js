import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createExpense } from '../../actions/expenseActions'

class ExpenseInput extends Component {
  state = {
    name: '',
    email: '',
    phone_number: '',
    description: '',
    attachment: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createExpense({...this.state});
    this.setState({
      name: '',
      email: '',
      phone_number: '',
      description: '',
      attachment: ''
    });
  }

  alertUser () {
    alert("Please make sure information on form is accurate! This cannot be undone!");
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
          <label>Description (Max 1000 Characters) </label>
          <br />
          <textarea name="description" maxlength="1000" style={{height:'100px', width:'200px'}} value={this.state.description} onChange={(event) => this.handleOnChange(event)}></textarea>
          <br />
          <label>Attachment</label>
          <input type="text" name="attachment" value={this.state.attachment} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Create Expense Report</label>
          <input type="submit" onClick={this.alertUser}/>
        </form>
      </div>
    );
  }
};



const mapDispatchToProps = dispatch => bindActionCreators({
  createExpense
}, dispatch)

export default connect(null, mapDispatchToProps)(ExpenseInput)