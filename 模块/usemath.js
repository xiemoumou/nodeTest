//require方法会返回math.js模块中的exports对象
/*
* 同步和异步的区分
* 同步方法的结果通过函数返回值来接受
* 异步方法的结果通过把回调函数传进去，然后等结果ok了再通知到客户端。
* */
//由上面的分析，可以得出，require加载是同步的
var math=require('./math.js');
console.log(math.add(1,2));
/*
* require方法：
* 加载模块后会缓存，多次加载后会得到同一个对象
* 查看模块缓存，require.cache
* 查看模块绝对路径，require.resolve()
* */
//查看模块缓存
console.log(require.cache);     //cache对象中，存放着所有的模块缓存。
//查看模块绝对路径
console.log(require.resolve('./math.js'));
//通过删除require的模块的缓存来达到多次加载的目的,require.resolve('./math.js')返回的绝对路径对应require.cache对象中的key
delete require.cache[require.resolve('./math.js')];
console.log(require.cache);
//重新加载一次math.js模块
var math2=require('./math.js');