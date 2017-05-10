$(function(){
    //导航栏在页面中的高度
    var $nav=$('.nav');
    var height=$nav.offset().top-113;
    $(window).on('scroll',function(){
        //滚动条高度
        var  scrollTop=$(document).scrollTop();
        //if(scrollTop-height>=0){
        //    $nav.css({
        //        width:'100%',
        //        position:'fixed',
        //        top:0,
        //        left:0,
        //        zIndex:900
        //    })
        //}else{
        //    $nav.css({
        //        position:'relative'
        //    })
        //}
        if(scrollTop-height>=0){
            $nav.addClass('fixed');
        }else{
            $nav.removeClass('fixed');
        }
        //滚动改变tap
        var m_height=$('.schedule').offset().top-40;
        var h_height=$('.com').offset().top-40;
        if(scrollTop>=m_height&&scrollTop<h_height){
            $('.cate').removeClass('active');
            $('.cate_tour').addClass('active')
        }else if(scrollTop<m_height){
            $('.cate').removeClass('active');
            $('.cate_data').addClass('active')
        }else if(scrollTop>=h_height){
            $('.cate').removeClass('active');
            $('.cate_comment').addClass('active')
        }
    });
    //点击跳转
    $('.cate_data').on('click',function(){
        $("html,body").animate({scrollTop: $('.data').offset().top-30}, 1000);
    });
    $('.cate_tour').on('click',function(){
        $("html,body").animate({scrollTop: $('.schedule').offset().top-39}, 1000);
    });
    $('.cate_comment').on('click',function(){
        $("html,body").animate({scrollTop: $('.com').offset().top-30}, 1000);
    });
});
