const App = React.createClass({

    getInitialState: function () {
        return {
            isEditor: true,
            element: []
        }
    },
    toggle: function () {
        this.setState({
            isEditor:!this.state.isEditor
        })
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Editor" : "Preview"}</button>
            <div className={isEditor?"":"hidden"}>
                <Editor />
            </div>
        </div>
    }
});
const Editor = React.createClass({
    render:function () {
        return <div>111</div>
    }
});


ReactDOM.render(<App />, document.getElementById('content'));