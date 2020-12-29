"use strict";
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
var j;
//    j=123; //会报错
// 正确的，因为没有下列的类型
j = (function () {
    throw new Error('错误');
})();
//很少使用  可以使用any类型代替
