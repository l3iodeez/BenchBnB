var Map = React.createClass ({
  getInitialState: function () {
    return {markers: []};
  },

  recolorMarkers: function () {
    this.state.markers.forEach(function (marker) {
      if (HighlightStore.highlighted() === marker.benchId) {
        this.colorMarker("FF0", marker);
      } else {
        this.colorMarker("FE7569", marker);
      }
    }.bind(this));
  },

  colorMarker: function (color, marker) {
    var pinImage = MapConstants.pinImage(color);
    marker.setIcon(pinImage);
  },

  _updateMarkers: function () {
    var benches;
    if (this.props.bench) {
      benches = [BenchStore.getByID(this.props.bench.id)];
    } else {
      benches = BenchStore.all();
    }
    var map = this.state.map;
    var newMarkers = [];
    benches.forEach(function (bench) {
      if (!this.markerPresent(bench)) {
        var marker = new google.maps.Marker({
          map: this.state.map,
          benchId: bench.id,
          title: bench.description,
          icon: MapConstants.pinImage("FE7569"),
          animation: google.maps.Animation.DROP,
          position: { lat: parseFloat(bench.lat), lng: parseFloat(bench.lng) }
        });
        if (this.props.clickMarkerHandler) {
          marker.addListener('click', function (e) {
            this.props.clickMarkerHandler(e, marker);
          }.bind(this));
        }
        newMarkers.push(marker);
      }
    }.bind(this));
    this.setState({ markers: this.state.markers.concat(newMarkers) } );
  },

  _changed: function () {
    this.removeOutOfBoundsMarkers();
    this._updateMarkers();
  },

  removeOutOfBoundsMarkers: function () {
    var markers = this.state.markers;
    var remainingMarkers= [];
    for (var i = 0; i < markers.length; i++) {
      if (!this.benchPresent(markers[i])) {
        markers[i].setMap(null);
        markers[i].unbindAll('click');
      } else {
        remainingMarkers.push(markers[i]);
      }

    }
    this.setState({markers: remainingMarkers});
  },

  benchPresent: function (marker) {
    var benches = BenchStore.all();
    return benches.find(function (bench) {
      return marker.benchId === bench.id;
    }.bind(this));
  },

  markerPresent: function (bench) {
    return this.state.markers.find(function (marker) {
      return marker.benchId === bench.id;
    }.bind(this));
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.648774, lng: -74.004902},
      zoom: 13
    };
    if (!this.props.draggable) {
      mapOptions.draggable = this.props.draggable;
      mapOptions.maxZoom = 13;
      mapOptions.minZoom = 13;
    }

    var gMap = new google.maps.Map(map, mapOptions);
    if (this.props.bench) {
      ApiUtil.fetchBenches(this.props.bench.id);
    }
    this.setState({map: gMap }, this._updateMarkers);

    BenchStore.addChangeListener(this._changed);
    HighlightStore.addChangeListener(this.recolorMarkers);

    if (this.props.clickMapHandler) {
      gMap.addListener('click', function (evt) {
        var coords = {lat: evt.latLng.lat(), lng: evt.latLng.lng() };
        this.props.clickMapHandler(coords);
      }.bind(this));
    }

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
      FilterActions.addFilter({bounds : bounds});
    });
  },
  
  componentWillUnmount: function () {
    var gMap = this.state.map;
    gMap.unbindAll('click');
    gMap.unbindAll('idle');
    BenchStore.removeChangeListener(this._changed);
    HighlightStore.removeChangeListener(this.recolorMarkers);
  },

  render: function () {
    return (
        <div className="map" ref="map">
        </div>
    );
  }
});
