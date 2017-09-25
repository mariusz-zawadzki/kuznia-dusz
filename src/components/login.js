import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import './login.css'
// import TinyMCE from 'react-tinymce';
// import Mention from 'react-tinymce-mention';
import { EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import 'draft-js-mention-plugin/lib/plugin.css';
import SimpleMentionEditor  from './simple-mention-editor'
const BASE_URL = process.env.PUBLIC_URL+"/";
class MyEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
      return (
          <div className="editor">
            <SimpleMentionEditor  editorState={this.state.editorState} onChange={this.onChange} />
          </div>
      );
    }
  }

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
            this.props.history.push(BASE_URL);
        });
    }


    render() {

        const { handleSubmit } = this.props;
        return (
            <div className="row align-items-center login">
                <div className="col-sm">
                    <h3>Dobra, to jest male demo tego co można zrobić mając trochę czasu i chęci. <br />
                        Zacznijcie pisać w pudeku poniżej. Na początek drobne kontrolki... aha <br />
                        I spróbujcie wpisać '@' a potem swoje imię :-)<br />
                        Aha i jeszcze jako bonus spróbujcie od '#' :D
                    </h3>
                    <MyEditor />
                    <h4>Aha i poniżejmozna wpisac cokolwiek i kliknąć zaloguj, pokaże się taki testowy main page, zupene kpiuj wklej :-)</h4>
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