document.addEventListener('DOMContentLoaded', function() {
    const modal1 = document.getElementById('#modalContainer1');
    const modal2 = document.getElementById('#modalContainer2');

    // modal1에서 슬라이드 관련 요소 선택
    const modalSliderWrap1 = modal1.querySelector('#modalContainer1');
    const imageSlider1 = modal1.querySelector('.image-slider'); // 이미지 슬라이더 선택
    const prevButton1 = modal1.querySelector('#modalPrevButton1'); // ID로 선택
    const nextButton1 = modal1.querySelector('#modalNextButton1'); // ID로 선택

    // modal2에서 슬라이드 관련 요소 선택
    const modalSliderWrap2 = modal2.querySelector('#modalContainer2');
    const imageSlider2 = modal2.querySelector('.image-slider'); // 이미지 슬라이더 선택
    const prevButton2 = modal2.querySelector('#modalPrevButton2'); // ID로 선택
    const nextButton2 = modal2.querySelector('#modalNextButton2'); // ID로 선택

    let currentIndex1 = 0;
    let currentIndex2 = 0;

    const showImage = (slider, index) => {
        const images = slider.querySelectorAll('img'); // 이미지 선택
        const totalImages = images.length;
        index = (index + totalImages) % totalImages; // 인덱스를 순환 처리
        const offset = -index * 100; // 슬라이드 이동
        images.forEach((img) => {
            img.style.transform = `translateX(${offset}%)`;
        });
        return index; // 현재 인덱스를 반환
    };

    const moveToSlide1 = (index) => {
        currentIndex1 = showImage(imageSlider1, index); // imageSlider1 사용
    };

    const moveToSlide2 = (index) => {
        currentIndex2 = showImage(imageSlider2, index); // imageSlider2 사용
    };

    prevButton1.addEventListener('click', () => {
        moveToSlide1(currentIndex1 - 1);
    });

    nextButton1.addEventListener('click', () => {
        moveToSlide1(currentIndex1 + 1);
    });

    prevButton2.addEventListener('click', () => {
        moveToSlide2(currentIndex2 - 1);
    });

    nextButton2.addEventListener('click', () => {
        moveToSlide2(currentIndex2 + 1);
    });
});
