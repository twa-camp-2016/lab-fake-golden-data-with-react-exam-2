const App = React.createClass({
    getInitialState(){
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    addElement: function (element) {
        this.state.elements.push(element);
        this.setState({elements: this.state.elements});
    },
    deleteElement: function (i) {
        this.state.elements.splice(i, 1);
        this.setState({elements: this.state.elements});
    },
    render: function () {
        return <div>
            <div id="topButton">
                <center>
                    <button type="button" className="btn btn-primary"
                            onClick={this.toggle}>{this.state.isEditor ? 'preview' : 'edit'}</button>
                </center>
            </div>
            <div className={this.state.isEditor ? '' : 'hidden'}>
                <Editor elements={this.state.elements} addElement={this.addElement} deleteElement={this.deleteElement}/>
            </div>
            <div className={this.state.isEditor ? 'hidden' : ''}>
                <Preview elements={this.state.elements}/>
            </div>
        </div>
    }
});

const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div className="col-lg-6 input-group col-lg-offset-3" key={index}>
                <input className="form-control" type={ele}/>
                <br/>
                <br/>
            </div>
        });
        return <div id="preview">
            <div id="elements" className="row">
                <br/>
                {elements}
            </div>
            <div id="submit">
                <center>
                    <button type="button" className="btn btn-success" disabled="disabled">submit</button>
                </center>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div className="row">
            <Left elements={this.props.elements} deleteElement={this.props.deleteElement}/>
            <Right addElement={this.props.addElement}/>
        </div>
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.deleteElement(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div className="col-lg-6 input-group col-sm-offset-2" key={index}>
                <input type={ele} className="form-control"/>
                <span className="input-group-btn">
                <button type="button" className="btn btn-danger" onClick={this.remove.bind(this, index)}>X</button>
                    </span>
                <br/>
            </div>
        });
        return <div className="col-md-6" id="left">
            {elements}
        </div>
    }
});

const Right = React.createClass({
    addElement: function () {
        const element = $('input[name=element]:checked').val();
        this.props.addElement(element);
    },
    render: function () {
        return <div className="col-md-6" id="right">
            <label className="checkbox-inline col-sm-offset-1">
                <input type="radio" name="element" value="text"/>text
            </label>
            <label className="checkbox-inline col-sm-offset-1">
                <input type="radio" name="element" value="date"/>date
            </label>
            <div className="col-sm-offset-1 col-sm-10">
                <br/>
                <button className="btn btn-default" onClick={this.addElement}>添加</button>
            </div>
        </div>
    }
});

ReactDOM.render(< App />, document.getElementById('content'));