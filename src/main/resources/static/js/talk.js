window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sitemap_btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // 버튼에 on 토글
      btn.classList.toggle('on');
      
      // 이 버튼이 속한 talk_right 찾기
      const talkRight = btn.closest('.talk_right');
      const talkInfo = talkRight.querySelector('.talk_info');

      if (talkInfo) {
        talkInfo.classList.toggle('on');
      }

      // 스크롤 제어
      if (btn.classList.contains('on')) {
        talkRight.classList.add('no-scroll');   // 스크롤 막기
      } else {
        talkRight.classList.remove('no-scroll'); // 스크롤 다시 허용
      }
    });
  });
});