$(function () {
  // 文字の色変化
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });
  // 文字の内容変化
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });
  // フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  })
  // フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  })
});