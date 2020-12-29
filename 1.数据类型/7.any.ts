// 任意类型（any）

let f:any = 123
f = 'pppp'
f = true

 //任意类型的用处
    // 如果我们去获取页面中的div，并赋予样式，报错说oBox时Object
    
        // let oBox=document.getElementById('box');
        // oBox.style.color='red';   

    // 可是并没有Object类型，这是我们就可以设置为any类型

        let oBox:any=document.getElementById('box');
        oBox.style.color='red';  


