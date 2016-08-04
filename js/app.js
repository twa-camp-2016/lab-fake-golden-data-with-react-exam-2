const App = React.createClass({
  render: function(){
    return <div>
        <Editor/>
    </div>
  }
});
const Editor = React.createClass({
  render: function(){
    return <div>
        hello
    </div>
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));
