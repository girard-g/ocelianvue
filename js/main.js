'use strict';

var emailLink = $('#email-link');
var logoutLink = $('#logout-link');
var email = getCookie('email');
if (email !== '') {
    $('#login-link').hide();
    $('#register-link').hide();
    emailLink.html(email);
    emailLink.show();
    logoutLink.show();
}