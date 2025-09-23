window.addEventListener('DOMContentLoaded', function () {
    // 로그인페이지 입력필드 삭제버튼 토글
    document.querySelectorAll('.login_container .input_wrap input, .login_container .join_wrap input').forEach(function(input) {
      input.addEventListener('keyup', function() {
          if (this.value) {
              this.nextElementSibling.style.display = 'block';
          } else {
              this.nextElementSibling.style.display = 'none';
          }
      });
  });

    //삭제 버튼 클릭 시 입력 필드 초기화
    document.querySelectorAll('.login_container .delete_btn').forEach(function(button) {
        button.addEventListener('click', function() {
            this.previousElementSibling.value = '';
            this.style.display = 'none';
    });
  });

  document.querySelectorAll('style').forEach((el, i) => {
    console.log(i, el.innerText.slice(0, 200)); // 앞부분만 출력
  });




});