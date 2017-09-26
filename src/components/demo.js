import React from 'react';
import { EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import 'draft-js-mention-plugin/lib/plugin.css';
import SimpleMentionEditor  from './simple-mention-editor'
import CharacterList from './character/characterList'
import CharacterEditor from './character/editor'

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

const Demo = (props) =>{
    return(

        <main>
            <h3>Dobra, to jest male demo tego co można zrobić mając trochę czasu i chęci. <br />
            Zacznijcie pisać w pudeku poniżej. Na początek drobne kontrolki... aha <br />
            I spróbujcie wpisać '@' a potem swoje imię :-)<br />
            Aha i jeszcze jako bonus spróbujcie od '#' :D
            </h3>
            <MyEditor />
            {/*<br/>*/}
            {/*<CharacterEditor content={CharacterList['1'].description} />*/}

        </main>

    )
}

export default Demo;