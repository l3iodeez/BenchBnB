var Map = React.createClass ({

  _changed: function () {
    var benches = BenchStore.all();

    benches.forEach(function (bench) {

      var marker = new google.maps.Marker({
        map: this.state.map,
        title: bench.description,
        animation: google.maps.Animation.DROP,
        position: {lat: parseFloat(bench.lat), lng: parseFloat(bench.lng)}
      });

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

    gMap.addListener('idle', function () {
      ApiUtil.fetchBenches();
    });
  },

  render: function () {
    return (
        <div className="map" ref="map">

        </div>
    );
  }
});
