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

        return <div className="full">

            <div className=" col-1g-1 topBotton col-sm-offset-6">
                <button onClick={this.toggle} className=" btn btn-info">{isEditor ? "Preview" : "Editor"}</button>
            </div>

            <div className="preview">
                <div className={isEditor ? "" : "hidden"}>
                    <Editor elements={this.state.elements}
                            onAdd={this.addElement}
                            onDelete={this.deleteElement}/>
                </div>
            </div>

            <div className="col-sm-8 col-sm-offset-2 ">
                <div className={isEditor ? "hidden" : ""}>
                    <Previewer elements={this.state.elements}/>
                </div>
            </div>
        </div>
    }
});

const Editor = React.createClass({

    render: function () {
        return <div>
            <div className="left">
                <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            </div>

            <div>
                <Right onAdd={this.props.onAdd}/>
            </div>
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
                <div className="editorItem">
                    <div className="input-group">
                        <input type={ele} className="form-control"/>
                        <span className="input-group-btn">
            <button className="btn btn-danger" onClick={this.remove.bind(this.index)}>-</button>
            </span>
                    </div>
                </div>

            </div>
        })

        return <div className="col-sm-4 col-sm-offset-2">
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        let element = $("input[name=element]:checked").val();
        element = element === undefined ? "" : this.props.onAdd(element);

    },
    render: function () {
        return <div className="row right">
            <div className="col-sm-2 col-lg-offset-2">
                <input type="radio" name="element" className="item" value="text"/>Text
                <input type="radio" name="element" className=" item" value="date"/>date
                <div>
                    <button onClick={this.add} className="item btn btn-success">+</button>
                </div>
            </div>
        </div>
    }

})

const Previewer = React.createClass({

    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index} className="PreviewItem col-sm-5 col-sm-offset-4">
                <input type={ele} className="form-control"/>
            </div>
        });
        return <div>
            <div className="editor">
                {elements}
            </div>
            <button className="btn btn-warning col-sm-1 col-sm-offset-6">submit</button>
        </div>
    }

})

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
         <Route  path="editor" component={Editor}/>
         <Route path="previewer" component={Previewer}/>
        </Route>
    </Router>
    , document.getElementById("content"));