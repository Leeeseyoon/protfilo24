document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    
    // 초기 상태 설정
    function initializeSlider() {
        slides[currentIndex].classList.add('active');
    }
    
    // 슬라이드 이동 함수
    function moveToSlide(index) {
        // 현재 활성화된 슬라이드의 active 클래스 제거
        slides[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        // 범위를 벗어나지 않도록 처리
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        
        // 새로운 슬라이드에 active 클래스 추가
        slides[currentIndex].classList.add('active');
        
        // 슬라이더 이동
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // 버튼 이벤트 리스너
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });
    
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });
    
    // 초기화
    initializeSlider();
});