import React, {Component} from 'react'
// import CKEditor from "react-ckeditor-component";
import CKEditor from './ckeditorRaw'

export default class MyCKEditor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(evt){
      var newContent = evt.editor.getData();
      console.log(newContent)
      this.props.input.onChange(newContent)
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
            <CKEditor 
              activeClass="p10" 
              content={this.props.input.value} 
              scriptUrl="/ckeditor/ckeditor.js"
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }}
             />
        )
    }
}