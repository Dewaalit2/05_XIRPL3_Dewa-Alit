document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'red';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });
    const profileImage = document.querySelector('td img');
    if (profileImage) {
        profileImage.addEventListener('click', () => {
            profileImage.src = 'p1.jpeg';
            profileImage.alt = 'Gambar telah diganti';
        });
    }
});
