import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import {Field, reduxForm} from 'redux-form'
import {Button, ButtonGroup} from 'react-bootstrap'
import './login.css'
import TinyMCE from 'react-tinymce';
import Mention from 'react-tinymce-mention';

class Login extends Component {

    renderTitleField(field) {
        const {meta: {touched, error}} = field;
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
        const {handleSubmit} = this.props;
        return (
            <div className="row align-items-center login">
                <div className="col-sm">
                    <div>

                        <section className="row text-center placeholders">
                            <div>
                                <TinyMCE
                                    content={''}
                                    config={{
                                        extended_valid_elements: 'blockquote[dir|style|cite|class|dir<ltr?rtl],iframe[src|frameborder|style|scrolling|class|width|height|name|align],pre',
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'paste',
                                            'autolink',
                                            'autoresize',
                                            'code',
                                            'image',
                                            'link',
                                            'media',
                                            'mention',
                                            'tabfocus'
                                        ],
                                        //
                                        // external_plugins: {
                                        //     'mention' : 'http://stevendevooght.github.io/tinyMCE-mention/javascripts/tinymce/plugins/mention/plugin.js'
                                        // },
                                        //
                                        mentions: {
                                        //     insertFrom: 'email',
                                        //     'insert':  function (item) {
                                        //         return '<span>' + item + '</span>&nbsp;';
                                        //     },
                                        //
                                        // source: [
                                        //         {name: 'Jammie Marbury', email:'mariusz.@gmail.com'},
                                        //         {name: 'Jenniffer Caffey'},
                                        //         {name: 'Paul Hollen'},
                                        //         {name: 'Isabel Lenzi'},
                                        //         {name: 'Rebecka Kennell'},
                                        //         {name: 'Collette Janis'},
                                        //         {name: 'Bryon Kawamoto'},
                                        //         {name: 'Jerald Mozingo'},
                                        //         {name: 'Carlena Bachelor'},
                                        //         {name: 'Jacinta Diver'},
                                        //         {name: 'Cameron Libbey'},
                                        //         {name: 'Romana Matsunaga'},
                                        //         {name: 'Laurette Ernst'},
                                        //         {name: 'Gilma Groom'},
                                        //         {name: 'Lewis Gillis'},
                                        //         {name: 'Weston Defoor'},
                                        //         {name: 'Alejandrina Simmer'},
                                        //         {name: 'Alejandra Helbing'},
                                        //         {name: 'Yvette Fielding'},
                                        //         {name: 'Shirely Besaw'},
                                        //         {name: 'Laurel Dafoe'},
                                        //         {name: 'Shantel Calley'},
                                        //         {name: 'Aleta Bolyard'},
                                        //         {name: 'Tuyet Ybarbo'},
                                        //         {name: 'Christy Voris'},
                                        //         {name: 'Hilda Hamlett'},
                                        //         {name: 'Ying Tefft'},
                                        //         {name: 'Lilliana Fulford'},
                                        //         {name: 'Jama Brough'},
                                        //         {name: 'Minerva Bixby'},
                                        //         {name: 'Jacquelin Lauber'},
                                        //         {name: 'Lanette Hoke'},
                                        //         {name: 'Virgil Roehr'},
                                        //         {name: 'Melodi Rathburn'},
                                        //         {name: 'Tressa Cade'},
                                        //         {name: 'Florentina Seigel'},
                                        //         {name: 'Santina Maust'},
                                        //         {name: 'Sean Spidle'},
                                        //         {name: 'Henrietta Murtagh'},
                                        //         {name: 'Matilde Tynan'},
                                        //         {name: 'Claude Putman'},
                                        //         {name: 'Ardell Castiglia'},
                                        //         {name: 'Alona Mally'},
                                        //         {name: 'Elizabet Gebhart'},
                                        //         {name: 'Maye Wilken'},
                                        //         {name: 'Xenia Gin'},
                                        //         {name: 'Edith Schebler'},
                                        //         {name: 'Brianna Repka'},
                                        //         {name: 'Marcella Thronson'},
                                        //         {name: 'Theresia Provenzano'}
                                        //     ],
                                        //     delay: 200,
                                        },
                                        // theme: 'kindling',
                                        toolbar: 'bold italic underline strikethrough | bullist numlist blockquote | link unlink | image media | removeformat code'
                                    }}
                                />
                                <Mention dataSource={[
                                'hello',
                                'how',
                                'are',
                                '_you',
                                '_are',
                                '_yoyo',
                                '__rara'
                            ]}
                            />
                            </div>
                        </section>
                    </div>
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
    return {loggedIn: state.loggedIn}
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