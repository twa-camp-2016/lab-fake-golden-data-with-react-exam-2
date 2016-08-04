const App = React.createClass({
    render: function () {
        return <div>
            <button>Preview</button>
            <div>
                <Editor />
            </div>
        </div>

    }
});


const Editor = React.createClass({

    render:function(){
        return <div>
            Editor
        </div>
    }
})





ReactDOM.render(<App />, document.getElementById("content"));