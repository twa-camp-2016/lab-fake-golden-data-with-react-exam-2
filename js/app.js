var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    isChange: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    add: function (ele) {
        const elements = this.state.elements;
        elements.push(ele);
        this.setState(elements);
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.isChange}>{isEditor ? "preview" : 'editor'}</button>
                <div className={isEditor ? '' : "hidden"}>
                    <Editor elements={this.state.elements} onAdd={this.add}/>
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
                <Left />
                <Right onAdd={this.props.onAdd}/>
            </div>

        )
    }
});

var Right = React.createClass({
    add: function () {
        const element = $("input[name=input]:checked").val();
        this.props.onAdd(element);
    },
    render: function () {
        return (
            <div>
                <input type="radio" name="input" value="text"/>文本框
                <input type="radio" name="input" value="text"/>日期
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
ReactDOM.render(<App/>, document.getElementById("content"));