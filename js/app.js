const App = React.createClass({
    getInitialState: function () {
        return {isEditor: true, elements: []}
    },

    onChange: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    addElement: function (element) {
        this.state.elements.push(element);
        this.setState(this.state.elements);
    },

    render: function () {
        return <div>
            <button onClick={this.onChange}>{this.state.isEditor ? 'Preview' : 'Edit'}</button>
            <div className={this.state.isEditor ? '' : 'hidden'}>
                <Editor elements={this.state.elements} onAdd={this.addElement}/></div>
            <div className={this.state.isEditor ? 'hidden' : ''}><Preview /></div>
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <Right onAdd={this.props.onAdd}/>
            <Left elements={this.props.elements}/>
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $('input[name=input]:checked').val();
        this.props.onAdd(element);
    },
    render: function () {
        return <div>
            <input type="radio" name="input" value="text"/>Text
            <input type="radio" name="input" value="date"/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Left = React.createClass({
    render: function () {
        return <div>
            {this.props.elements.map((ele, index)=> {
                return <div key={index}><input type={ele}/>
                    <button>-</button>
                </div>
            })}
        </div>
    }
});

const Preview = React.createClass({
    render: function () {
        return <div>Preview</div>
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));