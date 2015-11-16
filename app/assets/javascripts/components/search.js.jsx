var Search = React.createClass ({
  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "/benches/new", coords);
  },

  render: function () {
      // <div>
      //   {this.props.children}
      // </div>
    return (
      <div className='search-container'>
        <Map clickMapHandler={this.clickMapHandler} />
        <Index />
      </div>
    );

  }
});
