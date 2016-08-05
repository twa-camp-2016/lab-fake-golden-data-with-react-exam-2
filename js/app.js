const App = React.createClass({
    getInitialState(){
      return {isEditor:true,
      elements:[]
      }
    },
    toggle(){
      this.setState({isEditor:!this.state.isEditor})  
    },
    add(element){
        const elements=this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    delete(index){
        const elements=this.state.elements;
        elements.splice(index,1);
        this.setState({elements});
    },
    render(){
        var isEditor = this.state.isEditor;
        return <div>
            <div className={isEditor?'':'hidden'}>
                <button onClick={this.toggle}>{isEditor?'Previewer':'Editor'}</button>
                <Editor add={this.add} delete={this.delete} elements={this.state.elements}/>
            </div>
            <div className={isEditor?'hidden':''}>
                <button onClick={this.toggle}>{isEditor?'Previewer':'Editor'}</button>
                <Previewer elements={this.state.elements}/>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render(){
        return <div>
            <Right add={this.props.add}/>
            <Left elements={this.props.elements} delete={this.props.delete}/>
        </div>
    }
});

const Right = React.createClass({
    add(){
        const element=$('input[name=element]:checked').val();
        this.props.add(element);
    },
    render(){
        return <div>
            <input type="radio" name="element" value='text'/>Text
            <input type="radio" name="element" value='date'/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Left = React.createClass({
    delete(index){
      this.props.delete(index);
    },
    render(){
        const elements=this.props.elements.map((ele,index)=>{
            return <div key={index}>
                <input type={ele}/>
                <button onClick={this.delete.bind(index)}>x</button>
            </div>
        });
        return <div>
            {elements}
        </div>
    }
});

const Previewer = React.createClass({
    render(){
        const elements=this.props.elements.map((ele,index)=>{
            return <div key={index}>
                <input type={ele}/>
            </div>
        });
        return <div>
            {elements}
            <button>submit</button>
        </div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));