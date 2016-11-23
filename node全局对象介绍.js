//全局对象global，可以在程序的任何地方被访问到
//能在程序任何地方访问到的对象都是global的属性
//global本身也是global的属性
console.log(global);

/**********      global中的全局对象console      **********/
console.log("log");
console.error("error");
console.info("info");
console.warn("warn");

//console还有一个实用的属性，用来统计代码运行的时间

//计时的时候，console.time()中的参数是一个字符串，但首尾的字符串一定要相同！
console.time("计时器");
for(var i=0;i<1000000;i++){

}
console.timeEnd("计时器");

/**********      __filename 和  __dirname    **********/
//输出当前模块的绝对路径
console.log(__filename);
//输出当前模块的所在文件夹的绝对路径
console.log(__dirname);

/**********      setImmediate() 和  setImmediate    **********/

//setImmediate()        把参数函数放在下一个事件环中执行。下一个任务列表的顶端，相当于下一个js页面的顶端
setImmediate(function(){
    console.log("在timeout执行完成后执行")
},0);

//setTimeout();不做解释 ,定时设置为0，方便理解下面的setImmediate
setTimeout(function(){
    console.log("先执行timeOut再执行setImmediate");
},0);

/**********      process对象      **********/
//输出当前工作目录  cwd
console.log("当前工作目录为："+process.cwd());

//更改当前工作目录到上级工作目录    chdir
process.chdir("..");

//输出切换后的目录
console.log("切换后的目录是："+process.cwd());

//显示内存使用量
/*
* { rss: 22,077,440,          常驻内存
 * heapTotal: 8,368,128,      堆的总内存
  * heapUsed: 3,873,848 }     堆已经使用的内存
* */
console.log(process.memoryUsage());

//process.nextTick()    当前任务列表的末尾   也相当于当前js页面的尾部
process.nextTick(function(){
    console.log("比setTimeout晚，比setImmediate快");
});

