function toggleDetails(element) {
    const details = document.createElement('div');
    details.textContent = "More details about " + element.textContent;
    details.style.marginTop = '5px';
    details.style.color = '#555';
    details.style.fontSize = '0.9em';

    if (element.nextElementSibling && element.nextElementSibling.tagName === 'DIV') {
        element.parentNode.removeChild(element.nextElementSibling);
    } else {
        element.parentNode.insertBefore(details, element.nextSibling);
    }
}
