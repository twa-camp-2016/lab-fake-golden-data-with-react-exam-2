const App = React.createClass({

    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },

    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        });
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Preview" : "Edit"}</button>
            <div className={isEditor ? "" : "preview"}>
                <Editor/>
            </div>
            <div className={isEditor ? "preview" : ""}>
                <Preview/>
            </div>
        </div>
    }
});
const Editor = React.createClass({
    render: function () {
        return <div>
            haha
        </div>
    }
});

const Preview = React.createClass({
    render: function () {
        return <div>
            hhh
        </div>
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));
