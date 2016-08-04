const App = React.createClass({
    getInitialState:function () {
        return {
            isEditor:true,
            elements:[]
        }
    },
    toggle:function () {
        this.setState = {
            isEditor:!this.state.isEditor
        }

    },

    render :function (){
        const isEditor = this.state.isEditor;
        return <div>
            <button onclick={this.toggle}>{isEditor?"Previwer":"Edit"}</button>

        </div>
    }
});


ReactDOM.render(<App/>,document.getElementById('content'))