const showAlert = (message) => {
    const alertPlaceholder = document.getElementById('modalSm')
    const modalBody = alertPlaceholder.querySelector('.modal-body');

    modalBody.textContent = message;

    var modal = document.getElementById('modalSm');
    modal.setAttribute('data-bs-toggle', 'modal');
    modal.setAttribute('data-bs-target', '#modalSm');

    if(modal.style.display === 'block') {
        return;
    }

    // 모달을 엽니다.
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}