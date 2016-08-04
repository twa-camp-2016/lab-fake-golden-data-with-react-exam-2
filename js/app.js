const App = React.createClass({
  getInitialState: function () {
    return {
      isEditor: true,
      elements:[]
    };
  },
  toggle: function () {
    this.setState({
      isEditor: !this.state.isEditor
    });
  },
  addElem:function (element) {
    console.log(element);
    this.state.elements.push(element);
    this.setState({elements:this.state.elements});
  },
  render: function () {
    const isEditor = this.state.isEditor;
    return (
      <div>
        <button onClick={this.toggle}>{isEditor ? "preview" : "edit"}</button>
        <div className={isEditor ? "" : "hidden"}>
          <Edit onAdd={this.addElem}/>
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
    this.props.add(element);
  },
  render: function () {
    return (
      <div>
        <input type="radio" name="elem" value="text"/>Text
        <input type="radio" name="elem" value="date"/>Date
        <button onClick={this.add}>+</button>
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