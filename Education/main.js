function EducationTH(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading ' + url + ':', error));
}

document.addEventListener('DOMContentLoaded', (event) => {
    EducationTH('signup-container', 'register/sign-up.html');
    EducationTH('footer-container', 'footer.html');
});
