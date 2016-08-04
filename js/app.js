const App = React.createClass({
    render:function(){
        return <div>App</div>
    }
});

const Editor = React.createClass({
    render:function(){
        return <div>E</div>
    }
});

const Previewer = React.createClass({
    render:function(){
        return <div>Previewer</div>
    }
});

const Right = React.createClass({
    render:function(){
        return <div>Right</div>
    }
});

const Left = React.createClass({
    render:function(){
        return <div>Left</div>
    }
});

ReactDOM.render(<App />, document.getElementById('content'));