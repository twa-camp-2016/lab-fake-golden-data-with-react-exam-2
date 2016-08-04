//23:15
const App = React.createClass({
    getInitialState: function () {
        return ({
            isEditor: true,
            elements: []
        });
    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    addElement:function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    deleteElement:function (index) {
        const elements = this.state.elements;
        elements.splice(index,1);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? 'Preview' : 'Editor'}</button>
            <Editor className={isEditor ? '' : 'hidden'} elements = {this.state.elements} onDelete = {this.deleteElement} onAdd = {this.addElement}/>
            <Preview className={isEditor ? 'hidden' : ''}/>
        </div>
    }
});
const Editor = React.createClass({
    render: function () {
        return (<div className={this.props.className}>
            <Left elements = {this.props.elements} onDelete = {this.props.onDelete}/>
            <Right onAdd = {this.props.onAdd}/>
        </div>)
    }
});
const Left = React.createClass({
    remove:function (index) {
      this.props.onDelete(index);
    },
    render:function () {
        const elements = this.props.elements.map((element,index)=>{
            return <div key={index}><input type={element}/>
            <input type="button" value='-' onClick={this.remove.bind(this,index)}/>
            </div>
        });
        return (<div>
            {elements}
        </div>)
    }
});

const Right = React.createClass({
    add:function(){
        const elements = $('input[name=element]:checked').val();
        this.props.onAdd(elements);
    },
    render:function () {
        return (<div>
            <input type="radio" name="elements" value='text'/>Text
            <input type="radio" name="elements" value='date'/>Date
            <input type="button" value='+' onClick={this.add}/>
        </div>)
    }
});

const Preview = React.createClass({
    render: function () {
        return (<div className={this.props.className}>
            preview
        </div>)
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));