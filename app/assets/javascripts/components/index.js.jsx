var Index = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  componentWillMount: function () {
    BenchStore.addChangeListener(this._changed);
  },

  _changed: function () {
    this.setState({ benches: BenchStore.all() });
  },

  _highlightMarker: function (event) {
    var benchId = parseInt(event.currentTarget.getAttribute('data-benchid'));
    MapActions.setHighlight(benchId);
  },

  _unhighlightMarker: function (event) {
    var benchId = parseInt(event.currentTarget.getAttribute('data-benchid'));
    MapActions.setHighlight(null);
  },

  render: function () {
    this.state.benches.forEach(function (bench) {
      var numRatings = 0;
      var totalRating = 0;
      bench.reviews.forEach(function (review) {
        numRatings += 1;
        totalRating += review.rating;
      });
      bench.avgRating = Math.round(10*(totalRating / numRatings))/10 || "N/A";
    });
    return (
      <div className="bench-index group" >
        <h3>Available Benches</h3>
        {
          this.state.benches.map(function (bench) {
            return(
              <ul
                data-benchid={bench.id}
                key={bench.id}
                onClick={this.props.clickIndexHandler}
                onMouseEnter={this._highlightMarker}
                onMouseLeave={this._unhighlightMarker}>
                <li>ID#:{bench.id}</li>
                <li>Description: {bench.description}</li>
                <li>Seats: {bench.seating}</li>
                <li>Average Rating: {bench.avgRating}</li>
                <li>Position: [{bench.lat}, {bench.lng}]</li>
                <li className="bench-index-image">
                  <img src={bench.image_url} ></img>
                </li>
              </ul>
            );
          }.bind(this))
        }
      </div>
    );
  }


});
