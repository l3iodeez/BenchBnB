(function(root) {
  'use strict';
  var _highlighted = null;
  var CHANGE_EVENT = "highlightChange";


  root.HighlightStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    highlighted: function () {
      return _highlighted;
    },
    setHighlighted: function (id) {
      _highlighted = id;
    },
    _highlightChanged : function () {
      this.emit(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === MapConstants.HIGHLIGHT_CHANGED) {
        HighlightStore.setHighlighted(payload.id);
        HighlightStore._highlightChanged();
      }
    }),

  });


}(this));
