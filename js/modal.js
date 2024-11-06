const modalOpenButton = document.getElementById('modalOpenButton');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');

const toggleModal = () => {
    modal.classList.toggle('hidden');
};

modalOpenButton.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);

window.addEventListener('click', function (event) {
    // 모달의 검은색 배경 부분이 클릭된 경우 닫히도록 하는 코드
    if (event.target === modal) {
        toggleModal();
    }
});
