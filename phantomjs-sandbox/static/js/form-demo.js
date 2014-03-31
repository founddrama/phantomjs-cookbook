var formDemo = (function(v) {
  var emailField    = document.querySelector('#email'),
      emailAlert    = emailField.parentNode.querySelector('.alert'),
      passwordField = document.querySelector('#password'),
      passwordAlert = passwordField.parentNode.querySelector('.alert'),
      passwordText  = passwordField.parentNode.querySelector('#password-suggestions'),
      submitBtn     = document.querySelector('.btn-primary'),

      HIDDEN_CLS    = 'hidden',
      DISABLED_ATTR = 'disabled';


  function validateEmail() {
    emailAlert.classList[!v.isEmailValid(emailField.value) ? 'remove' : 'add'](HIDDEN_CLS);
  }

  function getPasswordErrors(p) {
    var errors = [];

    if (!v.PASS_LEN_RX.test(p)) {
      errors.push('be at least 6 characters, and no more than 20');
    }

    if (!v.PASS_NUM_RX.test(p)) {
      errors.push('contain at least one number');
    }

    if (!v.PASS_SYM_RX.test(p)) {
      errors.push('contain at least one symbol')
    }

    return 'Passwords must: ' + errors.join('; ') + '.';
  }

  function validatePassword() {
    var password = passwordField.value;

    if (!v.isPasswordValid(password)) {
      passwordText.innerText = getPasswordErrors(passwordField.value);
      passwordAlert.classList.remove(HIDDEN_CLS);
    } else {
      passwordAlert.classList.add(HIDDEN_CLS);
    }
  }

  function enableSubmit() {
    if (v.isFormValid(emailField.value, passwordField.value)) {
      submitBtn.removeAttribute(DISABLED_ATTR);
    } else {
      submitBtn.setAttribute(DISABLED_ATTR, DISABLED_ATTR);
    }
  }

  emailField.addEventListener('blur', validateEmail);
  passwordField.addEventListener('keyup', validatePassword);
  passwordField.addEventListener('blur', validatePassword);

  emailField.addEventListener('blur', enableSubmit);
  passwordField.addEventListener('keyup', enableSubmit);
  passwordField.addEventListener('blur', enableSubmit);
}(validators));