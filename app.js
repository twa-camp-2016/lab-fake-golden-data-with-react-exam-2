const App = React.createClass({
    getInitialState:function () {
      return{
          isEditor:true,
          elements:[]
      }
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        });
    },
    render: function () {
        return <div>
            <button onClick={this.toggle}>{this.state.isEditor?"editor":"preview"}</button>
            <div className={this.state.isEditor?"":"hidden"}>
                <Editor />
            </div>
            <div className={this.state.isEditor?"hidden":""}>
                <Preview />
                </div>
        </div>;
    }
});

const Editor=React.createClass({
    render:function () {
        return <div className={this.props.isEditor}>Editor</div>

    }
});


const Preview=React.createClass({
    render:function () {
        return <div className={this.props.isEditor}>Preview</div>

    }
});


ReactDOM.render(<App />, document.getElementById('content'));