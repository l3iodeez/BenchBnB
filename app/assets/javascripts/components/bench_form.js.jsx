var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {

    return ({
      description: "",
      seating: "",
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    });
  },

  handleSubmit: function (evt) {
    evt.preventDefault();

    var bench = {
        description: this.state.description,
        lat: this.state.lat,
        lng: this.state.lng,
      };
    ApiUtil.createBench(bench);
    this.props.history.pushState(null, "/");
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Description
          <input type="text" name="description" valueLink={this.linkState("description")} />
        </label>
        <br></br>
        <label>Latitude
          <input type="text" name="lat" valueLink={this.linkState("lat")}/>
        </label>
        <br></br>
        <label>Longitude
          <input type="text" name="lng" valueLink={this.linkState("lng")}/>
        </label>
        <label>Seating
          <input type="text" name="seating" valueLink={this.linkState("seating")}/>
        </label>
        <br></br>
        <input type="submit" />
      </form>
    );
  }
});
