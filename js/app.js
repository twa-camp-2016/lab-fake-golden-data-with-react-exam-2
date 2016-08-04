const App = React.createClass({
    // getInitialState :function () {
    //     return {
    //         isEditor:true,
    //         elements:[]
    //     }
    // },

    render:function(){
        // const isEditor = this.state.isEditor;
        return <div>
            {/*<button onClick={}></button>*/}
            <Editor />
            <Previewer />
        </div>
        }
});

const Editor = React.createClass({
    render:function(){
        return <div>Editor</div>
        }
});

const Previewer = React.createClass({
    render:function(){
        return <div>Previewer</div>
        }
});
ReactDOM.render(<App />,document.getElementById('content'));