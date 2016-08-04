const App = React.createClass({
getInitialState:function () {
    return{
        elements:[],
        isEditor:true
    }
},
    toggle:function () {
      this.setState({isEditor:!this.state.isEditor});
    },
   render:function () {
    const isEditor = this.state.isEditor;
       return <div>
            <button onClick={this.toggle}>{isEditor?'Preview':'Editor'}</button>
           <div>
               <Editor />
           </div>
           <div>
               <Preview />
           </div>
       </div>
   }
});

const Editor = React.createClass({
   render:function () {
       return <div>

       </div>
   }
});

const Preview = React.createClass({
   render:function () {
       return <div>

       </div>
   }
});

ReactDOM.render(<App />,document.getElementById('content'));