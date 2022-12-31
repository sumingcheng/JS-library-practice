//  jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行。
//  JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行。
let p = `<p>追加元素</p>`;
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

  // 添加元素
  $('#b7').on('click', function () {
    // 追加内容
    $('.d7').append(p);
    // 开头插入
    // $('.d7').prepend(p);
  });

  // 被选元素之后插入内容
  $('#b8').on('click', function () {
    // $('.d8').after('11111111');
    $('.d8').before(`
      <div>div</div>
    `);
  });

  // 删除元素
  $('#b9').on('click', function () {
    // 删除内容
    $('.d9').empty();
    // 删除元素
    // $('.d9').remove();
  });

  // 添加/删除类
  $('#b10').on('click', function () {
    // 添加类
    // $('.d10').addClass('NiuB2');
    // 删除类
    // $('.d10').removeClass('NiuB');
    // 添加删除
    $('.d10').toggleClass('NiuB3');
  });

  // 尺寸
  $('#b11').on('click', function () {
    // 获取
    // console.log($('.d11').width());
    // 设置
    $('.d11').height('200');
  });

  // 祖先
  $('#b12').on('click', function () {
    // 返回父级，是个类数组
    // console.log($('.d12').parent());
    // 返回所有父级，是个类数组
    // console.log($('.d12').parents());
    // 返回元素的相同祖先，是个类数组
    console.log($('.d12').parentsUntil());
  });



});
