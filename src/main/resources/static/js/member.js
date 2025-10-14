// 제대로 입력한 경우 로그인
function emailLogin(event) {
    event.preventDefault(); // ✅ form 기본 제출 막기

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!email || !password) {
        alert("이메일과 비밀번호를 모두 입력하세요.");
        return false;
    }

    const memberDTO = { email, password };

//    showLoading();

    // Fetch 요청 보내기
    fetch('/checkLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // 요청 데이터 형식
        },
        body: JSON.stringify(memberDTO) // 요청 본문 데이터
    })
        .then(response => {
            if (response.status === 200) {
                return response.json(); // 성공 응답 처리
            } else if (response.status === 401) {
                return response.json().then(data => {
                    throw new Error(data.message || '로그인 실패');
                });
            } else {
                throw new Error('Unexpected status code: ' + response.status);
            }
        })
        .then(data => {
            if (data.success) {
                window.isLoggedIn = true; // 로그인 성공 시 로그인 상태 업데이트
                window.location.href = '/'; // 로그인 후 리다이렉션
            }
        })
        .catch(error => {
            // 실패 시 처리
            if (error.message === '로그인 실패') {
                emailLoginFail();
            } else {
                console.error('Error:', error);
                alert("서버와 연결 중 에러 발생.");
            }
        })
        .finally(() => {
            hideLoading();
        });
}

// 틀렸을 경우 빨간색 강조표시.
function emailLoginFail() {
    const item = document.querySelector('.login_form');
    item.querySelector('.messages').removeAttribute('hidden');
}

// join
// 실행 시 /member/emailJoin 으로 이동합니다.
function emailJoinHref() {
    window.location.href = '/emailJoin';
}

// emailJoin
// 실행 시 이메일 정합성을 확인한 후 작성된 이메일을 가지고 /member/emailJoinDetail 로 이동합니다.
function emailJoinDetailHref() {
    const email = document.querySelector('.email-form .form-g .input-block');
    const item = email.closest('.form-g');
    // 이메일 정규식 패턴.
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    // test: 정규 표현식 객체에서 제공하는 메서드로, 주어진 문자열이 정규 표현식과 일치하는지를 검사
    if (!pattern.test(email.value.trim())) {
        alert("이메일 형식이 아닙니다.");

        item.classList.add("is-error");
        item.parentElement.querySelector('.messages').removeAttribute('hidden');

        return false;
    }

    showLoading();

    // Fetch 요청 보내기
    fetch('/existsEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // 요청 데이터 형식
        },
        body: `email=${email.value.trim()}` // 요청 본문 데이터
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // JSON으로 응답 데이터 처리
        })
        .then(data => {
            if (data.exists) {
                alert("중복된 이메일 입니다. 다른 이메일을 입력해주세요.")
            } else {
                item.classList.remove("is-error");
                item.parentElement.querySelector('.messages').setAttribute('hidden', '');
                window.location.href = `/member/emailJoinDetail?email=${encodeURIComponent(email.value.trim())}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("서버와 연결 중 에러 발생.")
        })
        .finally(() => {
            hideLoading();
        });
    return false; // 폼 제출 중단
}
    // item.classList.remove("is-error");
    // item.parentElement.querySelector('.messages').setAttribute('hidden','');
    // // document.getElementById('requored-form').submit();
    // window.location.href = `/member/emailJoinDetail?email=${encodeURIComponent(email.value.trim())}`;



// emailJoinDetail
// 비밀번호 정규식
function passwordRegex() {
    var password = document.querySelector('#password').value;

    const letterPattern = /[A-Z]/;
    const specialPattern = /[^a-zA-Z0-9\s]/;
    const lengthPattern = /^.{8,20}$/;

    const passwordElement = document.querySelector('.join-form .password-strength');
    var checkCount = 0;

    // 비밀번호 정규식 통과 시 체크항목 불들어오기, 정규식 통과 실패시 강조표시
    if(letterPattern.test(password)) {
        passwordElement.querySelector('li:first-child').classList.add("is-active");
        checkCount++;
        if ( !passwordElement.parentElement.querySelector('.messages').hasAttribute('hidden') ) {
            passwordElement.parentElement.querySelector('.messages').setAttribute('hidden', "");
        }
    } else {
        passwordElement.querySelector('li:first-child').classList.remove('is-active');
        passwordElement.parentElement.classList.add("is-error");
        passwordElement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }

    if(specialPattern.test(password)) {
        passwordElement.querySelector('li:nth-child(2)').classList.add("is-active");
        checkCount++;
        if ( !passwordElement.parentElement.querySelector('.messages').hasAttribute('hidden') ) {
            passwordElement.parentElement.querySelector('.messages').setAttribute('hidden', "");
        }
    } else {
        passwordElement.querySelector('li:nth-child(2)').classList.remove('is-active');
        passwordElement.parentElement.classList.add("is-error");
        passwordElement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }

    if(lengthPattern.test(password)) {
        passwordElement.querySelector('li:last-child').classList.add("is-active");
        checkCount++;
        if ( !passwordElement.parentElement.querySelector('.messages').hasAttribute('hidden') ) {
            passwordElement.parentElement.querySelector('.messages').setAttribute('hidden', "");
        }
    } else {
        passwordElement.querySelector('li:last-child').classList.remove("is-active");
        passwordElement.parentElement.classList.add("is-error");
        passwordElement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }

    if( checkCount===3) {
        passwordElement.parentElement.classList.remove("is-error");
        return true;
    } else {
        passwordElement.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
    }
}

// emailJoinDetail
// 비밀번호와 비밀번호확인이 일치하는지 확인.
function rePasswordRegex() {
    var password = document.querySelector('#password');
    var repassword = document.querySelector('#rePassword');


    console.log("password : " + password.value );
    console.log("repassword : " + repassword.value );
    if ( !(password.value == repassword.value)) {
        console.log("repassword if문 통과실패." + repassword );
        repassword.parentElement.classList.add("is-error");
        repassword.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
    } else {
        console.log("repassword if문 통과." + repassword );
        repassword.parentElement.classList.remove("is-error");
        repassword.parentElement.querySelector('.messages').setAttribute('hidden', "");
        return true;
    }
}

// emailJoinDetail
// 유효한 이름 값만 입력 가능하도록 설정합니다.
function nameRegex() {
    const regexPattern = /^[a-zA-Z가-힣]{2,20}$/;
    var memberName = document.querySelector('#name');

    if ( regexPattern.test(memberName.value) ) {
        console.log("정규식 검사 성공")
        memberName.parentElement.classList.remove("is-error");
        memberName.parentElement.querySelector('.messages').setAttribute('hidden', "");
        return true;
    } else {
        console.log("정규식 검사 실패")
        memberName.parentElement.classList.add("is-error");
        memberName.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
    }
}

// emailJoinDetail
// 휴대번호 유효한 값 만 입력 가능하도록 설정합니다.
function phoneRegex() {
    const regexPattern = /^01[0|1|6|7|8|9]\d{7,8}$/;
    var phoneNumber = document.querySelector('#mobile');

    if ( regexPattern.test(phoneNumber.value) ) {
        console.log("휴대폰번호 정규식 검사 성공")
        phoneNumber.parentElement.classList.remove("is-error");
        phoneNumber.parentElement.querySelector('.messages').setAttribute('hidden', "");
        return true;
    } else {
        console.log("휴대폰번호 정규식 검사 실패")
        phoneNumber.parentElement.classList.add("is-error");
        phoneNumber.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
    }
}

// emailJoinDetail
// 전체동의 체크박스 클릭시 하위 체크박스 모두 선택
// 하위 체크박스를 각자 클릭하여 모두 선택시 전체동의 체크박스 체크
// 하위 체크박스중 하나이상 체크를 해제할 경우 전체동의 체크박스 체크 해제,
// 하위 체크박스에 체크 해제시 빨간색 안내문구 표기.
window.addEventListener('DOMContentLoaded', function () {
    const agreeAllCheckbox = document.querySelector('.fieldset-header .checkbox');
    // const agreeAllCheckbox = document.querySelector('.fieldset-header .checkbox_input')
    const otherCheckboxes = document.querySelectorAll('.agree-list .checkbox');

    if (agreeAllCheckbox) {
        agreeAllCheckbox.addEventListener('click', function (e) {
            e.stopPropagation();
            let chBox = this.querySelector('input[type=checkbox]');
            chBox.checked = !chBox.checked;

            otherCheckboxes.forEach(checkbox => {
                checkbox.querySelector('.checkbox_input').checked = chBox.checked;

                // 체크박스 상태에 따라 is-error 클래스 추가/제거
                const item = checkbox.closest('.form-g');
                const msg = item.querySelector('.messages');

                if (!chBox.checked) {
                    item.classList.add("is-error");
                    if (msg && msg.getAttribute('hidden') != null) {
                        msg.removeAttribute('hidden');
                    }
                } else {
                    item.classList.remove("is-error");
                    if (msg) {
                        if (msg.getAttribute('hidden') == null) {
                            msg.setAttribute("hidden", "");
                        }
                    }
                }
            });

            // otherCheckboxes.forEach(v => v.checked = this.checked);
        });
    }

    if (otherCheckboxes) {
        otherCheckboxes.forEach(box => {
            box.addEventListener('click', function (e) {
                e.stopPropagation();
                let chBox = this.querySelector('input[type=checkbox]');

                chBox.checked = !chBox.checked;

                // "전체 동의" 체크박스 상태 업데이트
                agreeAllCheckbox.querySelector('.checkbox_input').checked = [...otherCheckboxes].every(v => v.querySelector('input[type=checkbox]').checked);

                // 체크된 상태 확인 후 is-error 클래스 추가/제거
                const item = box.closest('.form-g');
                const msg = item.querySelector('.messages');
                if (!chBox.checked) {

                    item.classList.add("is-error");
                    if (msg && msg.getAttribute('hidden') != null) {
                        msg.removeAttribute('hidden');
                    }
                } else {

                    item.classList.remove("is-error");
                    if (msg) {
                        if (msg.getAttribute('hidden') == null) {
                            msg.setAttribute("hidden", "");
                        }
                    }
                }
            });
        });
    }
});



// 모든 사항이 다 입력되었을 때 회원가입.
// 전체적인 정합성을 확인하여 회원가입을 실행
// 전체동의 컬럼에서 필수값만 선택되어도 회원가입 가능
function validateAndSignUp() {
    const isPasswordValid = passwordRegex();
    const isRePasswordValid = rePasswordRegex();
    const isNameValid = nameRegex();
    const isPhoneValid = phoneRegex();
    const isAgreeAllChecked = document.querySelectorAll('.agree-list .checkbox_input').checked;

    const requiredCheckboxes = document.querySelectorAll('.agree-list .checkbox_input[required]');
    const isAllRequiredChecked = [...requiredCheckboxes].every(checkbox => checkbox.checked);

    if (!isAllRequiredChecked) {
        alert('필수 동의 항목에 모두 동의해주세요.');
        return;
    }

    if (isPasswordValid && isRePasswordValid && isNameValid && isPhoneValid && isAllRequiredChecked) {
        signUp();
    } else {
        alert('모든 필드를 올바르게 입력해 주세요.');
    }
}

function signUp() {
    // 회원가입 실행 로직을 여기에 작성
    alert('회원가입이 완료되었습니다!');
    window.location.href = '/member/joinComplete';
}

// emailFind
// 비밀번호를 초기화하고 임시비밀번호를 팝업으로 보여줍니다.
function resetPassword() {
    const email = document.querySelector('.email-form .form-g .input-block')
    const item = email.closest('.form-g');
    // 이메일 정규식 패턴.
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    // test: 정규 표현식 객체에서 제공하는 메서드로, 주어진 문자열이 정규 표현식과 일치하는지를 검사
    if (!pattern.test(email.value.trim())) {
        alert("이메일 형식이 아닙니다.");

        item.classList.add("is-error");
        item.parentElement.querySelector('.messages').removeAttribute('hidden');

        return false;
    }

    showLoading();

    // Fetch 요청 보내기
    fetch('/member/resetPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // 요청 데이터 형식
        },
        body: JSON.stringify({ email: email.value.trim() }) // 요청 본문 데이터
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // 모달에 임시 비밀번호 표시
                document.getElementById('temp-password').textContent = data.tempPassword;
                document.getElementById('password-modal').style.display = 'flex';
            } else {
                alert(data.message); // "입력한 이메일로 가입된 회원이 없습니다."
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("서버와 연결 중 에러가 발생했습니다.");
        })
        .finally(()=> {
            hideLoading();
        });

    return false; // 폼 제출 중단
}

// 생성한 팝업을 닫습니다.
function closeModal() {
    document.getElementById('password-modal').style.display = 'none';
}