const App = React.createClass({
    getInitialState: function () {
        return {
            elements: []
        }
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
        return <div className="container">
            {this.props.children && React.cloneElement(this.props.children, {
                elements: this.state.elements,
                onAdd: this.addElement,
                onDelete: this.deleteElement
            })}
        </div>;
    }
});

const Editor = React.createClass({
    render: function () {
        return <div className="editor">
            <center id="edit">
                <ReactRouter.Link to="/Previewer">Preview</ReactRouter.Link>
            </center>
            <div className="left ">
                <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            </div>
            <div className="right">
                <Right onAdd={this.props.onAdd}/>
            </div>
        </div>;
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <div>
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
            return <div key={index}>
                <center className="spacing">
                    <input type={ele} className="input-lg"/>
                </center>
            </div>
        });
        return <div className="form-group ">
            <center id="edit">
                <ReactRouter.Link to="/Editor">Editor</ReactRouter.Link>
            </center>
            {elements}
            <center className="submit">
                <button className="btn btn-success spacing" disabled="disabled">Submit</button>
            </center>
        </div>;
    }
});


ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.Route path="Previewer" component={Previewer}/>
            <ReactRouter.Route path="Editor" component={Editor}/>
            <ReactRouter.IndexRoute component={Editor}/>
        </ReactRouter.Route>
    </ReactRouter.Router>, document.getElementById('content'));