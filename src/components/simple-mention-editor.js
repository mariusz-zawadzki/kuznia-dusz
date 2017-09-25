import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import mentions from './mention';
import mentions_item from './mention_item';


export default class SimpleMentionEditor extends Component {

  constructor(props) {
    super(props);
    this.mentionPlugin = createMentionPlugin();
    this.itemMentions = createMentionPlugin({ mentionTrigger: '#'});
    this.toolbarPlugin = createToolbarPlugin()
  }

  state = {
    editorState: EditorState.createEmpty(),
    suggestions: mentions,
    suggestions_item: mentions_item,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };

  onSearchChange_item = ({ value }) => {
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
    const { MentionSuggestions } = this.mentionPlugin;
    const MentionSuggestions2 = this.itemMentions.MentionSuggestions;
    const { Toolbar } = this.toolbarPlugin;
    const plugins = [this.mentionPlugin, this.itemMentions, this.toolbarPlugin];
    console.log(process.env.PUBLIC_URL+"/")

    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
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
          <Toolbar />
      </div>
    );
  }
}