import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'
class GameNew extends React.Component {


    submit(values) {
        this.props.saveCharacter(values);
        this.props.history.push(`/games/${this.props.match.params.gameId}/characters`)
    }

    render() {
        return (
            <form className="component-character-new" onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
                <Field name="id" type="hidden" component="input" />
                <Field name="gameId" type="hidden" component="input" />
                <div>
                    <label>Nazwa: </label>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Imię" />
                </div>

                <div>
                    <label>Opis: </label>
                    <Field
                        name="description"
                        component="textarea"
                        type="text"
                        placeholder="Opis" />
                </div>
                <button type="submit">Zapisz</button>
            </form>
        );
    }
};
const mapStateToProps = (state, ownProps) => {
    //in case of editing
    if (ownProps.match) {
        let newprops = {
            // properly match initial values8
            // initialValues: state.characters.find((characters) => characters.id === ownProps.match.params.id)
        }
        return newprops;
    }
    return {};
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'game-new'
})(GameNew))