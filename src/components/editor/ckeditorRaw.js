import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const loadScript = require('load-script');

var defaultScriptUrl = "/ckeditor/ckeditor.js";

/**
 * @author Mariusz Zawadzki
 * @description Component based on "https://github.com/codeslayer1/react-ckeditor" but upgraded to work with react 16
 */
class CKEditor extends React.Component {

    constructor(props) {
        super(props);

        //Bindings
        this.onLoad = this.onLoad.bind(this);

        //State initialization
        this.state = {
            isScriptLoaded: this.props.isScriptLoaded,
            config: this.props.config
        };
    }

    //load ckeditor script as soon as component mounts if not already loaded
    componentDidMount() {
        if (!this._ismounted) {

            if (!this.props.isScriptLoaded) {
                loadScript(this.props.scriptUrl, this.onLoad);
                this.setState({
                    isScriptLoaded: true
                });

            } else {
                this.onLoad();
            }
        }

        this._ismounted = true;
    }

    componentWillUnmount() {
        if(this.editorInstance)
        {
            this.editorInstance.destroy();
        }
        this._ismounted = false;
    }

    onLoad() {

        if (!window.CKEDITOR) {
            console.error("CKEditor not found");
            return;
        }

        if (!this._ismounted) {
            return;
        }
        if(this.editorInstance)
        {
            this.editorInstance.destroy();
        }
        this.editorInstance = window.CKEDITOR.appendTo(
            ReactDOM.findDOMNode(this),
            this.state.config,
            this.props.content
        );
        for (var event in this.props.events) {
            var eventHandler = this.props.events[event];
            this.editorInstance.on(event, eventHandler);
        }

    }

    render() {
        return <div className={this.props.activeClass} />;
    }
}

CKEditor.defaultProps = {
    content: "",
    config: {},
    isScriptLoaded: false,
    scriptUrl: defaultScriptUrl,
    activeClass: "",
    events: {}
};

CKEditor.propTypes = {
    content: PropTypes.any,
    config: PropTypes.object,
    isScriptLoaded: PropTypes.bool,
    scriptUrl: PropTypes.string,
    activeClass: PropTypes.string,
    events: PropTypes.object
};

export default CKEditor;