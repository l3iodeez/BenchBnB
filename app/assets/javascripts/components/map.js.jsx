var Map = React.createClass ({
  getInitialState: function () {
    return {markers: []};
  },

  _changed: function () {

    var benches = BenchStore.all();
    var map = this.state.map;

    this.removeOutOfBoundsMarkers();
    var newMarkers = [];

    benches.forEach(function (bench) {
      if (!this.markerPresent(bench)) {
        var marker = new google.maps.Marker({
          map: this.state.map,
          id: bench.id,
          title: bench.description,
          animation: google.maps.Animation.DROP,
          position: { lat: parseFloat(bench.lat), lng: parseFloat(bench.lng) }
        });
        newMarkers.push(marker);
      }
    }.bind(this));
    this.setState({ markers: this.state.markers.concat(newMarkers) } );
  },

  removeOutOfBoundsMarkers: function () {

    var markers = this.state.markers;
    var remainingMarkers= [];
    for (var i = 0; i < markers.length; i++) {
      if (!this.benchPresent(markers[i])) {
        markers[i].setMap(null);
      } else {
        remainingMarkers.push(markers[i]);
      }

    }
    this.setState({markers: remainingMarkers});
  },

  benchPresent: function (marker) {
    var benches = BenchStore.all();
    return benches.find(function (bench) {
      return marker.id === bench.id;
    }.bind(this));
  },

  markerPresent: function (bench) {
    return this.state.markers.find(function (marker) {
      return marker.id === bench.id;
    }.bind(this));
  },
  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.648774, lng: -74.004902},
      zoom: 13
    };
    var gMap = new google.maps.Map(map, mapOptions);

    this.setState({map: gMap });
    BenchStore.addChangeListener(this._changed);

    gMap.addListener('idle', function (event) {
      var bounds = {
        northEast: {
          lat: this.getBounds().getNorthEast().lat(),
          lng: this.getBounds().getNorthEast().lng(),
        },
        southWest: {
          lat: this.getBounds().getSouthWest().lat(),
          lng: this.getBounds().getSouthWest().lng()
        }
      };
      ApiUtil.fetchBenches(bounds);
    });
  },

  render: function () {
    return (
        <div className="map" ref="map">

        </div>
    );
  }
});
