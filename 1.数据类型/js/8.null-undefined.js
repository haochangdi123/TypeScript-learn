"use strict";
// null 和 undefined  是其他（never类型）数据类型的子类型
// let g:number
// console.log(g); //Variable 'h' is used before being assigned.  表示我们没有定义，会报错
// let g:undefined
// console.log(g);  //正常
// g = 12 //Type '12' is not assignable to type 'undefined'.
// 对于可能为undefined的值，可以预先设置    ‘|’  表示或
var g;
console.log(g); //正常
g = 12;
//null 和 undefied类似
