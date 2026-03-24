document.addEventListener('DOMContentLoaded', function () {
    //input x버튼 클릭 시 텍스트 삭제
    function clearInputText(element) {
            const inputField = element.closest('.contents_box').querySelector('input');
            if (inputField) {
                inputField.value = '';
            }
        }
});