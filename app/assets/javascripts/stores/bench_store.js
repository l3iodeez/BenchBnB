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
    storeBench: function (recvdBench) {
      var storedBench = _benches.find(function (bench) {
        return bench.id === recvdBench.id;
      });
      if (storedBench) {
        var idx = _benches.indexOf(storedBench);
        _benches[idx] = recvdBench;
      } else {
        _benches.push(recvdBench);
      }
      BenchStore._benchesChanged();

    },
    resetBenches: function (benches) {
      _benches = benches;
      BenchStore._benchesChanged();

    },
    _benchesChanged : function () {
      this.emit(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        BenchStore.resetBenches(payload.benches);
      } else if (payload.actionType === BenchConstants.BENCH_RECEIVED) {
        BenchStore.storeBench(payload.bench);
      }
    }),

  });


}(this));
