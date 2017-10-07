'use strict';

var form = $('#form-register');
var formError = $('#form-register-error');

var formErrorEmail = $('#form-register-error-email');
var formErrorPassword = $('#form-register-error-password');
var formErrorRepeated = $('#form-register-error-repeated');

formError.hide();
formErrorEmail.hide();
formErrorPassword.hide();
formErrorRepeated.hide();
form.on('submit', function (e) {
    e.preventDefault();
    formError.hide();

    var email = $('input#register-email').val();
    var password = $('input#register-password').val();
    var repeated = $('input#register-password-repeat').val();

    if (password !== repeated) {
        formErrorPassword.html('Les mots de passes doivent correspondre.');
        formErrorPassword.show();

        return;
    }

    var data = JSON.stringify({email: email, plainPassword: password});
    $.ajax({
        method: 'POST',
        url: 'http:/127.0.0.1:8000/users',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/ld+json'
        },
        data: data,
        dataType: 'json',
        success: function (data) {
            $('#register-modal').modal('toggle');
        },
        error: function (data) {
            var response = data.responseJSON;
            formError.html(response['hydra:description']);

            $.each(response.violations, function (index, val) {
                if (val.propertyPath === 'email') {
                    formErrorEmail.html(val.message);
                    formErrorEmail.show();
                }

                if (val.propertyPath === 'plainPassword') {
                    formErrorPassword.html(val.message);
                    formErrorPassword.show();
                }
            });
            formError.show();
        }
    });
});
