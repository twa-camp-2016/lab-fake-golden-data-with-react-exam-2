 const App = React.createClass({
  getInitialState:function(){
    return {
        isEditor:true,
        elements:['test']
    }
  },
     toggle:function(){
         this.setState({isEditor:!this.state.isEditor });
     },
   render:function(){
      const isEditor =this.state.isEditor;
    return <div>
        <button onClick={this.toggle}>{isEditor ?  "Preview" : "Editor"}</button>

        <div className={isEditor ? "" : "hidden"}>

            <Editor elements={this.state.elements}/>
        </div>

        <div className={isEditor ? "hidden" : ""}>
        <Previewer />
        </div>
    </div>
   }
 })

 const Editor = React.createClass({

   render:function(){
    return   <div>
         <Left  elements={this.props.elements}/>
        <Right />
    </div>
   }
 });

 const Left = React.createClass({

   render:function(){
    return <div>
        {this.props.elements}
    </div>
   }
 });

 const Right = React.createClass({

   render:function(){
    return  <div>

    </div>
   }

 })

 const Previewer = React.createClass({

   render:function(){
    return    <div> Previewer</div>
   }

 })

 ReactDOM.render(<App /> ,document.getElementById("content"));