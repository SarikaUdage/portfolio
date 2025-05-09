function showContent(id) {
    const contents = document.querySelectorAll('.content-toggle');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

