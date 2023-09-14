function showToast(content) {
    const bootstrapToast = new bootstrap.Toast('#toast-1');
    document.querySelector('.toast-body').textContent = content;
    bootstrapToast.show();
}