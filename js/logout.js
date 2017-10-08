'use strict';

var emailLink = $('#email-link');
var logoutLink = $('#logout-link');

logoutLink.on('click', function (e) {
    e.preventDefault();
    document.cookie = 'username=null; path=/';
    document.cookie = 'email=null; path=/';
    document.cookie = 'email=null';
    document.cookie = 'username=null';
    console.log(document.cookie);
    $('#login-link').show();
    $('#register-link').show();
    emailLink.html('');
    emailLink.hide();
    logoutLink.hide();
});
