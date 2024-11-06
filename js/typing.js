const textArray = [
    "토마토 퓨레처럼",
    " 감칠맛",
    " 나고",
    " 톡톡",
    " 튀는", // 다섯번째 줄
    "개성있는 디자이너 입니다.",
    "",
    "최신 트렌드와 고객들의 니즈를 파악하여",
    "사용자들에게 새롭고 참신한 디자인을",
    "제공하는",
    "디자이너 세윤",
    "입니다." 
];

let currentIndex = 0;
let currentText = '';
let typingSpeed = 100; // 타이핑 속도 (밀리초)

function type() {
    if (currentIndex < textArray.length) {
        currentText = textArray[currentIndex];
        let charIndex = 0;

        function typeCharacter() {
            if (charIndex < currentText.length) {
                const char = currentText.charAt(charIndex);
                
                // 특정 단어에만 magic-text 클래스를 적용
                if (currentText.includes("감칠맛") || currentText.includes("톡톡") || currentText.includes("디자이너 세윤")) {
                    const span = document.createElement('span');
                    span.className = 'magic-text'; // magic-text 클래스 추가
                    span.innerHTML = char;
                    document.getElementById('typing-text').appendChild(span);
                } else {
                    // magic-text 클래스가 필요 없는 경우, 일반 텍스트로 추가
                    document.getElementById('typing-text').innerHTML += char; // span 없이 추가
                }
                
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                currentIndex++;
                // 특정 줄에서만 줄바꿈 추가
                if (currentIndex === 5 || currentIndex === 6 || currentIndex === 7 || currentIndex === 8  || currentIndex === 9) { // 5, 6, 7번째 줄에서 줄바꿈 추가
                    document.getElementById('typing-text').innerHTML += '<br>';
                }
                setTimeout(type); // 다음 줄 타이핑 시작
            }
        }
        typeCharacter();
    }
}

// 페이지 로드 시 타이핑 시작
document.addEventListener('DOMContentLoaded', type);
