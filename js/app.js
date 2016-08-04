var App = React.createClass({
    getInitialState: function(){
        return {
            elements: [],
            isEditor: true
        }
    },
    isChange: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.isChange}>{isEditor ? "preview" : 'editor'}</button>
                {/*<Edit/>*/}
                {/*<Preview/>*/}
            </div>

        )
    }
});

ReactDOM.render(<App/>, document.getElementById("content"));