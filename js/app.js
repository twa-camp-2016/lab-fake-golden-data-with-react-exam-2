var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    isChange: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    addElement:function (element) {
        const elements=this.state.elements;
        elements.push(element);
        this.setState(elements);
    } ,
    deleteElement:function (index) {
        const elements=this.state.elements;
        elements.splice(index,1);
        this.setState(elements);
    },
    render: function () {
        const isEditor = this.state.isEditor;

        return (
            <div>
                <button onClick={this.isChange}>{isEditor ? 'preview' : 'editor'}</button>
                <div className={isEditor ? '' : "hidden"}>
                    <Editor onAdd={this.addElement} onDelete={this.deleteElement} elements={this.state.elements}/>
                </div>
                <div className={isEditor ? 'hidden' : " "}>
                    <Preview/>
                </div>

            </div>

        )
    }
});

var Editor = React.createClass({
    render: function () {
        return (
        <div>
            <Right onAdd={this.props.onAdd}/>
            <Left onDelete={this.props.onDelete} elements={this.props.elements}/>
        </div>
           
        )
    }
});

var Right = React.createClass({
    add:function () {
      const element=$("input[name=input]:checked").val();
        this.props.onAdd(element);
    },
    render: function () {
        return (
        <div>
            <input type="radio" name="input" value="text"/>文本框
            <input type="radio" name="input" value="date"/>日期
            <button onClick={this.add}>+</button>
        </div>

        )
    }
});

var Left = React.createClass({
    delete:function (i) {
      this.props.onDelete(i)
    },
    render: function () {
        const elements=this.props.elements.map((e,i)=>{
            return<div key={i}>
                <input type={e}/>
                <button onClick={this.delete.bind(this,i)}>x</button>
            </div>
        })
        return (
        <div>{elements}</div>

        )
    }
});

var Preview = React.createClass({
    render: function () {
        return (
        <div></div>
           
        )
    }
});
ReactDOM.render(<App/>,document.getElementById('content'));