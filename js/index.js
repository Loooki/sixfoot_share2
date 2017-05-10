
$(document).ready(function(){
    $('.sum').children('span').on('touchstart',function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    })
    $('.sum1').children('span').on('touchstart',function(){
        $('.com').show();
        $('.pho').hide();
    })
    $('.sum2').children('span').on('touchstart',function(){
        $('.com').hide();
        $('.pho').show();
    })
    //
    $('.toggle_btn').on('touchend',function(){
        if($(this).next().hasClass('icon-icon_uparrow')){
            $(this).next().addClass('icon-icon_downarrow');
            $(this).next().removeClass('icon-icon_uparrow');
            $(this).text('全部展开');
            $('.detail').addClass('detail_small');
        }else if($(this).next().hasClass('icon-icon_downarrow')){
            $(this).next().addClass('icon-icon_uparrow');
            $(this).next().removeClass('icon-icon_downarrow');
            $(this).text('全部收起');
            $('.detail').removeClass('detail_small');
        }
    })
    //微信页面不能调转
    var browser=null;
    $('.downloadapp').on('touchend',function(){
        is_weixin();
        if(browser==1){
           alert('Android') ;
           // window.location.href = '';
        }else if(browser==2){
            alert('IOS');
            // window.location.href = '';
        }
    })
    function is_weixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            $('.ios_mask').show();
        }
        else {
            var u = navigator.userAgent, app = navigator.appVersion;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                browser=1;
            }
            if (isIOS) {
                browser=2;
            }
        }
    }
    //打开app
    $('.openapp').on('touchend',function(){
        is_weixin();
        openApp();
    });
    function openApp(){
        if(browser==1){
            location.href = 'sixfoot://com.topgether.sixfoot/ActivityName?paramrouteid=23&paramtitle=26';
            var t = Date.now();
            setTimeout(function(){
                if (Date.now() - t < 1200) {
                    location.href = 'Android 下载地址';
                }
            }, 1000);
            return false;
        }else if(browser==2){
            location.href = 'sixfoot://activity-123456';
            setTimeout(function() {
                location.href = 'IOS 下载页';
            }, 250);
            setTimeout(function() {
                location.reload();
            }, 1000);
        }
    }
})

