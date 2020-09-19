$(function() {
    // 「#sidebar-button--open」のclickイベント→「#sidebar」を開く
    $('#sidebar-button--open').on('click', function() {
      $('#sidebar').addClass('is-open');
      $('#sidebar-background').fadeIn();
    });

});