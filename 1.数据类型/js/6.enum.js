"use strict";
/*
枚举类型（enum）
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
    例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
    在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
        
            enum 枚举名{
                标识符[=整型常数],
                标识符[=整型常数],
                ...
                标识符[=整型常数],
            } ;

 */
// 例1 我们将成功设置为1，失败为2
// enum Flag {success=1,error=2}
// let c:Flag = Flag.success
// console.log(c); // 1
// console.log(Flag.error); // 2
// 例2
// enum Color {red,blue,yellow}
// let d:Color = Color.red
// console.log(d); // 0   如果标识符没有赋值 它的值就是下标
// 例三
//    enum Color {red,blue=5,yellow}
//    let d:Color = Color.red     //0 
//    let f:Color = Color.blue     //5 
//    let g:Color = Color.yellow     //6  会在上一个上继续
// 例四
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
;
var d = Err.success;
