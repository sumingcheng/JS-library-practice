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

  // 后代
  $('#b13').on('click', function () {
    // 获取所有是h1的后代，返回类数组
    console.log($('.d13').children('h1'));
  });

  // 查找
  $('#b14').on('click', function () {
    // 查找后代某个元素
    console.log($('.d14').find('footer'));
  });

  // 兄弟
  $('#b15').on('click', function () {
    // 找兄弟
    // console.log($('.d15').siblings('div'));
    // 下一个兄弟
    // console.log($('.d15').next('div'));
    // 后面所有兄弟
    // console.log($('.d15').nextAll());
    // 夹在中间的兄弟
    console.log($('.d15').nextUntil('p'));
  });

  // 过滤
  $('#b16').on('click', function () {
    // 返回带有类名 ".d16" 的所有元素：
    // console.log($('.d16').filter('.d16'));
    // 返回不匹配标准的所有元素
    console.log($('.d16').not('.d15'));
    // 返回选取的第一个元素
    // console.log($('.d16').first());
    // 返回选取的最后一个元素
    // console.log($('.d16').last());
    // 返回被选元素中带有指定索引号的元素。 类似于选择元素内的关键字
    // console.log($('.d16').eq(2));
  });


});
// 通过全名替代简写的方式来使用 jQuery,这种方式是为了方便在某些项目中不占用$
// noConflict

// $.noConflict();
// jQuery(function () {
//   console.log(document);
// });
