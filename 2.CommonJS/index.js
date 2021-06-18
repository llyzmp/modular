(function(module){
  module.exports = {};
  var exports = module.exports;

  var exports = module.exports;

  var count =0; // 需要隐藏内部实现
  // 要暴露给外部的接口
  exports.getNumber = function() {
    count++;
    return count;
  }
  exports.abc = 1233;

  return module.exports

})()