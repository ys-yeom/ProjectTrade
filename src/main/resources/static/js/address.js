window.addEventListener('DOMContentLoaded', function () {
  // 입력 필드 토글
    document.querySelectorAll('.address_main .way_wrap input, .address_find .find_wrap input').forEach(function(input) {
        const deleteBtn = input.parentElement.querySelector('.delete_btn'); // input과 같은 wrapper 안의 버튼
        input.addEventListener('keyup', function() {
            if (this.value) {
                deleteBtn.style.display = 'block';
            } else {
                deleteBtn.style.display = 'none';
            }
        });
    });

    // 삭제 버튼 클릭 시 입력 필드 초기화
    document.querySelectorAll('.address_main .way_wrap .delete_btn, .address_find .find_wrap .delete_btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input'); // wrapper 안의 input 찾기
            input.value = '';
            this.style.display = 'none';
        });
    });

     // 모든 삭제 버튼에 이벤트 걸기
  document.querySelectorAll(".delete_we").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (confirm("정말 삭제하시겠습니까?")) {
        // 가장 가까운 .ars_infor 찾아서 제거
        this.closest(".ars_infor").remove();
      }
    });
  });
});
