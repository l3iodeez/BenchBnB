var FilterParams = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      minSeats: "",
      maxSeats: ""
    });
  },
  updateMin: function (event) {
    var min = parseInt(event.currentTarget.value);
    if (min > 0) {
      FilterActions.addFilter({minSeats: min});
    } else {
      FilterActions.deleteFilter('minSeats');
    }
  },
  updateMax: function (event) {
    var max = parseInt(event.currentTarget.value);
    if (max > 0) {
      FilterActions.addFilter({maxSeats: max});
    } else {
      FilterActions.deleteFilter('maxSeats');
    }  },
  render: function () {
    return(
      <div className="filter-params-form">
      <label>Min Seats
        <input type="text" name="min" onChange={this.updateMin} />
      </label>
      <br></br>
      <label>Max Seats
        <input type="text" name="max" onChange={this.updateMax} />
      </label>
      </div>
    );
  }

});
