const App = React.createClass({
    getInitialState : function () {
        return {
            isEditor:true,
            elements:[]
        }
    },
    toggle : function () {
        this.setState({
            isEditor:this.state.isEditor
        })
    },
    render:function () {
        const isEditor =this.state.isEditor;
        return <div>
           <button onClick={this.toggle}>{isEditor?"Previewer":"Editor"}</button>
            <div className={isEditor?"":"hidden"}>
                <Editor elements={this.state.elements} onAdd={this.addElement} onDelete={this.deleteElement} />
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render:function () {
        return <div>
            <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            <Right onADD={this.props.onAdd}/>
        </div>
    }
});

const Left = React.createClass({
    remove : function (index) {

        this.props.onDelete(index)
    },
    render : function () {
        const elements=this.props.elements.map((ele,index) => {
            "use strict";
            return <div key = {index}>
                <input type="ele"/>
                <button onClick={this.remove}>×</button>
            </div>
        })
        return <div>{elements}</div>
    }
});

const Right = React.createClass({
    add : function () {
        const elements = $("input[name=element]:checked").val();
        this.props.onADD(elements)
    },
    render : function () {
        return <div>
            <input type="radio" name="element" value="text"/>Text
            <input type="radio" name="element" value="date"/>Date
            <button onClick={this.add}>+</button>
        </div>

    }
});

ReactDOM.render(<App/>,document.getElementById('content'));