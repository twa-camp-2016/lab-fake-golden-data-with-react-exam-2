const App = React.createClass({
    render: function () {
        return <div>
            <Editor/>
            <Preview/>
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
