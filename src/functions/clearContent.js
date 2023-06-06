function clearContent() {
    const content = document.querySelector('#content');
    
    while (content.childNodes.length > 0) {
        content.childNodes[0].remove();
    }
}

export default clearContent;