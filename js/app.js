const App = React.createClass({
    getInitialState(){
      return {isEditor:true}  
    },
    toggle(){
      this.setState({isEditor:!this.state.isEditor})  
    },
    render(){
        var isEditor = this.state.isEditor;
        return <div>
            <div className={isEditor?'':'hidden'}>
                <button onClick={this.toggle}>{isEditor?'Previewer':'Editor'}</button>
                <Editor/>
            </div>
            <div className={isEditor?'hidden':''}>
                <button onClick={this.toggle}>{isEditor?'Previewer':'Editor'}</button>
                <Previewer/>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render(){
        return <div>Editor</div>
    }
});

const Previewer = React.createClass({
    render(){
        return <div>Previewer</div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));