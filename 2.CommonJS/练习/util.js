module.exports = {
  /**
   * 将一个数组的内容打乱
   * @param {*} arr 数组
   */
  sortRandom: function(arr) {
    arr.sort(function(a,b){
      return Math.random() - 0.5
    })
  },
  print: function(pokers) {
    var str = '';
    for(let i =0; i<pokers.length; i++) {
      var p = pokers[i];
      str += p.toString() + '   ';
    }
    console.log(str);
  }
}