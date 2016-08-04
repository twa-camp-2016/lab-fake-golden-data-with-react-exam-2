const App = React.createClass({
    getInitialState:function () {
      return {isEditor:true,elements:[]};
    },
    handleChange:function () {
        this.setState({isEditor:!this.state.isEditor})

    },
    addEle:function (ele) {
        this.state.elements.push(ele);
        this.setState(this.state.elements);
    },
    removeEle:function (index) {
        this.state.elements.splice(index, 1);
        this.setState(this.state.elements);
    },
    render:function(){
        return <div>
            <button onClick={this.handleChange}>{this.state.isEditor?'Preview':'Edit'}</button>
            <div className={this.state.isEditor?'':'hidden'}>
                <Editor elements={this.state.elements} onAdd={this.addEle} onDelete={this.removeEle}/>
            </div>
            <div className={this.state.isEditor?'hidden':''}>
                <Preview elements={this.state.elements}/>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render:function(){
        return <div>
            <Right onAdd={this.props.onAdd}/>
            <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
        </div>
    }
});

const Right = React.createClass({
    add:function () {
        const ele = $('input[name=input]:checked').val();
        this.props.onAdd(ele);
    },
    render:function(){
        return <div>
            <input type="radio" name="input" value='text'/>Text
            <input type="radio" name="input" value='date'/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Left = React.createClass({
    remove:function (index) {
        this.props.onDelete(index);
    },
    render:function(){
        return <div>
            {this.props.elements.map((ele,index)=>{
                return <div key={index}>
                    <input type={ele}/><button onClick={this.remove.bind(this, index)}>X</button>
                </div>
            })}
        </div>
    }
});

const Preview = React.createClass({
    render:function(){
        return <div>
            {this.props.elements.map((ele, index) => {
                return <div key={index}>
                    <input type={ele}/>
                </div>
            })}
            <button>submit</button>
        </div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));