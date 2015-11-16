var Show = React.createClass({
  getInitialState: function () {
    return ({
      bench: BenchStore.getByID(parseInt(this.props.params.id))
    });
  },
  _changed: function (bench) {
    this.setState({bench: bench});
  },
  componentWillMount: function () {
    ApiUtil.fetchBench(this.props.params.id, this._changed);
  },

  render: function () {
  return (
    <div>
      Id#: {this.state.bench ? this.state.bench.id : ""} <br/>
      Description: {this.state.bench ? this.state.bench.description : ""} <br/>
      Latitude: {this.state.bench ? this.state.bench.lat : ""} <br/>
      Longitude: {this.state.bench ? this.state.bench.lng : ""} <br/>
      <Map bench={this.state.bench ? this.state.bench : ""} draggable={false}/>
      {this.props.children}
    </div>
  );
  }
});
