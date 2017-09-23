import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Field, reduxForm } from 'redux-form'
import {Button, ButtonGroup} from 'react-bootstrap'
import './login.css'
class Login extends Component {

  renderTitleField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.login(!this.props.loggedIn, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row align-items-center login">
        <div className="col-sm">
          <div>
          <ButtonGroup>
            <Button onClick={(e)=> {alert(e);}}>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
          </div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <Field
              label="Email"
              name="email"
              component={this.renderTitleField}
            />
            <Field
              label="Password"
              name="password"
              component={this.renderTitleField}
            />
            <Button type="submit" bsStyle="primary">Submit</Button>
          </form>
        </div>
      </div>
    );
  };
}
function mapStateToProps(state) {
  return { loggedIn: state.loggedIn }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Enter a valid login/email!"
  }
  if (!values.password) {
    errors.password = 'Enter valid password.'
  }
  // if (!values.content) {
  //   errors.content = "Enter some content please!"
  // }
  return errors;
}
export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'LoginForm'
})(Login));