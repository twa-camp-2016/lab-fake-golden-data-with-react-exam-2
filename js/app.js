const App = React.createClass({
    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    deleteElement: function (index) {
        let elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements});
    },

    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Preview" : "Editor"}</button>

            <div className={isEditor ? "" : "hidden"}>

                <Editor elements={this.state.elements}
                        onAdd={this.addElement}
                        onDelete={this.deleteElement}/>
            </div>

            <div className={isEditor ? "hidden" : ""}>
                <Previewer elements={this.state.elements}/>
            </div>
        </div>
    }
});

const Editor = React.createClass({

    render: function () {
        return <div>
            <Left elements={this.props.elements} onDelete={this.onDelete}/>
            <Right onAdd={this.props.onAdd}/>
        </div>
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index)
    },
    render: function () {
        const elements = this.props.elements.map((ele)=> {
            return <div>
                <input type={ele}/>
                <buton onClick={this.remove.bind(this.index)}>-</buton>
            </div>
        })

        return <div>
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element)
    },
    render: function () {
        return <div>
            <input type="radio" name="element" value="text"/>Text
            <input type="radio" name="element" value="date"/>date
            <button onClick={this.add}>+</button>
        </div>
    }

})

const Previewer = React.createClass({

    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div>
                <input type={ele}/>
            </div>
        });
        return <div> {elements}</div>
    }

})

ReactDOM.render(<App />, document.getElementById("content"));