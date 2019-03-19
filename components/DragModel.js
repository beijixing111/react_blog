
;(function (document, undefined){
  "use strict"; //使用js严格模式检查，是语法更规范
  var _global;
  var  def_conf = {
    isMove: false
  };
  function DragModel(opt) {
    var self = this;
    if(!option) {
      throw new Error('请传入参数，拖动标题和其父容器');
    }
    self = Object.assign(self, def_conf, options);
  }

  DragModel.prototype = {
    init: function(){
      this.drag();
    },
    drag: function (){
      console.log(this);
    },
    createMask: function() {
      var hasMask = document.getElementById('dragmask');
      if (!!hasMask) {
        var isShow = isMove ? 'block' : 'none';
        hasMask.style.display = isShow;
        return;
      }
      var mask = document.createElement('div');
      mask.setAttribute('id', 'dragmask');
      mask.style.display = 'block';
      mask.style.opacity = 0;
      mask.style.cursor = 'move';
      mask.style.position = 'fixed';
      mask.style.top = 0;
      mask.style.left = 0;
      mask.style.right = 0;
      mask.style.bottom = 0;
      mask.style.zIndex = 99999999;
      document.body.appendChild(mask);
    }
  }

  //最后将插件对象暴露给全局对象
  _global = (function(){ return this || (0, eval)('this'); }());

  if(typeof module !== "undefined" && module.exports){
    module.exports = DragModel;
  } else if (typeof define === "function" && define.amd) {
    define(function () { return DragModel});
  } else {
    !('DragModel' in _global) && (_global.DragModel = DragModel); 
  }

})();
