document.querySelectorAll('.screenshot img').forEach(img => {
    img.addEventListener('click', function () {

        document.querySelectorAll('.screenshot img').forEach(img => img.classList.remove('selected'));

        this.classList.add('selected');


        document.querySelectorAll('.video-container iframe, .video-container .image').forEach((element) => {
            element.classList.remove('active');
            if (element.tagName.toLowerCase() === 'iframe') {
               
                element.src = element.src;
            }
        });

        const index = this.getAttribute('data-index');
        const type = this.getAttribute('data-type');
        if (type === 'video') {
            const selectedIframe = document.querySelectorAll('.video-container iframe')[index];
            selectedIframe.classList.add('active');
        } else {
            const selectedImage = document.querySelectorAll('.video-container .image')[index];
            selectedImage.classList.add('active');
        }
    });
});

