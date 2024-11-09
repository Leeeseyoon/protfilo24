document.addEventListener('DOMContentLoaded', function() {
    const movingText = document.querySelector('.moving-text');
    let position = -movingText.offsetWidth; // 초기 위치를 화면 밖으로 설정

    // CSS 스타일 추가
    document.body.style.overflowX = 'hidden'; // 가로 스크롤 숨기기

    function moveText() {
        position += 10; // 이동 속도
        movingText.style.transform = `translateX(${position}px)`; // 위치 업데이트

        // 원래 위치에 도달하면 애니메이션 멈춤
        if (position >= -1) {
            return; // 애니메이션 종료
        }

        requestAnimationFrame(moveText); // 애니메이션 반복
    }

    moveText(); // 애니메이션 시작
});