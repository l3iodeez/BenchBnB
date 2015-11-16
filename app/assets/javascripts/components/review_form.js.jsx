var ReviewForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return({
        body: "",
        rating: 0
    });
  },
  _handleSubmit: function (e) {
    e.preventDefault();
    var review = {
      body: this.state.body,
      rating: this.state.rating,
      bench_id: this.props.params.id
    };
    this.setState({
        body: "",
        rating: 0
    });
    ApiUtil.createReview(review);
    this.history.pushState(null, "/");
  },
  _updateRating: function (e) {
    this.setState({rating: parseInt(e.currentTarget.value)});
  },
  render: function () {
    return(
      <form onSubmit={this._handleSubmit}>
        <label>Body
        <input type="text" name="body" valueLink={this.linkState("body")} />
        </label>
        <br />
        <label>1
        <input type="radio" name="rating" value="1" onChange={this._updateRating} checked={this.state.rating === 1 ? "checked" : null }/>
        </label>
        <label>2
        <input type="radio" name="rating" value="2" onChange={this._updateRating} checked={this.state.rating === 2 ? "checked" : null }/>
        </label>
        <label>3
        <input type="radio" name="rating" value="3" onChange={this._updateRating} checked={this.state.rating === 3 ? "checked" : null }/>
        </label>
        <label>4
        <input type="radio" name="rating" value="4" onChange={this._updateRating} checked={this.state.rating === 4 ? "checked" : null }/>
        </label>
        <label>5
        <input type="radio" name="rating" value="5" onChange={this._updateRating} checked={this.state.rating === 5 ? "checked" : null }/>
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
});
