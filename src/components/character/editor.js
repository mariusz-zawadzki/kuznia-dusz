import React, {PropTypes} from 'react';
import {ContentState, Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';

import SimpleEditor from '../simple-mention-editor'

export default class CharacterEditor extends React.Component {

    constructor(props) {
        super(props);
        let editorState;
        console.log(this.props.content)
        if (this.props.content && this.props.content.trim() !== "") {
            const processedHTML = DraftPasteProcessor.processHTML(this.props.content);
            const contentState = ContentState.createFromBlockArray(processedHTML);
            //move focus to the end.
            editorState = EditorState.createWithContent(contentState);
            editorState = EditorState.moveFocusToEnd(editorState);
        }

        else {
            editorState = EditorState.createEmpty();
        }

        this.state = {
            editorState: editorState
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Mock editor</h4>
                </div>
                <SimpleEditor content={this.state.editorState}/>
            </div>

        );
    }
}