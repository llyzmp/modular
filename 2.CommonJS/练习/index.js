var pokers = [];  //扑克牌的数组

const Poker = require('./poker'); //导入扑克牌的构造函数
const util = require('./util');

for(let i = 1; i <= 13; i++){
  for(let k = 1; k <= 4; k++) {
    pokers.push(new Poker(k,i))
  }
}

pokers.push(new Poker(null,14),new Poker(null,15));


// for(var i = 0; i < pokers.length; i++) {
//   var p = pokers[i];
//   console.log(p.toString());
// }

// 打乱扑克牌顺序
util.sortRandom(pokers);

var player1 = pokers.slice(0,17);
var player2 = pokers.slice(17,34);
var player3 = pokers.slice(34,51);

var desk = pokers.slice(51);

console.log('玩家1:')
util.print(player1)
console.log('玩家2:')
util.print(player2)
console.log('玩家3:')
util.print(player3)
console.log('底牌:')
util.print(desk)


