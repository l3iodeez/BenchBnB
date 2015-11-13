var Search = React.createClass ({
  getInitialState: function () {
    return {highlightedMarker: null};
  },

  highlightMarker: function (benchId) {
    this.setState({ highlightedMarker: benchId });
  },
  unhighlightMarker: function (benchId) {
    this.setState({highlightedMarker: null});
  },
  render: function () {
    return (
      <div className='search-container'>
        <Map highlightedMarker={this.state.highlightedMarker}/>
        <Index highlight={this.highlightMarker} unhighlight={this.unhighlightMarker}/>
      </div>
    );
  }
});
