// function showContent(id) {
//     const contents = document.querySelectorAll('.content-toggle');
//     contents.forEach(content => content.classList.remove('active'));
//     document.getElementById(id).classList.add('active');
// }
// function showContent(id) {
//     const contents = document.querySelectorAll('.content-toggle');
//     contents.forEach(content => content.classList.remove('active'));
//     document.getElementById(id).classList.add('active');
// }
function showContent(id) {
    // Hide all toggleable content
    const contents = document.querySelectorAll('.content-toggle');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected section
    const selected = document.getElementById(id);
    if (selected) {
        selected.classList.add('active');
    }
}
