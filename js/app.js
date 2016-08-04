const App = React.createClass({
    getInitialState : function () {
        return {
            isEditor:true,
            elements : []
        }
    },
    toggel:function () {
      this.setState({
          isEditor:!this.state.isEditor
      })
    },
    addElement : function (element) {
      const elements=this.state.elements;
        elements.push(element);
        this.setState({elements})
    } ,
    deleteElement : function (index) {
      const elements=this.state.elements;
        elements.splice(index,1);
        this.setState({elements})
    },
    render : function () {
        const isEditor=this.state.isEditor;
        return <div>
            <button onclick={this.toggle}>{isEditor?"Previewer" : "Editor"}</button>
            <div className={isEditor?"":"hidden"}>
                <Editor elements={this.state.elements} onAdd = {this.state.addElement} onDelete={this.state.deleteElement}/>
            </div>
        </div>
    }
})

const Editor = React.createClass({
    render:function () {
        return <div>
            <Left elements={this.state.elements} onDelete={this.props.onDelete}/>
            <Right onAdd = {this.props.onAdd}/>
        </div>
    }
});

const Left = React.createClass({
    remove:function (index) {
        this.props.onDelete(index)
    },
    render : function () {
        const elements=this.props.elements.map((ele,index) => {
            "use strict";
            return <div key={index}>
                <input type="ele"/>
                <button onClick={this.remove}>×</button>
            </div>
        })
        return <div>{elements}</div>
    }
});

cosnt Right = React.createClass({
    add:function () {
        const elements=$("input[name=element]:checked").val();
        this.props.onAdd(elements);
    },
    render:function () {
        return <div>
            <input type="radio" name="elements" value="text"/>Text
            <input type="radio" name="elements" value="date"/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
})

ReactDOM.render(<App/> , document.getElementById('content'));