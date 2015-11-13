(function(root) {
  'use strict';
  var MapActions = root.MapActions = {
    setHighlight: function(id){
      AppDispatcher.dispatch({
        actionType: MapConstants.HIGHLIGHT_CHANGED,
        id: id
      });
    }
  };
}(this));
