document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const headerContent = document.getElementById('headerContent');

    toggleButton.addEventListener('click', () => {
        if (headerContent.classList.contains('expanded')) {
            headerContent.classList.remove('expanded');
            headerContent.classList.add('minimized');
            document.querySelector('.header').style.height = '50px'; // Adjust if needed
        } else {
            headerContent.classList.remove('minimized');
            headerContent.classList.add('expanded');
            document.querySelector('.header').style.height = 'auto';
        }
    });
});
