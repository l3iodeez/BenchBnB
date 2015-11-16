(function(root) {
  'use strict';
  var FilterActions = root.FilterActions = {
    setFilter: function(filter){
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTERS_CHANGED,
        filter: filter
      });
    },
    addFilter: function(filter){
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTER_CHANGED,
        filter: filter
      });
    },
    deleteFilter: function(filtername){
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTER_REMOVED,
        filter: filtername
      });
    },
  };
}(this));
