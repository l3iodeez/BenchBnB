var Search = React.createClass ({

  componentDidMount: function () {
    FilterStore.addChangeListener(function () {
      this.setState(FilterStore.filterParams());
      ApiUtil.fetchBenches();
    }.bind(this));
  },
  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "/benches/new", coords);
  },

  render: function () {
    return (
      <div className='search-container'>
        <FilterParams />
        <Map clickMapHandler={this.clickMapHandler} />
        <Index />
      </div>
    );

  }
});
