import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import MyCKEditor from '../editor/ckeditor'


const FileUpload = (props) =>{
    console.log(props)
    const { input, type } = props;
    input.value = undefined;
  return <input type={type} {...input} onChange={event => {
    input.onChange(event)
    getBase64(event.target.files[0], (data)=>props.updatePreview(data));
  }}/>
}
function getBase64(file, onload) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = onload;
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

class ItemNew extends React.Component {

    constructor(props){
        super(props);
        this.updateImage.bind(this);
        // this.state={
            // image
        // }
    }

    updateImage(data){
        debugger;
        console.log("Update image this",this,data);
        this.imageInput.src = data.target.result;
    }


    submit(values) {
        this.props.saveItem(values);
        this.props.history.push(`/games/${values.gameId}/items`)
    }

    render() {
        const { history,item } = this.props;
        let preview = "";
        // if(this.props.image){
            console.log(this.props)
        // }
        let src = "";
        let alt =  "Brak";
        if(item && item.image && item.image.link)
        {
            src = item.image.link;
        }
        if(item && item.name){
            alt = item.name;
        }
        if(item && item.image && item.image.pending){
            alt = "Wgrywa się."
        }
        preview = <img style={{width:"100%"}} alt={alt} src={src} ref={(input) => {this.imageInput = input;}} />
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

                    <div className="form-group">
                        <label>Zdjęcie: </label>
                        <Field 
                            className="form-control"
                            name="image" 
                            component={FileUpload}
                             type="file"
                             updatePreview={(d)=>this.updateImage(d)} />
                    </div>

                    <div className="buttons">
                        <button className="btn btn-primary" type="submit">Zapisz</button>
                        <button className="btn btn-danger" type="button" onClick={(e) => {
                            history.goBack();
                        }}>Wróć</button>
                    </div>
                </form>
                        {preview}
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
        const item = gameItems.map[itemId];
        let newprops = {
            // properly match initial values8
            initialValues: {
                ...item,
                gameId
            },
            item
        }
        return newprops;
    }
    return {};
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'item-new'
})(ItemNew))