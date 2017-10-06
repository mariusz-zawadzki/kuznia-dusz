import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import {ContentState, Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
import SimpleEditor from '../simple-mention-editor'
import * as actions from '../../actions'
class CharacterEditor extends React.Component {

    constructor(props) {
        super(props);
        let editorState;
        let name = "Mock name";
        let character = this.props.character;
        const content = this.props.content || character.description
        if (character) {
            if(character.raw)
            {
                editorState = content;
            }
            else
            {
                const processedHTML = DraftPasteProcessor.processHTML(content);
                const contentState = ContentState.createFromBlockArray(processedHTML);
                editorState = EditorState.createWithContent(contentState);
            }
            //move focus to the end.
            // editorState = EditorState.moveFocusToEnd(editorState);
            name = character.name;
        }
        else {
            editorState = EditorState.createEmpty();
        }

        this.state = {
            editorState : editorState,
            newEditorState : editorState,
            name
        };
    }

    onUpdate(e){
        this.setState({newEditorState:e})
    }

    saveCharacter(e)
    {
        this.props.saveCharacter({...this.props.character, description: this.state.newEditorState, raw:true});
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger"onClick={(e)=>{this.props.history.goBack();}}>Wróć</button>
                <button className="btn btn-primary"onClick={(e)=>{this.saveCharacter(e)}}>Zapisz</button>
                <h4>{this.state.name}</h4>
                <div className={"editor"}>
                    <SimpleEditor content={this.state.editorState} onUpdate={this.onUpdate.bind(this)}/>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps)
{
    return {
        character : state.characters[ownProps.characterId]
    }
}

export default connect(mapStateToProps, actions)(CharacterEditor);