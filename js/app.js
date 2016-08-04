var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    render: function () {
        const isEditor=this.state.isEditor;
        return (
            <div>
                <button >{isEditor ? "Preview" : "editor"}</button>
            </div>

        )
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));