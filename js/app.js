//'use 34 minuts'
const App = React.createClass({
    getInitialState: function () {
        return ({
            isEditor: true,
            elements: []
        });
    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    deleteElement:function (element) {
        const elements = this.state.elements;
        elements.splice(element,1);
        this.setState({elements});
    },
    addElement:function (element) {
      const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? 'Preview' : 'Editor'}</button>
            <Editor className={isEditor ? '' : 'hidden'} onDelete = {this.deleteElement} elements = {this.state.elements} onAdd={this.addElement}/>
            <Preview elements ={this.state.elements} className={isEditor ? 'hidden' : ''}/>
        </div>
    }
});
const Editor = React.createClass({
    render:function () {
        return <div className = {this.props.className}>
            <Left onDelete = {this.props.onDelete} elements = {this.props.elements}/>
            <Right onAdd={this.props.onAdd}/>
        </div>
    }
});
const Left = React.createClass({
    remove:function (index) {
      this.props.onDelete(index);
    },
    render:function () {
        const elements = this.props.elements.map((ele,index)=>{
            return <div key = {index}>
                <input type={ele}/>
                <input type="button" value='-' onClick={this.remove}/>
            </div>
        });
        return <div className = {this.props.className}>
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add:function () {
        const element = $('input[name = element]:checked').val();
      this.props.onAdd(element);
    },
    render:function () {
        return <div className = {this.props.className}>
            <input type="radio" value='text' name = 'element'/>text
            <input type="radio" value='date' name = 'element'/>date
            <input type="button" value='+' onClick={this.add}/>
        </div>
    }
});

const Preview = React.createClass({
    render:function () {
        const elements = this.props.elements.map((element,index)=>{
            return <div key={index}>
                <input type={element}/>
            </div>
        });
        return <div className = {this.props.className}>
            {elements}
            <input type="submit"  value='submit'/>
        </div>
    }
});
ReactDOM.render(<App/>, document.getElementById('content'));