'use strict';

var form = $('#form-login');
var formError = $('#form-login-error');

var emailLink = $('#email-link');
var logoutLink = $('#logout-link');

formError.hide();
emailLink.hide();
logoutLink.hide();
form.on('submit', function (e) {
    e.preventDefault();
    formError.hide();

    var email = $('input#login-email').val();
    var password = $('input#login-password').val();
    var authorizationHeader = 'Basic ' + btoa(email + ':' + password);

    $.ajax({
        method: 'POST',
        url: 'http:/127.0.0.1:8000/login',
        headers: {
            "Authorization": authorizationHeader
        },
        data: {email: email},
        success: function (data) {
            setCookie('email', data.email, 1);
            setCookie('api_token', data.api_token, 1);
            setCookie('id', data.id, 1);
            $('#login-link').hide();
            $('#register-link').hide();
            emailLink.html(data.email);
            emailLink.show();
            logoutLink.show();

            $('#login-modal').modal('toggle');
        },
        error: function (data) {
            formError.html('Email ou mot de passe invalide.');
            formError.show();
        }
    });
});
