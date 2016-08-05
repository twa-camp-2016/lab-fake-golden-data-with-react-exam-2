const App = React.createClass({
    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        });
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    deleteElement: function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div className="container">
            <div className="title container-fluid" id="edit">
                <center><input type="button" onClick={this.toggle} value={isEditor ? "Preview" : "Edit"}
                               className="btn btn-info"/>
                </center>
            </div>
            <div className={isEditor ? "" : "hidden"}>
                <Editor elements={this.state.elements} onAdd={this.addElement} onDelete={this.deleteElement}/>
            </div>
            <div className={isEditor ? "hidden" : ""}>
                <Previewer elements={this.state.elements}/>
            </div>
        </div>;
    }
});

const Editor = React.createClass({
    render: function () {
        return <p className="editor">
            <div className="left ">
                <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            </div>
            <div className="right">
                <Right onAdd={this.props.onAdd}/>
            </div>
        </p>;
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <div className="">
                    <input type={ele} className="input-lg  spacing"/>
                    <button onClick={this.remove.bind(this, index)} className="btn-danger input-lg">X</button>
                </div>
            </div>;
        });

        return <div>
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element);
    },
    render: function () {
        return <div className="left">
            <input type="radio" name="element" value="text"/>Text<br/>
            <input type="radio" name="element" value="date"/>Date<br/>
            <button onClick={this.add} className="btn btn-info">add a type</button>
        </div>
    }
});

const Previewer = React.createClass({

    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index} >
                <center className="spacing">
                    <input type={ele} className="input-lg"/>
                </center>
            </div>
        });
        return <div className="form-group ">
            {elements}
            <center className="submit">
                <button className="btn btn-success spacing" disabled="disabled">Submit</button>
            </center>
        </div>;
    }
});


ReactDOM.render(<App />, document.getElementById('content'));