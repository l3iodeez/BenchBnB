(function(root) {
  'use strict';
  var ApiUtil = root.ApiUtil = {
    createBench: function (bench) {
      $.ajax({
        url: '/api/benches',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({bench: bench}),
        success: function (data) {
          ApiActions.receiveSingle(data);
        }
      });
    },
    fetchBenches: function () {
      console.log(FilterStore.filterParams());
      $.ajax({
        url: '/api/benches',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: FilterStore.filterParams(),
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    }
  };
}(this));
