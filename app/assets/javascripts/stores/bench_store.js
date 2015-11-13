(function(root) {
  'use strict';
  var _benches = [];

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        BenchStore.resetBenches(payload.benches);
      }
    }),
    all: function () {
      return _benches.slice(0);
    },
    resetBenches: function (benches) {
      _benches = benches;
    }

  });


}(this));
