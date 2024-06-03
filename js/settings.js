document.addEventListener("DOMContentLoaded", function() {

    const generalBtn = document.getElementById('generalButton');
    const profileBtn = document.getElementById('profileButton');
    const generalDis = document.getElementById('generalForm');
    const profileDis = document.getElementById('profileForm');

    generalDis.style.display = 'none';
    profileDis.style.display = 'none';

    generalBtn.addEventListener('click', function() {
       
        profileDis.style.display = 'none';
        
        generalDis.style.display = 'block';
    });

    profileBtn.addEventListener('click', function() {
        
        generalDis.style.display = 'none';
        
        profileDis.style.display = 'block';
    });
 

});