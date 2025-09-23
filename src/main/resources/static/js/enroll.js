window.addEventListener('DOMContentLoaded', function () {
    var radios = document.getElementsByName('state');

    radios.forEach(elem => {
        elem.addEventListener('change', function () {
            if (this.checked) {
            console.log("선택된 상태:", this.value);
            // 👉 여기서 추가 작업 가능 (예: hidden input 값 변경, UI 업데이트 등)
            }
        });
    });

    var deilradios = document.getElementsByName('deil');

    deilradios.forEach(elem => {
        elem.addEventListener('change', function () {
            if (this.checked) {
            console.log("선택된 상태:", this.value);
            // 👉 여기서 추가 작업 가능 (예: hidden input 값 변경, UI 업데이트 등)
            }
        });
    });
});