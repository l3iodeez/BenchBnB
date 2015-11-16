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
    fetchBenches: function (bounds) {
      $.ajax({
        url: '/api/benches',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: {bounds: bounds},
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    }
  };
}(this));
