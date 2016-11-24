/**********      util模块（node自带的模块）      **********/
var util=require("util");


/**********      inherits   继承方法      **********/
//创建一个父类
function Parent(){

}
//为父类添加一个原型方法
Parent.prototype.sum=function(){
    console.log("父类的原型方法");
}
//创建一个子类
function Child(){
    this.name="zhangsan";
}
//使用inherits继承方法来关联子父类:子类继承父类的原型
util.inherits(Child,Parent);

//实例化一个子类的对象
var kid=new Child();
//尝试调用父类的原型方法
kid.sum();

//inherits实际上类似于原型继承


/**********      inspect   将对象转换成字符串      **********/
//inspect不会输出对象原型上的属性
console.log(util.inspect(kid));

/**********      inspect   参数的研究      **********/
//新创建一个对象
var obj=new Object();
//设置对象的属性
obj.name="张三";
//使用defineProperty()来设置对象的属性
Object.defineProperty(obj,"age",{
    value:120,          //设置属性值
    enumerable:false,  //enumerable：可枚举的,如果是false则无法输出age属性
    configurable:true,   //可配置
    writable:true      //值是否可以改变
})

//输出对象
console.log(util.inspect(obj,{
    showHidden:true,    //显示不可枚举的属性
}));


