import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import './login.css'

const BASE_URL = process.env.PUBLIC_URL+"/";


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
            this.props.history.push(BASE_URL+"postacie");
        });
    }


    render() {

        const { handleSubmit } = this.props;
        return (
            <div className="login container">
                <h4>wystarczy nacisnąc guzik</h4>
                <div className="row align-items-center">
                    <div className="col-sm">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        characters: state.characters
    }
}

function validate(values) {
    const errors = {};
    // if (!values.email) {
    //     errors.email = "Enter a valid login/email!"
    // }
    // if (!values.password) {
    //     errors.password = 'Enter valid password.'
    // }
    return errors;
}

export default connect(mapStateToProps, actions)(reduxForm({
    validate,
    form: 'LoginForm'
})(Login));