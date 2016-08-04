const App = React.createClass({
    getInitialState(){
      return{
          isEditor:true,
          counts:[]
      }
    },
    toggle(){
      this.setState({isEditor:!this.state.isEditor});
    },
    render(){
        const isEditor=this.state.isEditor
        return <div>
            <button onClick={this.toggle}>{isEditor?"预览":"编辑"}</button>
            <div className={isEditor?"":"hidden"}>
                <Left></Left>
                <Right></Right>
            </div>
            <div className={isEditor?"hidden":""}>
                <Preview></Preview>
            </div>
        </div>
    }
});

const Left = React.createClass({
    render(){
        return <div>l</div>
    }
});

const Right = React.createClass({
    render(){
        return <div>r</div>
    }
});

const Preview = React.createClass({
    render(){
        return <div>p</div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));