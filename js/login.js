document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.querySelector('#loginForm input[type="text"]').value;
        var password = document.querySelector('#loginForm input[type="password"]').value;
        if (email && password) {
            alert('Login berhasil!');
        } else {
            alert('Email dan password harus diisi.');
        }
    });
});