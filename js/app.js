var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    change: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    add:function (ele) {
        const elements=this.state.elements;
        elements.push(ele);
        this.setState(elements);

    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.change}>{isEditor ? "preview" : "edit"}</button>
                <div className={isEditor ? " " : "hidden"}>
                    <Editor onAdd={this.add} onDelete={this.delete} elements={this.state.elements}/>
                </div>
                <div className={isEditor ? "hidden " : ""}>
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
                <Left/>
            </div>

        )
    }
});

var Right = React.createClass({
    add:function () {
        const ele=$("input[name=input]:checked").val();
        this.props.onAdd(ele);
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
    render: function () {
        return (
        <div></div>
           
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
ReactDOM.render(<App/>, document.getElementById('content'));