/**
 * ValidationUtilManager is a utility class which provides the function for validations
 */
define([], function() {
    /**
     * ValidationUtilManager consists of utility methods related to validation
     *@alias module:ValidationUtilManager
     *@class
     */
    function ValidationUtilManager() {
        this.phoneNumberRegex = /^([0-9]){7,15}$/;
        this.passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
        this.invalidChar = "&%<>\/\+'=|\\";
        this.zipRegex = /^[0-9a-zA-Z]*$/;
        this.urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    };
    inheritsFrom(ValidationUtilManager, kony.mvc.Business.Delegator);
    ValidationUtilManager.prototype.initializeBusinessController = function() {};
    /**
     * check whether given user name is valid 
     * @param {String} username - A username to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidUserName = function(username) {
        if (username == null || username == undefined || username == "") return false;
        else if (username.indexOf(" ") != -1) {
            return false;
        } else if (username.length < 8 || username.length > 24) {
            return false;
        } else if (!this.isInvalidCharacterPresent(username)) {
            return false;
        }
        return true;
    };
    /**
     * check whether given password is valid 
     * @param {String} password - A password to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidPassword = function(password) {
        if (password === null || password === undefined || password === "") return false;
        else if (password.indexOf(" ") != -1) {
            return false;
        } else if (password.length < 8 || password.length > 24) {
            return false;
        } else if (!this.isInvalidCharacterPresent(password)) {
            return false;
        } else if (!this.passwordExpressionMatch(password)) {
            return false;
        }
        return true;
    };
    /**
     * Helper function to check whether given password has any special characters present
     * @param {String} value - A string to check
     * @returns {Boolean} - true if valid, false if any invalid character present
     */
    ValidationUtilManager.prototype.passwordExpressionMatch = function(val) {
        if (!val.match(this.passwordRegex)) {
            return false;
        }
        return true;
    };
    /**
     * Helper function to check whether given string has any invalid characters present
     * @param {String} value - A string to check
     * @returns {Boolean} - true if valid, false if any invalid character present
     */
    ValidationUtilManager.prototype.isInvalidCharacterPresent = function(value) {
        var regexp = this.invalidChar;
        for (var i = 0; i < regexp.length; i++) {
            if (value.indexOf(regexp[i]) != -1) {
                return false;
            }
        }
        return true;
    };
    /**
     * check whether given ZIP code is valid 
     * @param {String} text - A ZIP code to validate
     * @param {String} alertMessage - An alert message to be logged
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidZip = function(text, alertMessage) {
        var regex = this.zipRegex;
        if (!(text.match(regex))) {
            if (alertMessage != undefined) alert(alertMessage); //To be replaced with logger function
            return false;
        } else if (text.replace(/ /g, '') !== "" && (text.replace(/ /g, '').length !== 6 && text.replace(/ /g, '').length !== 5 && text.replace(/ /g, '').length !== 10)) {
            if (alertMessage != undefined) alert(alertMessage); //To be replaced with logger function
            return false;
        }
        return true;
    };
    /**
     * check whether given email is valid 
     * @param {String} username - An email to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidEmail = function(email) {
        return kony.string.isValidEmail(email);
    };
    /**
     * check whether given phone number is valid 
     * @param {String} username - Any phone number to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidPhoneNumber = function(phoneNumber) {
        var phoneno = this.phoneNumberRegex;
        if (phoneNumber === null || phoneNumber === undefined || phoneNumber === "") return false; // no number case
        if (phoneNumber.match(phoneno)) {
            return true;
        } else {
            return false;
        }
    };
    /**
     * check whether given URL is valid 
     * @param {String} url - Any URL to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidURL = function(url) {
        if (!(this.urlRegex.test(url)) && url.trim().length > 0) {
            return false;
        }
        return true;
    };
    /**
     * check whether given SSN Number is valid 
     * @param {int} ssnNumber - Any SSN Number to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidSSNNumber = function(ssnNumber) {
        if (isNaN(ssnNumber) || ssnNumber === null || ssnNumber.length != 9 || ssnNumber === undefined) {
            return false;
        } else {
            return true;
        }
    };
    /**
     * check whether given OTP is valid 
     * @param {int} otp - otp to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidOTP = function(otp) {
        if (isNaN(otp) || otp === null || otp.length != 6 || otp === undefined) {
            return false;
        } else {
            return true;
        }
    };
    /**
     * check whether given Date Of Birth in the format (mm/dd/yyyy) is valid date
     * @param {String} dob - dob to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isDOBValid = function(dob) {
        var dobArray = dob.split('/');
        var userDOB = new Date(dobArray[2], dobArray[0] - 1, dobArray[1]);
        return (userDOB.getFullYear() == dobArray[2] && (userDOB.getMonth() + 1) == dobArray[0] && userDOB.getDate() == Number(dobArray[1]) && this.isDateNotGreaterThanCurrentDate(userDOB));
    };
    /**
     * check whether given date object is not greater than current date.
     * @param {Object} date - date to be validated.
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isDateNotGreaterThanCurrentDate = function(date) {
        var currDateValue = new Date();
        var curryear = currDateValue.getFullYear();
        var currMonth = currDateValue.getMonth();
        var currDate = currDateValue.getDate();
        if (date.getFullYear() < curryear) {
            return true;
        } else if (date.getFullYear() == curryear) {
            if (date.getMonth() < currMonth) {
                return true;
            } else if (date.getMonth() == currMonth) {
                if (date.getDate() <= currDate) return true;
            }
        }
        return false;
    };
    /**
     * check whether given age is valid, provided date of birth in the format (mm/dd/yyyy).
     * @param {String} dob - dob to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isAgeValid = function(dob) {
        var currDateValue = new Date();
        var dobArray = dob.split('/');
        var userDOB = new Date(dobArray[2], dobArray[0] - 1, dobArray[1]);
        var age = currDateValue.getFullYear() - userDOB.getFullYear();
        var m = currDateValue.getMonth() - userDOB.getMonth();
        if (m < 0 || (m === 0 && currDateValue.getDate() < userDOB.getDate())) {
            age--;
        }
        if (age > 18) {
            return true;
        }
        return false;
    };
    /**
     * check whether given CVV is valid 
     * @param {int} cvv - cvv to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidCVV = function(cvv) {
        if (isNaN(cvv) || cvv === null || cvv.length != 3 || cvv === undefined) {
            return false;
        } else {
            return true;
        }
    };
    /**
     * check whether given Security code is valid 
     * @param {Number} code - security code to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidSecurityCode = function(code) {
        if (isNaN(code) || code === null || code.length != 6 || code === undefined) {
            return false;
        } else {
            return true;
        }
    };
    /**
     * check whether given Account Number is valid 
     * @param {Number} accNumber - Account Number to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidAccountNumber = function(accNumber) {
        if (isNaN(accNumber) || accNumber === null || accNumber.length < 6 || accNumber === undefined || accNumber.length > 24) {
            return false;
        } else {
            return true;
        }
    };
    /**
     * check whether given Swift Code is valid 
     * @param {Number} accNumber - Swift Code to validate
     * @returns {Boolean} - true if valid, false if invalid
     */
    ValidationUtilManager.prototype.isValidSwiftCode = function(swiftCode) {
        if (isNaN(swiftCode) || swiftCode === null || swiftCode === undefined) {
            return false;
        } else if (swiftCode.length === 8 || swiftCode.length === 11) {
            return true;
        } else {
            return false;
        }
    };
    return ValidationUtilManager;
});