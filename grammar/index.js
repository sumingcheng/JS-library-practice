//  jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行。
//  JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行。

$(function () {
  // 隐藏/显示 display toggle=hide+show
  $('#b1').click(function () {
    // $('.d1').hide(1000);
    $('.d1').toggle(1000);
  });

  // 淡入淡出
  $('#b2').click(function () {
    // $('.d2').fadeIn();
    // $('.d2').fadeOut();
    $('.d2').fadeToggle(1000);
  });
  // 滑动方法

  $('#b3').click(function () {
    // $('.d2').slideDown();
    // $('.d2').slideUp();
    $('.d3').slideToggle(1000);
  });
});
