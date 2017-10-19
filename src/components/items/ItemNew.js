import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import MyCKEditor from '../editor/ckeditor'


const FileUpload = ({ input, type }) =>{
    input.value = undefined;
  return <input type={type} {...input} />
}


class ItemNew extends React.Component {


    submit(values) {
        console.log(values);
        // const gameId = this.props.match.params.gameId;
        this.props.saveItem(values);
        this.props.history.push(`/games/${values.gameId}/items`)
    }

    render() {
        const { history } = this.props;
        return (
            <div className="component-character-new center">
                <form onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
                    <Field name="id" type="hidden" component="input" />
                    <Field name="gameId" type="hidden" component="input" />
                    <div className="form-group">
                        <label>Imię: </label>
                        <Field
                            className="form-control"
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Imię" />
                    </div>

                    <div className="form-group">
                        <label>Opis: </label>
                        <Field
                            className="form-control"
                            name="description"
                            component={MyCKEditor}
                            type="text"
                            placeholder="Opis" />
                    </div>

                    {/* <div className="form-group">
                        <label>Zdjęcie: </label>
                        <Field 
                            className="form-control"
                            name="image" 
                            component={FileUpload} type="file" />

                    </div> */}
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
const mapStateToProps = (state, ownProps) => {
    //in case of editing
    if (ownProps.match && ownProps.match.params.gameId) {
        const gameId = ownProps.match.params.gameId;
        const itemId =  ownProps.match.params.id;
        const gameItems = state.items[gameId] || {ids:[],map:{}};
        let newprops = {
            // properly match initial values8
            initialValues: {
                ...gameItems.map[itemId],
                gameId
            }
        }
        return newprops;
    }
    return {};
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'item-new'
})(ItemNew))