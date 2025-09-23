window.addEventListener('DOMContentLoaded', function () {
  // 택배와 직접 받기 요소 가져오기
    const sdeil = document.querySelector('.deal_p .sdeil_wrap');
    const deil = document.querySelector('.deal_p .deil_wrap');

    // 클릭 이벤트 추가
    sdeil.addEventListener('click', () => {
        sdeil.classList.add('selected');  // 선택 표시
        deil.classList.remove('selected');
        console.log('택배로 받기 선택됨');
    });

    deil.addEventListener('click', () => {
        deil.classList.add('selected');
        sdeil.classList.remove('selected');
        console.log('직접 만나서 받기 선택됨');
    });
   
});
