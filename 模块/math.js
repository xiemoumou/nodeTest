/*
*1、 每一个js文件都是一个模块
*2、 每一个模块内部的变量都是私有变量，外部其他模块无法访问
* */
function add(a,b){
    return a+b;
}

//对外暴露add方法
exports.add=add;
//查看当前模块
console.log(module);
console.log('成功引入了math.js模块')
/*
* id：当前模块的绝对地址
* exports：当前模块的导出对象，一次导出，终身使用（多次导出也只会执行一次math.js的内容,因为已经有了缓存文件。）
* parent：谁require了这个模块，parent就是谁
* children：当前模块require了谁，谁就在children内
* loaded：当前模块是否执行完成
* paths：模块查找路径
* */