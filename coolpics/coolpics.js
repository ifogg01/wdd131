
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running'); 

    
    const galleryImages = document.querySelectorAll('.gal-card');
    const viewer = document.getElementById('viewer');
    const viewerImg = document.getElementById('viewer-img');
    const closeViewerBtn = document.querySelector('.close-viewer');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            console.log('Image clicked:', image.src); 
            viewer.style.display = 'flex';
            viewerImg.src = image.src;
            viewerImg.alt = image.alt;
        });
    });

    closeViewerBtn.addEventListener('click', () => {
        viewer.style.display = 'none';
    });

    viewer.addEventListener('click', (event) => {
        if (event.target === viewer) {
            viewer.style.display = 'none';
        }
    });

    
    const menuBtn = document.querySelector('.menu-btn');
    const menulinks = document.querySelector('.menulinks');

    menuBtn.addEventListener('click', () => {
        menulinks.classList.toggle('show');
    });
});

