 const App = React.createClass({

   render:function(){
    return <div>
        <button>Preview</button>

        <div>
            <Editor />
        </div>

        <div>
            <Previewer />
        </div>

    </div>
   }
 })


 const Editor = React.createClass({

   render:function(){
    return   <div>
        Editor
    </div>
   }

 });


 const Previewer = React.createClass({

   render:function(){
    return    <div>
        Previewer
    </div>
   }

 })

 ReactDOM.render(<App />,document.getElementById('content'));