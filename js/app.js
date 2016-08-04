const App = React.createClass({
    getInitialState: function () {
            return {
               isEditor:true,
            }
        },
    toggle:function () {
        this.setState({isEditor:!this.state.isEditor});
    },
    render: function () {
            const isEditor = this.state.isEditor;
        return <div onClick={this.toggle}><button>{isEditor?"Preview":"Edit"}</button>
            <div className={isEditor?"":"hidden"}>
                <Editor />
            </div>
            <div className={isEditor?"hidden":""}>
                <Preview />
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <Left/>
            <Right />
        </div>
    }
});

const Preview = React.createClass({
render:function(){
return<div> Preview</div>
}
});

const Left = React.createClass({
render:function(){
return<div> Left</div>
}
});

const Right = React.createClass({
render:function(){
return<div> Right</div>
}
})
ReactDOM.render(<App />, document.getElementById('content'));