const App=React.createClass({
    getInitialState:function () {
        return{
            isEdit:true
        }
    },

    toggle:function () {
        this.setState({
            isEdit:!this.state.isEdit})
    },

    render:function(){
        const text = this.state.isEdit ? '预览' : '编辑';
        return <div>
            <div>
                <button onClick={this.toggle}>{text}</button>
            </div>
            <div className={this.state.isEdit?'':'hidden'}>
                <Editor/>
            </div>
            <div className={this.state.isEdit?'hidden':''}>
                <Preview/>
            </div>
        </div>
    }
});

const Preview=React.createClass({
    render:function(){
        return <div className={this.props.className}>
            Preview
        </div>
    }
});

const Editor=React.createClass({
    render:function(){
        return <div className={this.props.className}>
            Editor
        </div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));