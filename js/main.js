'use strict';

var emailLink = $('#email-link');
var logoutLink = $('#logout-link');
var date = new Date();
var email = readCookie('email');
console.log(email);
if (email !== 'null' && email !== null) {
    console.log(email);
    $('#login-link').hide();
    $('#register-link').hide();
    emailLink.html('');
    emailLink.show();
    logoutLink.show();
}

function readCookie(name) {
    var cookies = document.cookie.split(';');
    for(var i=0;i < cookies.length;i++) {
        var exploded = cookies[i].split('=');
        if (name === exploded[0].trim()) {
            return exploded[1];
        }
    }

    return null;
}