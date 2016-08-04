const App = React.createClass({
  getInitialState: function () {
    return {isEditor: true};
  },
  toggle: function () {
    this.setState({
      isEditor: !this.state.isEditor
    });
  },
  render: function () {
    const isEditor = this.state.isEditor;
    return (
      <div>
        <button onClick={this.toggle}>{isEditor ? "preview" : "edit"}</button>
        <div className={isEditor ? "" : "hidden"}>
          <Edit/>
        </div>
        <div className={isEditor ? "hidden" : ""}>
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
        Edit
      </div>
    );
  }
});

const Preview = React.createClass({
  render: function () {
    return (
      <div>
        Preview
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));