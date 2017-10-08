'use strict';

var emailLink = $('#email-link');
var logoutLink = $('#logout-link');

logoutLink.on('click', function (e) {
    e.preventDefault();
    setCookie('email', '');
    setCookie('api_token', '');
    setCookie('id', '');

    $('#login-link').show();
    $('#register-link').show();
    emailLink.html('');
    emailLink.hide();
    logoutLink.hide();
});
