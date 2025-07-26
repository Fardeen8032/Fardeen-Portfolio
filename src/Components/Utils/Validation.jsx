export const validateEmail = (value) => {    
    if(!value){
        return 'Email is Required*';
    }
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;    
    return emailPattern.test(value) ? undefined : 'Invalid Email';   
};

export const validatePhoneNumber = (value) => {
    if (!value) {
        return "Phone number is required*";
    }
    const isValid = /^(\+91)?[6-9][0-9]{9}$/.test(value);
    return isValid ? true : "Phone number must be a valid 10-digit number";
};


export const validatePassword = (value) => {
    if (!value) {
        return 'Password is required*';
    }
    const pattern = /^(?=.*[!@#$%^&*()_+\{\}\[\]:;"'<>,.?~`\\|/\-])(?=.*\d)[A-Z][A-Za-z\d!@#$%^&*()_+\{\}\[\]:;"'<>,.?~`\\|/\-]*$/;
    const trimmedValue = value.trim();
    return pattern.test(trimmedValue) ? true : 'Invalid Password';
};