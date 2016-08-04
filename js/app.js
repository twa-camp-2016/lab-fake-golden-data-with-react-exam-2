const App = React.createClass({
    getInitialState: function () {
        return {
            isEdtior: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({
            isEdtior:!this.state.isEdtior
        })
    },
    render: function () {
        const isEditor = this.state.isEdtior;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Editor" : "Preview"}</button>
        </div>

    }
});

ReactDOM.render(
    <App />
    , document.getElementById('content'));