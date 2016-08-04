const App = React.createClass({
    getInitialState: function () {
        return {
            liked: false
        }
    },

    handleOnclick:function () {
        this.setState({
          liked:!this.state.liked
      })
    },

    render: function () {
        const text = this.state.liked ? "liked":"disliked";
        return <div>
            <p onClick={this.handleOnclick}>
                you {text} apple
            </p>
        </div>
    }
});

ReactDOM.render(<App/>,document.getElementById("content"));