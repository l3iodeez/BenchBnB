(function(root) {
  'use strict';
  var _benches = [];
  var CHANGE_EVENT = "benchesChange";


  root.BenchStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _benches.slice(0);
    },

    resetBenches: function (benches) {
      _benches = benches;
    },
    _benchesChanged : function () {
      this.emit(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        BenchStore.resetBenches(payload.benches);
        BenchStore._benchesChanged();
      }
    }),

  });


}(this));
