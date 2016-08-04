const App = React.createClass({
  getInitialState: function () {
    return {
      isditor: true,
      elements:[]
    }
  },
  toggle: function () {
    this.setState({isditor: !this.state.isditor});
  },
  addElement:function (element) {
    const elements=this.state.elements;
    elements.push(element);
    this.setState({elements});
  },
  delElement:function (index) {
    this.state.elements.splice(index,1);
    this.setState({elements:this.state.elements});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.isditor ? "preview" : "edit"}</button>
        <div className={this.state.isditor ? "" : "hidden"}>
          <Edit onAdd={this.addElement} elements={this.state.elements} onDel={this.delElement}/>
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
        <Left  elements={this.props.elements} remove={this.props.onDel}/>
        <Right add={this.props.onAdd}/>
      </div>
    );
  }
});

const Left = React.createClass({
  remove:function (index) {
    this.props.remove(index);
  },
  render: function () {
    const elements = this.props.elements.map((element,index)=>{
      return <div key={index}>
        <input type={element}/>
        <button onClick={this.remove.bind(this,index)}>X</button>
      </div>
    });
    return (
      <div>
        {elements}
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
        world
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));