$(function(){
  // 游戏介绍选项卡
  $('#ul1 li a').mouseenter(function(){
    $(this).addClass('on').parents().siblings().find('a').removeClass('on')
    var i = $(this).parents().index();
    $('.titlebox .gameInt').eq(i).removeClass('active').siblings().addClass('active')
  })
  // 游戏特色选项卡
  $('.gameInt .gameNav .i').click(function(){
    $(this).addClass('i-2').parents().siblings().find('.i').removeClass('i-2');
    var ind = $(this).parents().index();
    $('.gameNav li a').eq(ind).addClass('ab').parents().siblings().find('a').removeClass('ab');
    $('.gameNav li a').eq(ind).attr('id','on1').parents().siblings().find('a').removeAttr('id');
    $('.game-box .game').eq(ind).removeClass('active1').siblings().addClass('active1')
  })
})
