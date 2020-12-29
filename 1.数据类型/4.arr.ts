// 数组类型（array）  ts中定义数组有两种方式

// var arr=['1','2'];  //es5定义数组

// 1.第一种定义数组的方式
 let a:number[]=[11,22,33];      //数组的元素均为number类型

    // arr.push('p')  //Argument of type 'string' is not assignable to parameter of type 'number'.

//2.第二种定义数组的方式

  let b:Array<string>=['11','22','33'];