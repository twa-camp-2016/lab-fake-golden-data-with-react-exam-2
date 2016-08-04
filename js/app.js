const App = React.createClass({

render:function(){
return<div>
<div>
    <Editor />
    <Preview />
</div></div>
}
});

const Editor = React.createClass({
render:function(){
return<div>
<Left />
< Right/>
</div>
}
})

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
const Preview = React.createClass({
render:function(){
return<div> Preview</div>
}
})
 ReactDOM.render(<App />, document.getElementById('content'));