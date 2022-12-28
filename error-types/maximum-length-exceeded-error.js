const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength, ...params){
    super(...params);
    this.name = "MaximumLengthExceededError";
    if (ValidationError.captureStacktrace){
      ValidationError.captureStacktrace(this, MaximumLengthExceededError);
    }

    if (excessLength !== undefined){
      this.message = `Maximum length exceeded by ${excessLength}`;
    }else{
      this.message = `Maximum length exceeded`
    }
  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
