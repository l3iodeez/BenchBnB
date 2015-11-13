var Index = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all()};
  },
  _changed: function () {
    this.setState({ benches: BenchStore.all() });
  },
  componentWillMount: function () {
    BenchStore.addChangeListener(this._changed);
  },
  render: function () {
    return (
      <div className="bench-index">
        {
          this.state.benches.map(function (bench) {
            return(
              <ul key={bench.id}>
              <li>{bench.id}</li>
                <li>{bench.description}</li>
                <li>{bench.lat}</li>
                <li>{bench.lng}</li>
              </ul>
            );
          })
        }
      </div>
    );
  }


});
