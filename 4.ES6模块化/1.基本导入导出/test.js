
// 1.声明表达式导出
export let a = 1; //导出a,值为1,类似于CommonJS中的exports.a = 1;

export function test() { // 导出test,值为一个函数,类似于CommonJS中的exports.test

}

// // 错误写法
// var a = 2;
// export a = 3;


// 2. 具名符号导出

var age = 18;
var sex = '男';

export {age, sex}  // 将age的变量名称作为导出的名称,age变量的值,作为导出的值
