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
	//微信页面弹出层显示
	$('.ios_mask').on('touchstart',function(){
		$(this).hide();
	})
	$('.android_mask').on('touchstart',function(){
		$(this).hide();
	})
    //微信页面不能调转
    var browser=null;
    var wx=false;
	//下载
    $('.downloadapp').on('touchend',function(e){
		e.preventDefault();
        is_weixin();
        user();
        if(wx==true&&browser==1){
            $('.android_mask').show();
        }else if(wx==true&&browser==2){
            $('.ios_mask').show();
        }else if(wx==false&&browser==1){
           //alert('Android') ;
           window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.topgether.sixfoot';
        }else if(wx==false&&browser==2){
           // alert('IOS');
             window.location.href = 'https://itunes.apple.com/app/apple-store/id543465749?pt=2224329&ct=H5_activity&mt=8';
        }
    });
	 //打开app
    $('.openapp').on('touchend',function(e){
		e.preventDefault();
        is_weixin();
        user();
		 if(wx==true&&browser==1){
            $('.android_mask').show();
        }else if(wx==true&&browser==2){
            $('.ios_mask').show();
        }
        id = $(this).attr('href')
        openApp(id);
    });
    function is_weixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            wx=true;
        }
    }
    function user(){
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
    function openApp(huodong_id){
        if(wx==false&&browser==1){
			 $('body').append("<iframe src='sixfoot://com.topgether.sixfoot/ActivityName?paramrouteid=23&paramtitle=26' style='display:none' target='' ></iframe>");
            //没有安装应用会执行下面的语句
            setTimeout(function(){window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.topgether.sixfoot'},600);
        }else if(wx==false&&browser==2){
             location.href = 'sixfoot://activity-'+huodong_id;
			 setTimeout(function(){window.location = 'https://itunes.apple.com/app/apple-store/id543465749?pt=2224329&ct=H5_activity&mt=8'},1200);
        }
    }
})

