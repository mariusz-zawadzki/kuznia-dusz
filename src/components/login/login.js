import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import './login.css'
import * as firebase from 'firebase'
const BASE_URL = process.env.PUBLIC_URL+"/";

let config = {
    apiKey: "AIzaSyDBF6MaupuuexWvdt54OW7t5UHcs1rAijo",
    authDomain: "kuznia-dusz.firebaseapp.com",
    databaseURL: "https://kuznia-dusz.firebaseio.com",
    projectId: "kuznia-dusz",
    storageBucket: "kuznia-dusz.appspot.com",
    messagingSenderId: "794297029805"
  };

  
firebase.initializeApp(config);
class Login extends Component {


    signIn(){
        let provider = new firebase.auth.GoogleAuthProvider();
        let history = this.props.history;
        let lgoin = this.props.login.bind(this);
        let fun =function(){
            console.log('funin')
            lgoin(true, () => {
                console.log('push!')
                history.push(BASE_URL+"postacie");
            });
        }
        fun = fun.bind(this);
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(result)
            localStorage.setItem('auth', result)
            fun()

            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

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
                        <Button bsStyle="primary" onClick={this.signIn.bind(this)}>Google sign in!</Button>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} style={{'display':'none'}}>
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