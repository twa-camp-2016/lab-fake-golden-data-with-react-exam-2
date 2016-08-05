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
    render(){
        var isEditor = this.state.isEditor;
        return <div>
            <div className={isEditor?'':'hidden'}>
                <button onClick={this.toggle}>{isEditor?'Previewer':'Editor'}</button>
                <Editor add={this.add}/>
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
        return <div>
            <Right add={this.props.add}/>
        </div>
    }
});

const Right = React.createClass({
    add(){
        const element=$('input[name=element]:checked').val();
        this.props.add(element);
    }
    render(){
        return <div>
            <input type="radio" name="element" value='text'/>Text
            <input type="radio" name="element" value='date'/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Previewer = React.createClass({
    render(){
        return <div>Previewer</div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));