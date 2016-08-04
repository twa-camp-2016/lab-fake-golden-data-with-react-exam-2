const App = React.createClass({
    getInitialState:function(){
        return {
            isEditor:true
        }
    },
    toogle:function () {
        this.setState({isEditor:!this.state.isEditor});
    },
   
    render: function (isEditor) {
        isEditor = isEditor || this.state.isEditor;
        return (
            <div>
                <button onClick={this.toogle}>{isEditor? 'preview':'edit'}</button>
                <div>
                    <Editor/>
                </div>
                <div>
                    <Preciew/>
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

const Preciew = React.createClass({

    render: function(){
        return (
            <div>Preciew</div>
        )
    }
});

ReactDOM.render(<App/>,document.getElementById('content'))