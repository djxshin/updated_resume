function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details) {
        details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
    }
}

