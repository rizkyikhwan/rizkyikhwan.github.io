window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-nav');
    navbar.classList.toggle('sticky', window.scrollY > 100);
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwpqG8TBZ8B5KLWghEloeG9tMpr6dePrS44HPvinaIHsyZ0e_oz4W_HvoIAKo5qlY1U/exec';
const form = document.forms['portfolio-contact-form'];
const btnKirim = document.querySelector('.button-send');
const btnLoading = document.querySelector('.button-loading');
const myAlert = document.querySelector('.my-alert');
    
form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika tombol submit di klik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset form
            form.reset();
            console.log('Success!', response)
        })
        .catch((error) => console.error('Error!', error.message))
});