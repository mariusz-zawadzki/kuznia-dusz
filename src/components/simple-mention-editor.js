import React, {Component} from 'react';
import {EditorState} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createMentionPlugin, {defaultSuggestionsFilter} from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import mentions from './../data_mock/mention';
import mentions_item from './../data_mock/mention_item';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
} from 'draft-js-buttons';

export default class SimpleMentionEditor extends Component {

    constructor(props) {
        super(props);
        this.mentionPlugin = createMentionPlugin();
        this.itemMentions = createMentionPlugin({
            mentionTrigger: '#',
            entityMutability: 'MUTABLE'
        });
        this.toolbarPlugin = createToolbarPlugin({structure:[
            ItalicButton,
            BoldButton,
            UnderlineButton,
            CodeButton,
            HeadlineOneButton,
            HeadlineTwoButton,
            HeadlineThreeButton,
            UnorderedListButton,
            OrderedListButton,
            BlockquoteButton,
            CodeBlockButton
        ]})
        this.state = {
            editorState: this.props.content || EditorState.createEmpty(),
            suggestions: mentions,
            suggestions_item: mentions_item,
            onUpdate: this.props.onUpdate || function(){}
        };
    }


    onChange = (editorState) => {
        this.state.onUpdate(editorState);
        this.setState({
            editorState
        });
    };

    onSearchChange = ({value}) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions),
        });
    };

    onSearchChange_item = ({value}) => {
        this.setState({
            suggestions_item: defaultSuggestionsFilter(value, mentions_item),
        });
    };

    onAddMention = () => {
        // get the mention object selected
    }

    focus = () => {
        this.editor.focus();
    };

    render() {
        const {MentionSuggestions} = this.mentionPlugin;
        const MentionSuggestions2 = this.itemMentions.MentionSuggestions;
        const {Toolbar} = this.toolbarPlugin;
        const plugins = [this.mentionPlugin, this.itemMentions, this.toolbarPlugin];

        return (
            <div className={editorStyles.editor} onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    ref={(element) => {
                        this.editor = element;
                    }}
                />
                <MentionSuggestions
                    onSearchChange={this.onSearchChange}
                    suggestions={this.state.suggestions}
                    onAddMention={this.onAddMention}
                />
                <MentionSuggestions2
                    onSearchChange={this.onSearchChange_item}
                    suggestions={this.state.suggestions_item}
                    onAddMention={this.onAddMention}
                />
                <Toolbar/>
            </div>
        );
    }
}