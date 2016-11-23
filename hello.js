$(function(){
    var iNow=0,
        timer=null;
    //实现按钮的效果——点击
    //each相当于for循环，用来遍历数组的。
    // $(".list-num li").each(function(){});

    //jQuery中大部分的方法（事件、效果、css、高度、文本等等）本身就有遍历机制。
    $(".list-num li").click(function(){
        //先取消掉所有的li的current
        $(".list-num li").removeClass("current");
        //设置被点击的li的class为current
        $(this).addClass("current");

        //点击按钮后切换轮播图
        /*
         思路：
         a、点击当前按钮，获其索引值
         b、根据当前获取的索引值来计算ul应该移动的距离
         ul移动的距离怎么来确定呢？
         每一张图片宽度是500，那么ul每移动-500px，其实就能实现一次图片的切换。
         */
        $(".scroll-images").animate({left:-500*$(this).index()},300);
        iNow=$(this).index();
    });

    //自动播放
    //声明一个用来计算ul运动距离的标记变量
    //我们通过点击获取li的索引来参与ul运动的计算，得到的索引值为：0、1、2、3、4、5
    //此时我们使用iNow标记变量来替代这些值。

    timer=setInterval(function(){
        if(iNow>5){
            iNow=0;
        }
        $(".scroll-images").animate({left:-500*iNow},300);
        $(".list-num li").removeClass("current");
        $(".list-num li:eq("+iNow+")").addClass("current");
        iNow++;
    },500);

    //当鼠标移入div#box的时候，定时器要暂停，移出的时候定时器要继续
    $("#box").hover(function(){
        //暂停定时器
        clearInterval(timer);
    },function(){
        //继续定时器
        timer=setInterval(function(){
            if(iNow>5){
                iNow=0;
            }
            $(".scroll-images").animate({left:-500*iNow},300);
            $(".list-num li").removeClass("current");
            $(".list-num li:eq("+iNow+")").addClass("current");
            iNow++;
        },500);
    })
});