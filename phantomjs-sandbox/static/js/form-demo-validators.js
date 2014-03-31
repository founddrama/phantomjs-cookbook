var validators = (function() {

  var EMAIL_RX      = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i,
      PASS_LEN_RX   = /^.{6,20}$/,
      PASS_NUM_RX   = /\d/,
      PASS_SYM_RX   = /[\W_]/;


  function isEmailValid(s) {
    return EMAIL_RX.test(s);
  }

  function isPasswordValid(p) {
    return PASS_LEN_RX.test(p) &&
        PASS_NUM_RX.test(p) &&
        PASS_SYM_RX.test(p);
  }

  function isFormValid(e, p) {
    return isEmailValid(e) && isPasswordValid(p);
  }

  return {
    EMAIL_RX:        EMAIL_RX,
    PASS_LEN_RX:     PASS_LEN_RX,
    PASS_NUM_RX:     PASS_NUM_RX,
    PASS_SYM_RX:     PASS_SYM_RX,

    isEmailValid:    isEmailValid,
    isPasswordValid: isPasswordValid,
    isFormValid:     isFormValid
  };
}());