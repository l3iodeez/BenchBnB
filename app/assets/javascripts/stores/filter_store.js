(function(root) {
  'use strict';
  var _filterParams = {};
  var CHANGE_EVENT = "filterParamsChange";


  root.FilterStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    filterParams: function () {
      return _filterParams;
    },
    setFilterParams: function (filter) {
      _filterParams = filter;
    },
    addFilterParam: function (filter) {
      _filterParams = $.extend(_filterParams, filter);
    },
    removeFilterParam: function (name) {
      delete _filterParams[name];
    },
    _filterParamsChanged : function () {
      this.emit(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType ===  FilterConstants.FILTERS_CHANGED) {
        FilterStore.setFilterParams(payload.filter);
        FilterStore._filterParamsChanged();
      }
      else if (payload.actionType ===  FilterConstants.FILTER_CHANGED) {
        FilterStore.addFilterParam(payload.filter);
        FilterStore._filterParamsChanged();
      }
      else if (payload.actionType ===  FilterConstants.FILTER_REMOVED) {
        FilterStore.removeFilterParam(payload.filter);
        FilterStore._filterParamsChanged();
      }
    }),

  });


}(this));
