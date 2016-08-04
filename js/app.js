//23:46
const App = React.createClass({
    getInitialState: function () {
        return ({isEditor: true, elements: []})
    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    addElement: function (ele) {
        const elements = this.state.elements;
        elements.push(ele);
        this.setState((elements));
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (<div>
            <button onClick={this.toggle}>{isEditor ? 'Preview' : 'Editor'}</button>
            <Editor className={isEditor ? '' : 'hidden'} elements ={ this.state.elements} onAdd={this.addElement}/>
            <Preview className={isEditor ? 'hidden' : ''}/>
        </div>)
    }
});
const Editor = React.createClass({
    render: function () {
        return <div className={this.props.className}>
            <Right onAdd={this.props.onAdd}/>
            <Left elements = {this.props.elements}/>
        </div>
    }
});
const Left = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}><input type={ele}/>
                <input type='button' value='-'/>
            </div>
        })
        return <div className={this.props.className}>
            {elements}
        </div>
    }
});
const Right = React.createClass({
    add: function () {
        const elements = $('input[name = element]:checked').val();
        this.props.onAdd(elements);
    },
    render: function () {
        return <div className={this.props.className}>
            <input type="radio" name='element' value='text'/>text
            <input type="radio" name='element' value='date'/>date
            <input type="button" value='+' onClick={this.add}/>
        </div>
    }
});

const Preview = React.createClass({
    render: function () {
        return <div className={this.props.className}>
            preview
        </div>
    }
});
ReactDOM.render(<App/>, document.getElementById('content'));