function toggleDetails(element) {
    const details = document.createElement('div');
    details.textContent = "Details about " + element.textContent;
    details.style.marginTop = '5px';
    details.style.fontSize = '12px';
    details.style.color = '#555';

    if (element.nextElementSibling && element.nextElementSibling.tagName === 'DIV') {
        element.parentNode.removeChild(element.nextElementSibling);
    } else {
        element.parentNode.insertBefore(details, element.nextSibling);
    }
}
