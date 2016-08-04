const App = React.createClass({
  getInitialState: function () {
    return {
      isEditor: true
    }
  },
  toggle: function () {
    this.setState({isEditor: !this.state.isEditor});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.isEditor ? "preview" : "edit"}</button>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('content'));