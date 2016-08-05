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
    render: function () {
        return <div>
            <button onClick={this.toggle}>{this.state.isEditor ? 'preview' : 'edit'}</button>
            <div className={this.state.isEditor ? '' : 'hidden'}>
                <Editor addElement={this.addElement}/>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <Right addElement={this.props.addElement}/>
        </div>
    }
});

const Right = React.createClass({
    addElement: function () {
        const element = $('input[name=element]:checked').val();
        this.props.addElement(element);
    },
    render: function () {
        return <div>
            <input type="radio" name="element" value="text"/>text
            <input type="radio" name="element" value="date"/>date
            <button onClick={this.addElement}>+</button>
        </div>
    }
})

ReactDOM.render(< App />, document.getElementById('content'));