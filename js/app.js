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

    },
    deleteCount(index){
        const counts=this.state.counts;
        counts.splice(index,1);
        this.setState({counts});
    },
    render(){
        const isEditor=this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor?"预览":"编辑"}</button>
            <div className={isEditor?"":"hidden"}>
                <Left onDelete={this.deleteCount} counts={this.state.counts}></Left>
                <Right onAdd={this.addCount}></Right>
            </div>
            <div className={isEditor?"hidden":""}>
                <Preview counts={this.state.counts}></Preview>
            </div>
        </div>
    }
});

const Left = React.createClass({
    remove(index){
        this.props.onDelete(index)
    },
    render(){
        const counts=this.props.counts.map((count,index)=>{
            return <div key={index}>
                <input type={count}/>
                <button onClick={this.remove.bind(this,index)}>X</button>
            </div>
        })
        return <div>
            {counts}
        </div>
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
        const counts=this.props.counts.map((count,index)=>{
            return <div key={index}>
                <input type={count}/>
            </div>
        })
        return <div>
            {counts}
            <button>提交</button>
        </div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'))