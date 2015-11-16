var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {

    return ({
      description: "",
      seating: "",
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      image_url: ""
    });
  },

  handleSubmit: function (evt) {
    evt.preventDefault();
    var bench = {
        description: this.state.description,
        lat: this.state.lat,
        lng: this.state.lng,
        image_url: this.state.image_url
      };
    ApiUtil.createBench(bench);
    this.props.history.pushState(null, "/");
  },
  _uploadImage: function (e) {
    e.preventDefault();
    var widget = cloudinary.createUploadWidget({cloud_name: 'l3iodeez', upload_preset: 'omlmzy9i' },
      function(error, result) {
        this.setState({image_url: result[0].secure_url});
      }.bind(this));
    widget.open();
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
        <br></br>
        <label>Seating
          <input type="text" name="seating" valueLink={this.linkState("seating")}/>
        </label>
        <br></br>
        <button onClick={this._uploadImage}>Upload Image</button>
        <br></br>
        <input type="submit" />
      </form>
    );
  }
});
