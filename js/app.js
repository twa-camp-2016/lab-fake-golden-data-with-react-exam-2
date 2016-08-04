const App = React.createClass({
  getInitialState: function () {
    return {
      isEditor: true,
      elements:[]
    }
  },
  toggle: function () {
    this.setState({isEditor: !this.state.isEditor});
  },
  addElement:function (element) {

    const elements = this.state.elements;
    elements.push(element);
    this.setState({elements});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.isEditor ? "preview" : "edit"}</button>
        <div className={this.state.isEditor ? "" : "hidden"}>
          <Edit onAdd={this.addElement}/>
        </div>
        <div className={this.state.isEditor ? "hidden" : ""}>
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
        <Left />
        <Right add={this.props.onAdd}/>
      </div>
    );
  }
});

const Left = React.createClass({
  render: function () {
    return (
      <div>

      </div>
    );
  }
});

const Right = React.createClass({
  add:function () {
    const element = $("input[name=elem]:checked").val();
    console.log(element);
    this.props.add(element);
  },
  render: function () {
    return (
      <div>
        <input type="radio" name="elem" value="text" />Text
        <input type="radio" name="elem" value="date" />Date
        <button onClick={this.add}>+</button>
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

ReactDOM.render(<App />, document.getElementById('content'));