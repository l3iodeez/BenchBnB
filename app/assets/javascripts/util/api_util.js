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
    createReview: function (review) {
      $.ajax({
        url: '/api/reviews',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({review: review}),
        success: function (data) {
          ApiUtil.fetchBench(review.bench_id);
        }
      });
    },

    fetchBenches: function () {
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
    },
    fetchBench: function (id, callback) {
      $.ajax({
        url: '/api/benches/' + id,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: FilterStore.filterParams(),
        success: function (data) {
          ApiActions.receiveSingle(data);
          if (callback) {
            callback(data);
          }
        }
      });
    }
  };
}(this));
