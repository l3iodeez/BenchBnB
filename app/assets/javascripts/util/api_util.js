(function(root) {
  'use strict';
  var ApiUtil = root.ApiUtil = {
    fetchBenches: function () {
      $.ajax({
        url: '/api/benches',
        method: 'GET',
        dataType: 'json',
        contentType: 'json',
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    }
  };
}(this));
