const App = React.createClass({
  getInitialState: function () {
    return {
      isEditor: true,
      elements: []
    };
  },
  toggle: function () {
    this.setState({
      isEditor: !this.state.isEditor
    });
  },
  addElem: function (element) {
    const elements = this.state.elements;
    elements.push(element);
    this.setState({elements});
  },
  delElem:function (index) {
    const elements = this.state.elements;
    elements.splice(index,1);
    this.setState({elements});
  },
  render: function () {
    const isEditor = this.state.isEditor;
    return (
      <div>
        <button onClick={this.toggle}>{isEditor ? "preview" : "edit"}</button>
        <div className={isEditor ? "" : "hidden"}>
          <Edit onAdd={this.addElem} onDel={this.delElem} elements={this.state.elements} />
        </div>
        <div className={isEditor ? "hidden" : ""}>
          <Preview elements={this.state.elements}/>
        </div>
      </div>
    );
  }
});

const Edit = React.createClass({
  render: function () {

    return (
      <div>
        <Left elements={this.props.elements} del={this.props.onDel}/>
        <Right add={this.props.onAdd}/>
      </div>
    );
  }
});

const Left = React.createClass({
  del: function (index) {
    this.props.del(index);
  },
  render: function () {
    const elements = this.props.elements.map((element,index)=> {
      return <li key={index}>
        <input type={element}/>
        <button onClick={this.del.bind(this,index)}>X</button>
      </li>
    });
    return (
      <div>
        {elements}
      </div>
    );
  }
});

const Right = React.createClass({
  add: function () {
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
    const elements = this.props.elements.map((element,index)=> {
      return <li key={index}>
        <input type={element}/>
      </li>
    });
    return (
      <div>
        {elements}
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));