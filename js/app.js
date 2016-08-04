const App = React.createClass({
    getInitialState: function () {
        return {
            isEdtior: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({
            isEdtior: !this.state.isEdtior
        })
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({
            elements: elements
        });
    },
    deleteElement: function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1)
        this.setState({elements})
    },
    render: function () {
        const isEditor = this.state.isEdtior;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Editor" : "Preview"}</button>
            <div className={isEditor?"":"hidden"}>
                <Editor elements={this.state.elements} onAdd={this.addElement} onDelete={this.deleteElement}/>
            </div>
        </div>

    }
});
const Editor = React.createClass({
    render: function () {
        return <div>
            <Right onAdd={this.props.onAdd}/>
            <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
        </div>
    }
});
const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index);
    },
    render: function () {
        const element = this.props.elements.map((ele, index)=> {
            return <div>
                <input type={this.ele}/>
                <button onClick={this.remove}>x</button>
            </div>
        })

        return <div>
            {element}
        </div>
    }
})

const Right = React.createClass({
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element);
    },
    render: function () {
        return <div>
            <input type="radio" name="element" value="text"/>Text
            <input type="radio" name="element" value="date"/>Date
            <button onClick={this.add}>+</button>

        </div>
    }
})
ReactDOM.render(
    <App />
    , document.getElementById('content'));