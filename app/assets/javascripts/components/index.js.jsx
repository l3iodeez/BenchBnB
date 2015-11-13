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
    return (
      <div className="bench-index" >
        {
          this.state.benches.map(function (bench) {
            return(
              <ul data-benchid={bench.id} key={bench.id} onMouseEnter={this._highlightMarker} onMouseLeave={this._unhighlightMarker}  >
              <li>{bench.id}</li>
                <li>{bench.description}</li>
                <li>{bench.lat}</li>
                <li>{bench.lng}</li>
              </ul>
            );
          }.bind(this))
        }
      </div>
    );
  }


});
