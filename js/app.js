const App = React.createClass({

    getInitialState:function () {
        return{
            isEditor:true
        }
    },
    toogle:function () {
        this.setState({isEditor:!this.state.isEditor})
    },
    render: function(){
        var isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.toogle}>{isEditor?'Preview':'Editor'}</button>

                <div className={isEditor?'':'hidden'}>
                    <Editor/>
                </div>

                <div className={isEditor?'hidden':''}>
                    <Preview/>
                </div>
            </div>
        )
    }
});

const Editor = React.createClass({

    render: function(){
        return (
            <div>Editor</div>
        )
    }
});

const Preview = React.createClass({

    render: function(){
        return (
            <div>Preview</div>
        )
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));