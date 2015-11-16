var Search = React.createClass ({
  clickMapHandler: function (evt) {
    var mapOffset = $(evt.currentTarget).offset();
    var mouseX = evt.clientX - mapOffset.left;
    var mouseY = evt.clientY - mapOffset.top;
    debugger
    this.props.history.pushState(null, "/benches/new", {lat: "", lng: ""});
    console.log(mouseX);
    console.log(mouseY);

  },

  render: function () {
    return (
      <div className='search-container'>
        <Map clickMapHandler={this.clickMapHandler} />
        <Index />
      </div>
    );
  }
});
