const App = React.createClass({
    render: function () {
        return (<div>
            <button>prevew</button>
            <Editor/>
            <Previewer/>
        </div>)
    }
});
const Editor = React.createClass({
    render:function () {
        return (
            <div>editor</div>
        );
    }
});
const Previewer = React.createClass({
    render:function () {
        return (
            <div>previewer</div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));
