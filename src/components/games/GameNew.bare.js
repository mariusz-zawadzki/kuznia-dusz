import React from 'react'
import { Field, reduxForm } from 'redux-form'

class GameNew extends React.Component {


    submit(values) {
        this.props.saveGame(values);
        this.props.history.push("/games")
    }

    render() {
        const { history } = this.props;
        return (
            <div className="component-game-new center">
                <form onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
                    <Field name="id" type="hidden" component="input" />
                    <div className="form-group">
                        <label>Nazwa: </label>
                        <Field
                            className="form-control"
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Nazwa" />
                    </div>

                    <div className="form-group">
                        <label>Opis: </label>
                        <Field
                            className="form-control"
                            name="description"
                            component="textarea"
                            type="text"
                            placeholder="Opis" />
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary" type="submit">Zapisz</button>
                        <button className="btn btn-danger" type="button" onClick={(e) => {
                            history.goBack();
                        }}>Wróć</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default reduxForm({
    form: 'game-new'
})(GameNew)