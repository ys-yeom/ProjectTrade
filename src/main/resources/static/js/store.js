window.addEventListener('DOMContentLoaded', () => {
  /*상점명 수정*/
 const wrap = document.querySelector(".sname_wrap");
  const defaultName = "상점25호";

  // localStorage에서 불러오기
  const savedName = localStorage.getItem("storeName") || defaultName;
  wrap.querySelector(".sname").textContent = savedName;

  function enableEdit(name) {
    wrap.innerHTML = `
      <input class="snameInput" value="${name}" autofocus>
      <button class="saveBtn">확인</button>
    `;
    const input = wrap.querySelector(".snameInput");
    const saveBtn = wrap.querySelector(".saveBtn");

   function save() {
     const newValue = input.value.trim();
     if (!newValue) {
       alert("이름을 입력해주세요.");
       return;
     }

     // 화면 저장 (localStorage는 선택사항)
     localStorage.setItem("storeName", newValue);

     // 서버로 전송
     fetch('/store/updateName', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name: newValue })
     })
     .then(response => response.json())
     .then(data => {
       if (data.success) {
         // 성공 시 화면 반영
         wrap.innerHTML = `
           <span class="sname">${newValue}</span>
           <button class="rename_btn">상점명 수정</button>
         `;
         wrap.querySelector(".rename_btn").addEventListener("click", () => enableEdit(newValue));
       } else {
         alert('수정 실패');
       }
     })
     .catch(err => alert('에러: ' + err.message));
   }

    saveBtn.addEventListener("click", save);
    input.addEventListener("keydown", e => e.key === "Enter" && save());
  }

  wrap.querySelector(".rename_btn").addEventListener("click", () => enableEdit(savedName));





/* function save() {
  const newValue = input.value.trim();
  if (!newValue) {
    alert("이름을 입력해주세요.");
    return;
  }

  // 화면 저장 (localStorage는 선택사항)
  localStorage.setItem("storeName", newValue);

  // 서버로 전송
  fetch('/store/updateName', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: newValue })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // 성공 시 화면 반영
      wrap.innerHTML = `
        <span class="sname">${newValue}</span>
        <button class="rename_btn">상점명 수정</button>
      `;
      wrap.querySelector(".rename_btn").addEventListener("click", () => enableEdit(newValue));
    } else {
      alert('수정 실패');
    }
  })
  .catch(err => alert('에러: ' + err.message));
}
*/

// const countEl = document.querySelector('.re_count'); // 카운트 표시 span
//         const items = document.querySelectorAll('.all_store li'); // 상품 li들

//         countEl.textContent = items.length; // li 개수로 카운트 설정



// 카운트를 처리할 요소와 리스트 정보를 배열로 정의
    const counters = [
        { countEl: '.re_count', listEl: '.all_store' },       // 상품
        { countEl: '.review_re_count', listEl: '.all_review' } // 리뷰
    ];

    counters.forEach(({ countEl, listEl }) => {
        const countElement = document.querySelector(countEl);
        const listElement = document.querySelector(listEl);

        if (!countElement || !listElement) return; // 없으면 무시

        // 카운트 업데이트 함수
        const updateCount = () => {
            const items = listElement.querySelectorAll('li');
            countElement.textContent = items.length;
        };

        updateCount(); // 초기 카운트

        // 실시간 감지를 위해 MutationObserver 적용
        const observer = new MutationObserver(updateCount);
        observer.observe(listElement, { childList: true });
    });


  document.querySelectorAll(".store_a_wrap li").forEach(function (li) {
    li.addEventListener("click", function () {
      let link = li.querySelector("a")?.getAttribute("href");
      if (link) {
        window.location.href = link;
      }
    });
  });


});