const App = React.createClass({
    getInitialState(){
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle(){
        this.setState({isEditor: !this.state.isEditor})
    },
    add(element){
        const elements = this.state.elements;
        console.log(element);
        elements.push(element);
        this.setState({elements});
    },
    delete(index){
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements});
    },
    render(){
        var isEditor = this.state.isEditor;
        return <div>
            <div className={isEditor ? '' : 'hidden'}>
                <center>
                    <div id="center" className="btn-group" role="group">
                        <button className="btn btn-info btn-lg"
                                onClick={this.toggle}>{isEditor ? 'Preview' : 'Editor'}</button>
                    </div>
                </center>
                <Editor add={this.add} delete={this.delete} elements={this.state.elements}/>
            </div>
            <div className={isEditor ? 'hidden' : ''}>
                <center>
                    <div id="center" className="btn-group" role="group">
                        <button className="btn btn-info btn-lg"
                                onClick={this.toggle}>{isEditor ? 'Preview' : 'Editor'}</button>
                    </div>
                </center>
                <Previewer elements={this.state.elements}/>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render(){
        return <div>
            <Right add={this.props.add}/>
            <Left elements={this.props.elements} delete={this.props.delete}/>
        </div>
    }
});

const Right = React.createClass({
    add(){
        const element = $('input[name=element]:checked').val();
        this.props.add(element);
    },
    render(){
        return <div id='right'>
            <div className="col-lg-6 input-group">
               <span className="input-group-addon">
                  <input type="radio" name="element" value='text'/>
               </span>
                <input type="text" className="form-control" value='text'/>
            </div>
            <br/>
            <div className="col-lg-6 input-group">
               <span className="input-group-addon">
                  <input type="radio" name="element" value='date'/>
               </span>
                <input type="text" className="form-control" value='date'/>
            </div>
            <br/>
            <div className="btn-group  col-xs-offset-3" role="group">
                <button className="btn btn-default btn-lg" onClick={this.add}>+</button>
            </div>
        </div>
    }
});

const Left = React.createClass({
    delete(index){
        this.props.delete(index);
    },
    render(){
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index} className="input-group input-group-xs">
                <div className={ele === 'text' ? 'col-lg-9' : 'col-lg-10'}>
                    <input className="form-control" type={ele}/>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-danger btn-sm"
                            onClick={this.delete.bind(this, index)}>X
                    </button>
                </div>
                <br/>
                <br/>
            </div>
        });
        return <div>
            {elements}
        </div>
    }
});

const Previewer = React.createClass({
    render(){
        const elements = this.props.elements.map((ele, index)=> {
            return <div id='show' key={index} className="input-group input-group-lg">
                <div className={ele === 'text' ? 'col-lg-9' : 'col-lg-10'}>
                    <input className="form-control" type={ele}/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        });
        return <div id="last">
            <br/>
            {elements}
            <center>
                <div id="center" className="btn-group" role="group">
                    <button className="btn btn-success btn-lg">submit
                    </button>
                </div>
            </center>
        </div>
    }
});

ReactDOM.render(
    <App/>
    , document.getElementById('content'));