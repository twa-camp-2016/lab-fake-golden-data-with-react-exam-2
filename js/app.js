const App = React.createClass({
    getInitialState:function(){
        return {
            isEditor:true,
            elements:[]
        }
    },
    toogle:function () {
        this.setState({isEditor:!this.state.isEditor});
    },
    add:function (element) {
        const elements = this.state.elements;
        elements.push(element);
        
        this.setState({elements});
    },
   
    render: function (isEditor) {
        isEditor = isEditor || this.state.isEditor;
        return (
            <div>
                <button onClick={this.toogle}>{isEditor? 'preview':'edit'}</button>
                <div className={isEditor?'':'hidden'}>
                    <Editor onAdd={this.add}/>
                </div>
                <div className={isEditor?'hidden':''}>
                    <Preciew/>
                </div>
            </div>
        )
    }   
});

const Editor = React.createClass({

    render: function(){
        return (
            <div>
                <div>
                    <Left/>
                </div>
                <div>
                    <Right onAdd={this.props.onAdd}/>
                </div>
            </div>
        )
    }
});

const Left = React.createClass({
   
    render: function(){
        return (
            <div>Left</div>
        )
    }   
});

const Right = React.createClass({
   
    add:function () {
        const element = $("input[name='element']:checked").val();
        this.props.onAdd(element)
    },
    render: function(){
        return (
            <div>
                <input type="radio" name="element" value="text"/>text
                <input type="radio" name="element" value="date"/>date
                <button onClick={this.add}>+</button>
            </div>
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