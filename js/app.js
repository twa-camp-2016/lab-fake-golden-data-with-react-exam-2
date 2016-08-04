const App = React.createClass({
    getInitialState(){
      return{
          counts:[],
          isEditor:true
      }
    },
    toggle(){
      this.setState({isEditor:!this.state.isEditor})
    },
    addCount(count){
        const counts=this.state.counts;
        counts.push(count);
        this.setState({counts});

        console.log(counts)
    },
    render(){
        const isEditor=this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor?"预览":"编辑"}</button>
            <div className={isEditor?"":"hidden"}>
                <Left></Left>
                <Right onAdd={this.addCount}></Right>
            </div>
            <div className={isEditor?"hidden":""}>
                <Preview></Preview>
            </div>
        </div>
    }
});

const Left = React.createClass({
    render(){
        return <div>le</div>
    }
});

const Right = React.createClass({
    add(){
      const count=$("input[name=input]:checked").val();
        this.props.onAdd(count)
    },
    render(){
        return <div>
            <input type="radio" name="input" value="text"/>Text
            <input type="radio" name="input" value="date"/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Preview = React.createClass({
    render(){
        return <div>Pr</div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'))