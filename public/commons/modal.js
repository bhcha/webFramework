const showModal = (title, contents) => {
    const alertPlaceholder = document.getElementById('modalLg')
    const modalTitle = alertPlaceholder.querySelector('.modal-title');
    const modalBody = alertPlaceholder.querySelector('.modal-body');

    modalTitle.textContent = title;
    modalBody.textContent = contents;

    var modal = document.getElementById('modalLg');
    modal.setAttribute('data-bs-toggle', 'modal');
    modal.setAttribute('data-bs-target', '#modalLg');

    console.log(modal.style.display);

    if(modal.style.display === 'block') {
        return;
    }
    // 모달을 엽니다.
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}