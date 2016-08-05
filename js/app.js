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
            <button onClick={this.toggle}>{this.state.isEditor ? 'preview' : 'edit'}</button>
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
            return <div key={index}>
                <input type={ele}/>
            </div>
        });
        return <div>
            {elements}
            <button disabled>submit</button>
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <Right addElement={this.props.addElement}/>
            <Left elements={this.props.elements} deleteElement={this.props.deleteElement}/>
        </div>
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.deleteElement(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/>
                <button onClick={this.remove.bind(this, index)}>X</button>
            </div>
        });
        return <div>
            {elements}
        </div>
    }
})

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