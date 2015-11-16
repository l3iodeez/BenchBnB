var Search = React.createClass ({
  _filterChanged: function () {
    this.setState(FilterStore.filterParams());
    ApiUtil.fetchBenches();
  },
  componentDidMount: function () {
    FilterStore.addChangeListener(this._filterChanged);
  },
  componentWillUnmount: function () {
    FilterStore.removeChangeListener(this._filterChanged);
  },
  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "/benches/new", coords);
  },
  clickIndexHandler: function (evt) {
    var benchId = parseInt(evt.currentTarget.getAttribute('data-benchid'));
    this.props.history.pushState(null, "/benches/" + benchId + "/reviews");
  },
  clickMarkerHandler: function (event, marker) {
    var benchId = marker.benchId;
    this.props.history.pushState(null, "/benches/" + benchId + "/reviews");
  },


  render: function () {
    return (
      <div className='search-container'>
        <FilterParams />
        <Map clickMapHandler={this.clickMapHandler} clickMarkerHandler={this.clickMarkerHandler} draggable={true} />
        <Index clickIndexHandler={this.clickIndexHandler}/>
      </div>
    );

  }
});
