(function(root) {
  'use strict';
  var ApiUtil = root.ApiUtil = {
    fetchBenches: function (bounds) {
      $.ajax({
        url: '/api/benches',
        method: 'GET',
        dataType: 'json',
        contentType: 'json',
        data: {bounds: bounds},
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    }
  };
}(this));
