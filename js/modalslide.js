document.addEventListener('DOMContentLoaded', function() {
    const modal1 = document.getElementById('modalContainer1');
    const modal2 = document.getElementById('modalContainer2');
    const modal3 = document.getElementById('modalContainer3');

    if (!modal1 || !modal2 || !modal3) return;

    const imageSlider1 = modal1.querySelector('.image-slider');
    const prevButton1 = modal1.querySelector('#modalPrevButton');
    const nextButton1 = modal1.querySelector('#modalNextButton');

    const imageSlider2 = modal2.querySelector('.image-slider');
    const prevButton2 = modal2.querySelector('#modalPrevButton2');
    const nextButton2 = modal2.querySelector('#modalNextButton2');

    const imageSlider3 = modal3.querySelector('.image-slider');
    const prevButton3 = modal3.querySelector('#modalPrevButton');
    const nextButton3 = modal3.querySelector('#modalNextButton');

    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;

    const showImage = (slider, index) => {
        if (!slider) return index;
        
        const images = slider.querySelectorAll('img');
        if (!images.length) return index;
        
        const totalImages = images.length;
        index = (index + totalImages) % totalImages;
        
        // 현재 이미지만 보이도록 설정
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none'; // 현재 이미지만 보이게 함
            img.style.maxWidth = '100%'; // 이미지 크기를 슬라이더에 맞춤
        });
        
        return index;
    };

    const moveToSlide1 = (index) => {
        currentIndex1 = showImage(imageSlider1, index);
    };

    const moveToSlide2 = (index) => {
        currentIndex2 = showImage(imageSlider2, index);
    };

    const moveToSlide3 = (index) => {
        currentIndex3 = showImage(imageSlider3, index);
    };

    if (prevButton1 && nextButton1) {
        prevButton1.addEventListener('click', () => {
            moveToSlide1(currentIndex1 - 1);
        });

        nextButton1.addEventListener('click', () => {
            moveToSlide1(currentIndex1 + 1);
        });
    }

    if (prevButton2 && nextButton2) {
        prevButton2.addEventListener('click', () => {
            moveToSlide2(currentIndex2 - 1);
        });

        nextButton2.addEventListener('click', () => {
            moveToSlide2(currentIndex2 + 1);
        });
    }

    if (prevButton3 && nextButton3) {
        prevButton3.addEventListener('click', () => {
            moveToSlide3(currentIndex3 - 1);
        });

        nextButton3.addEventListener('click', () => {
            moveToSlide3(currentIndex3 + 1);
        });
    }

    // 초기 이미지 표시
    moveToSlide1(0);
    moveToSlide2(0);
    moveToSlide3(0);
});