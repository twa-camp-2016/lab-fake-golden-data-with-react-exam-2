const App = React.createClass({
    getInitialState: function () {
        return ({
            isEditor: true,
            elements: []
        })
    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    addElement:function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements:elements});
    },
    deleteElement:function (element) {
        const elements = this.state.elements;
        elements.splice(element,1);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (<div>
            <button onClick={this.toggle}>prevew</button>
            <div className={isEditor ? '' : 'hidden'}>
                <Editor onAdd = {this.addElement} elements ={this.state.elements} onDelete = {this.deleteElement}/>
            </div>
            <div className={isEditor ? 'hidden' : ''}>
                <Previewer elements = {this.state.elements} />
            </div>
        </div>)
    }
});
const Editor = React.createClass({
    render: function () {
        return (
            <div>
                <Left elements = {this.props.elements} onDelete = {this.props.onDelete}/>
                <Right onAdd={this.props.onAdd}/>
            </div>
        );
    }
});
const Left = React.createClass({
    remove:function (index) {
      this.props.onDelete(index);
    },
    render:function () {
       const elements = this.props.elements.map((element,index)=>{
            return <div key={index}>
                <input type={element}/>
                <input type='button' value='-' onClick={this.remove.bind(this,index)}/>
            </div>
        });
        return (<div>{elements}</div>);
    }
});
const Right = React.createClass({
    add:function () {
      const element = $('input[name=element]:checked').val();
        this.props.onAdd(element);
    },
    render:function () {
        return (<div><input type="radio" name = 'element' value='text'/>
            <input type="radio" name = 'element' value='date'/>
                <input type="button"  onClick={this.add} value='+'/></div>);
    }
});
const Previewer = React.createClass({
    render: function () {
        const elements= this.props.elements.map((ele,index)=>{
            return (<div key = {index}>
                <input type={ele}/>
                    <input type="submit" value='submit'/>
            </div>)
        })
        return (
            <div>{elements}</div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));
