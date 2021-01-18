 //点击播放
 $(".playAnue").tap(function() {
     audio.play();
     $(".pauseAnue").css("display", "block");
     $(this).css("display", "none")
     $("#audio_bg").find("img").addClass("audio_bg_active");
 });
 //点击暂停
 $(".pauseAnue").tap(function() {
     audio.pause();
     $(".playAnue").css("display", "block");
     $(this).css("display", "none")
     $("#audio_bg").find("img").hide();
     $("#audio_bg").find("img").removeClass("audio_bg_active");
     setTimeout(function() {
         $("#audio_bg").find("img").show();
     }, 1000)
 });
 //背景点击消失,双击出现
 $("#audio_bg").find("img").singleTap(function() {
     $(this).css("display", "none")
 });
 $("#audio_bg").doubleTap(function() {
     $(this).find("img").css("display", "block")
 });
 //播放列表
 $(".bottomAnue").children().eq(-1).find("img").tap(function() {
     $("#music_menu").css("display", "block")
 })
 $("#audio_bg").tap(function() {
     $("#music_menu").css("display", "none")
 });
 //点击喜欢
 $(".like").tap(function() {
     $(this).css("display", "none").siblings(".like").css("display", "block");
 });
 /*  //文字滚动
  var ulScroll = new ulScroll("express");
  ulScroll.init(); */
 //列表切歌
 $(".music_src").tap(function() {
     $(this).parent().css("color", "rgb(240, 229, 82)").siblings().css("color", "rgb(247, 190, 126)")
     $("#audio").attr("src", $(this).data("src"));
     audio.play();
     $(".pauseAnue").css("display", "block");
     $(".playAnue").css("display", "none")
     $("#audio_bg").find("img").addClass("audio_bg_active");
     $("#Header").find("span").text($(this).children("span").eq(0).text())
     $("#audio_author").children().eq(1).text($(this).children("span").eq(1).text());
     $("body").css("backgroundImage", "url(" + $(this).data("bodybg") + ")")
 });
 //按钮切歌
 //上一首
 $(".up_music").tap(function() {
     $("#music_menu").children().each(function() {
         if ($(this).css("color") == "rgb(240, 229, 82)") {
             if ($(this).index() == 0) {
                 $("#music_menu").children().eq($("#music_menu").children().length - 1).css("color", "rgb(240, 229, 82)").siblings().css("color", "rgb(247, 190, 126)")
                 $("#audio").attr("src", $("#music_menu").children().eq($("#music_menu").children().length - 1).children(".music_src").data("src"));
                 audio.play();
                 $(".pauseAnue").css("display", "block");
                 $(".playAnue").css("display", "none");
                 $("#audio_bg").find("img").addClass("audio_bg_active");
                 $("#Header").find("span").text($("#music_menu").children().eq($("#music_menu").children().length - 1).children(".music_src").children("span").eq(0).text())
                 $("#audio_author").children().eq(1).text($("#music_menu").children().eq($("#music_menu").children().length - 1).children(".music_src").children("span").eq(1).text());
                 $("body").css("backgroundImage", "url(" + $("#music_menu").children().eq($("#music_menu").children().length - 1).children(".music_src").data("bodybg") + ")")
                 return false;
             } else {
                 $("#audio").attr("src", $(this).prev().children(".music_src").data("src"));
                 audio.play();
                 $(".pauseAnue").css("display", "block");
                 $(".playAnue").css("display", "none")
                 $(this).prev().css("color", "rgb(240, 229, 82)").siblings().css("color", "rgb(247, 190, 126)")
                 $("#audio_bg").find("img").addClass("audio_bg_active");
                 $("#Header").find("span").text($(this).prev().children(".music_src").children("span").eq(0).text())
                 $("#audio_author").children().eq(1).text($(this).prev().children(".music_src").children("span").eq(1).text());
                 $("body").css("backgroundImage", "url(" + $(this).prev().children(".music_src").data("bodybg") + ")")
             }
         }
     })
 });
 //下一首
 $(".down_music").tap(function() {
     $("#music_menu").children().each(function() {
         if ($(this).css("color") == "rgb(240, 229, 82)") {
             if ($(this).index() == $("#music_menu").children().length - 1) {
                 $("#audio").attr("src", $("#music_menu").children().eq(0).children(".music_src").data("src"));
                 audio.play();
                 $(".pauseAnue").css("display", "block");
                 $(".playAnue").css("display", "none")
                 $("#music_menu").children().eq(0).css("color", "rgb(240, 229, 82)").siblings().css("color", "rgb(247, 190, 126)")
                 $("#audio_bg").find("img").addClass("audio_bg_active");
                 $("#Header").find("span").text($("#music_menu").children().eq(0).children(".music_src").children("span").eq(0).text())
                 $("#audio_author").children().eq(1).text($("#music_menu").children().eq(0).children(".music_src").children("span").eq(1).text());
                 $("body").css("backgroundImage", "url(" + $("#music_menu").children().eq(0).children(".music_src").data("bodybg") + ")")
                 return false;
             } else {
                 $("#audio").attr("src", $(this).next().children(".music_src").data("src"));
                 audio.play();
                 $(".pauseAnue").css("display", "block");
                 $(".playAnue").css("display", "none")
                 $(this).next().css("color", "rgb(240, 229, 82)").siblings().css("color", "rgb(247, 190, 126)")
                 $("#audio_bg").find("img").addClass("audio_bg_active");
                 $("#Header").find("span").text($(this).next().children(".music_src").children("span").eq(0).text())
                 $("#audio_author").children().eq(1).text($(this).next().children(".music_src").children("span").eq(1).text());
                 $("body").css("backgroundImage", "url(" + $(this).next().children(".music_src").data("bodybg") + ")")
                 return false;
             }
         }
     })
 });