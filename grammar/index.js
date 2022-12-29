//  jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行。
//  JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行。

$(function () {
  // 隐藏/显示 display toggle=hide+show
  $('#b1').on('click', function () {
    // $('.d1').hide(1000);
    // $('.d1').show(1000);
    $('.d1').toggle(1000, function () {
      console.log('触发回调函数');
    });
  });

  // 淡入淡出
  $('#b2').on('click', function () {
    // $('.d2').fadeIn();
    // $('.d2').fadeOut();
    $('.d2').fadeToggle(1000);
  });

  // 滑动方法
  $('#b3').on('click', function () {
    // $('.d2').slideDown();
    // $('.d2').slideUp();
    $('.d3').slideToggle(1000);
  });

  // 链式调用
  $('#b4').on('click', function () {
    $('.d4').css('backgroundColor', 'red').slideUp(2000).slideDown(2000, function () {
      // 执行结束后再次调用回调函数
      $(this).css('backgroundColor', '#000');
    });
  });
  
  // text html 可修改元素内文字
  // val 可修改表单内数据
  $('#b5').on('click', function () {
    // 获取内容
    // $('.d5').text(function (index, oldcontent) {
    //   console.log(index, oldcontent);
    // });
    // 修改内容
    $('.d5').html('修改内容');
  });

  // 获取属性
  $('#b6').on('click', function () {
    $('.d6').attr('class', function (index, oldvalue) {
      console.log(index, oldvalue);
    });
  });
});
