'use strict';
const App = React.createClass({
    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        })
    },

    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Preview" : "Edit"}</button>
            <div className={isEditor ? "" : "hidden"}>
                <Editor/>
            </div>
            <div className={isEditor ? "hidden" : ""}>
                <Preview/>
            </div>
        </div>

    }
});

const Editor = React.createClass({
    render: function () {
        return <div>hah</div>
    }
});

const Left = React.createClass({
    render: function () {
        return <div></div>
    }
});

const Right = React.createClass({
    render: function () {
        return <div></div>
    }
});
const Preview = React.createClass({
    render: function () {
        return <div>xix</div>
    }
});


ReactDOM.render(<App/>, document.getElementById("content"));