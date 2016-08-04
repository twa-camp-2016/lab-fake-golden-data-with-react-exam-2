const App = React.createClass({
    getInitialState: function () {
        return {isEditor: true}
    },
    handleChange: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    render: function () {
        var editor = this.state.isEditor;
        return <div>
            <button onClick={this.handleChange}>{editor?'Preview':'Edit'}</button>
            <div className={editor?'':'hidden'}>
                <Editor />
            </div>
            <div className={editor?'hidden':''}>
                <Preview />
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render:function(){
        return <div>Editor</div>
    }
});

const Preview = React.createClass({
    render:function(){
        return <div>Preview</div>
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));