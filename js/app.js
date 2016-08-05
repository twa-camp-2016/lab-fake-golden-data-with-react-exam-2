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
        elements.splice(index);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
           <center><ReactRouter.Link to="/Preview">Preview</ReactRouter.Link></center>
            {this.props.children && React.cloneElement(this.props.children,{
                elements:this.state.elements,
                onAdd:this.addElement,
                onDelete:this.deleteElement
            })}
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div className="row bg-success">
            <div className="col-md-3 col-md-offset-2">
                <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            </div>
            <div className="col-md-4 col-md-offset-3">
                <Right onAdd={this.props.onAdd}/>
            </div>

        </div>
    }
});

const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <span className="input-group sizing-addon2"></span>
                <input type={ele} className=" sizing-addon2 form-control" placeholder="please input your text"/>
                <br/>
                <br/>
            </div>
        })
        return <div className="bg-success">
            <div className="row bg-success">
                <div className="col-md-5 col-md-offset-4">{elements}</div>
            </div>
            <div>
                <button className="type= button btn btn-primary center-block">submit</button>
            </div>
        </div>
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <input type={ele}/>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.remove.bind(this, index)}>
                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></button>
                <br/>
                <br/>
            </div>
        })
        return <div>{elements}</div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $('input[name=element]:checked').val();
        this.props.onAdd(element);
    },
    render: function () {
        return <div>
            <div>
                <input type="radio" name="element" value="text"/>Text
                <input type="radio" name="element" value="date"/>Date
            </div>
            <br/> <br/>
            <div>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.add}>+</button>
            </div>
        </div>
    }
})

ReactDOM.render((
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Editor}/>
            <ReactRouter.Route path="Preview" component={Preview}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
), document.getElementById('content'));