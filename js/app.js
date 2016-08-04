const App = React.createClass({

    getInitialState :function () {
        return {
            isEditor :true,
            elements :[]
        }
    },

    toggle :function () {
        this.setState({
            isEditor:!this.state.isEditor
        });
    },

    addElement :function (element) {
        const elements = this.state.elements;
        element.push(element);
        this.setState({elements});
    },

    render:function(){
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor? "Previewer" : "Editor"}</button>
            <div className={isEditor? "" : "hidden"}>
                <Editor onAdd = {this.addElement}/>
            </div>
            <div className={isEditor ? "hidden" : ""}>
                <Previewer elements = {this.state.elements}/>
            </div>
        </div>
        }
});

const Editor = React.createClass({
    render:function(){
        return <div>
            <Left />
            <Right onAdd = {this.props.onAdd}/>
        </div>
        }
});

const Left = React.createClass({
    render:function(){
        return <div>Left</div>
        }
});

const Right = React.createClass({
    add :function () {
         const element = $("input[name=element]:checked").val();
        this.props.onAdd(element);
    },

    render:function(){
        return <div>
            <input type="radio" name="element" value="text"/>Text
            <input type="radio" name="element" value="date"/>Date
            <button onClick={this.add}>+</button>
        </div>
        }
});

const Previewer = React.createClass({
    render:function(){
        return <div>Previewer</div>
        }
});

ReactDOM.render(<App />,document.getElementById('content'));