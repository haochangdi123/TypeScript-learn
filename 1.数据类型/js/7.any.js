"use strict";
// 任意类型（any）
var f = 123;
f = 'pppp';
f = true;
//任意类型的用处
// 如果我们去获取页面中的div，并赋予样式，报错说oBox时Object
// let oBox=document.getElementById('box');
// oBox.style.color='red';   
// 可是并没有Object类型，这是我们就可以设置为any类型
var oBox = document.getElementById('box');
oBox.style.color = 'red';
