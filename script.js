
function showContent(id) {
    const contents = document.querySelectorAll('.content-toggle');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const selected = document.getElementById(id);
    if (selected) {
        selected.classList.add('active');
    }
}

