const App = React.createClass({
  getInitialState: function () {
    return {
      isditor: true
    }
  },
  toggle: function () {
    this.setState({isditor: !this.state.isditor});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.isditor ? "preview" : "edit"}</button>
        <div className={this.state.isditor ? "" : "hidden"}>
          <Edit />
        </div>
        <div className={this.state.isditor ? "hidden" : ""}>
          <Preview />
        </div>
      </div>
    );
  }
});

const Edit = React.createClass({
  render: function () {
    return (
      <div>
        hello
      </div>
    );
  }
});

const Preview = React.createClass({
  render: function () {
    return (
      <div>
        world
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));