// 22:45  23:12
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
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    deleteElement(element){
        const elements = this.state.elements;
        elements.splice(element, 1);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? 'Preview' : 'Editor'}</button>
            <Editor className={isEditor ? '' : 'hidden'} elements={this.state.elements} onDelete={this.deleteElement}
                    onAdd={this.addElement}/>
            <Preview className={isEditor ? 'hidden' : ''} elements={this.state.elements}/>
        </div>;
    }
});

const Editor = React.createClass({
    render: function () {
        return (
            <div className={this.props.className}>
                <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
                <Right onAdd={this.props.onAdd}/>
            </div>
        )
    }
});
const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index);
    },
    render: function () {
        const elements = this.props.elements.map((element, index)=> {
            return <div key={index}>
                <input type={element}/>
                <input type='button' value='-' onClick={this.remove.bind(this, index)}/>
            </div>
        });
        return (
            <div className={this.props.className}>
                {elements}
            </div>
        )
    }
});
const Right = React.createClass({
    add: function () {
        const element = $('input[name = element]:checked').val();
        this.props.onAdd(element);
    },
    render: function () {
        return (
            <div className={this.props.className}>
                <input type="radio" name='element' value='text'/>Text
                <input type="radio" name='element' value='date'/>Date
                <input onClick={this.add} type="button" value='+'/>
            </div>
        )
    }
});

const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <input type={ele}/>
            </div>
        });
        return (
            <div className={this.props.className}>{elements}
            <input type="submit" value='submit'/></div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));
