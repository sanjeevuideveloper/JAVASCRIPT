// // Get the HTML Elements

// var usernameElement = document.querySelector('#username');
var usernameElement=document.querySelector('#username')

// var emailElement = document.querySelector('#email');
var emailElement=document.querySelector('#email')
// var passwordElement = document.querySelector('#password');
var passwordElement=document.querySelector('#password')
// var confirmPassword = document.querySelector('#password_confirm');
var confirmPassword=document.querySelector('#password_confirm')
// Get the error message elements
// var userNameErrorElement = document.querySelector('#name_error');
var userNameErrorElement=document.querySelector('#name_error')
// var emailErrorElement = document.querySelector('#email_error');
var emailErrorElement=document.querySelector('#email_error')
// var passwordErrorElement = document.querySelector('#password_error');
// var message  = '';
var passwordErrorElement=document.querySelector('#password_error')
// // Blur Event for Username field
// usernameElement.addEventListener('blur',function() {
//     clearErrorMessage(usernameElement,userNameErrorElement);
// });
usernameElement.addEventListener('blur',function(){
    clearErrorMessage(usernameElement,userNameErrorElement)
})

// // Blur Event for Email field
emailElement.addEventListener('blur',function(){
    clearErrorMessage(emailElement,emailErrorElement);
})
// emailElement.addEventListener('blur',function() {
//     clearErrorMessage(emailElement,emailErrorElement);
// });
//
// // Blur Event for Password field
passwordElement.addEventListener('blur',function(){
    clearErrorMessage(passwordElement,passwordErrorElement)
})
confirmPassword.addEventListener('blur',function(){
    clearErrorMessage(confirmPassword,passwordErrorElement)
})
// passwordElement.addEventListener('blur',function() {
//     clearErrorMessage(passwordElement,passwordErrorElement);
//     clearErrorMessage(confirmPassword,passwordErrorElement);
// });
//
// // Blur Event for Confirm Password field
// confirmPassword.addEventListener('blur',function() {
//     clearErrorMessage(passwordElement,passwordErrorElement);
//     clearErrorMessage(confirmPassword,passwordErrorElement);
// });
//
//
// // validate function
function validate(){
    console.log("hello");
    var isValid=true;
    if(usernameElement.value.length === 0){
        isValid=false;

        message='Required UserName';
        displayErrorMessage(usernameElement,userNameErrorElement,message)
        return isValid;
    }
    if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        isValid=false;
        message='No Special Character';
        displayErrorMessage(usernameElement,userNameErrorElement,message)
        return isValid
    }


    if(usernameElement.value.length === 0){
        isValid=false;

        message='Required UserName';
        displayErrorMessage(usernameElement,userNameErrorElement,message)
        return isValid;
    }
    if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        isValid=false;
        message='No Special Character';
        displayErrorMessage(usernameElement,userNameErrorElement,message)
        return isValid
    }
    if(usernameElement.value.length<5){
        isValid=false;
        message='Atleast 5 character Required';
        displayErrorMessage(usernameElement,userNameErrorElement,message)
        return isValid;
    }
if(emailElement.value.length === 0){
        isValid=false;
        message='Email Required';
        displayErrorMessage(emailElement,emailErrorElement,message)
    return isValid;
}

if(passwordElement.value.length===0){
        isValid=false;
        message='Password required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
    return isValid;
}
if(confirmPassword.value.length===0){
    isValid=false;
    message=' Confirm Password required';
    displayErrorMessage(confirmPassword,passwordErrorElement,message);
    return isValid;

}
if(!(confirmPassword.value===passwordElement.value)){
        isValid=false;
        message='Password Not Matched';
        displayErrorMessage(passwordElement,passwordErrorElement,'')
        displayErrorMessage(confirmPassword,passwordErrorElement,message);


        return isValid;
}
    if(isValid){
       alert('Form Submitted Successfully');
     return true;
     }
    else{
       return false;
}

}
// function validate() {
//     var isValid = true;
//
//     // Required Username validation
//     if(usernameElement.value.length === 0){
//         isValid = false;
//         message = 'Required UserName';
//         displayErrorMessage(usernameElement,userNameErrorElement,message);
//         return isValid;
//     }
//
//     // RegExp validation for username
//     if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
//         isValid = false;
//         message = 'No Special Characters';
//         displayErrorMessage(usernameElement,userNameErrorElement,message);
//         return isValid;
//     }
//
//     // UserName Length validation
//     if(usernameElement.value.length < 5){
//         isValid = false;
//         message = 'At least 5 letters Required';
//         displayErrorMessage(usernameElement,userNameErrorElement,message);
//         return isValid;
//     }
//
//     // Required Email validation
//     if(emailElement.value.length === 0){
//         isValid = false;
//         message = 'Required Email';
//         displayErrorMessage(emailElement,emailErrorElement,message);
//         return isValid;
//     }
//
//     // Required Password Validation
//     if(passwordElement.value.length === 0){
//         isValid = false;
//         message = 'Required Password';
//         displayErrorMessage(passwordElement,passwordErrorElement,message);
//         return isValid;
//     }
//
//     // Required Confirm Password Validation
//     if(confirmPassword.value.length === 0){
//         isValid = false;
//         message = 'Required Confirm Password';
//         displayErrorMessage(confirmPassword,passwordErrorElement,message);
//         return isValid;
//     }
//
//     // Passwords match validation
//     if(passwordElement.value !== confirmPassword.value){
//         isValid = false;
//         message = "Passwords didn't match";
//         displayErrorMessage(passwordElement,passwordErrorElement,message);
//         displayErrorMessage(confirmPassword,passwordErrorElement,message);
//         return isValid;
//     }
//
//     if(isValid){
//         alert('Form Submitted Successfully');
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//
// // display Error Messages
function displayErrorMessage(inputElement,errorElement,message){
    inputElement.style.backgroundColor='lightsalmon';
    inputElement.style.boxShadow='0 0 15px red';
    inputElement.style.borderColor='red';
    errorElement.textContent=message;
    errorElement.style.color='red';


}
// function displayErrorMessage(inputElement,errorElement,message) {
//     inputElement.style.backgroundColor = 'lightsalmon';
//     inputElement.style.borderColor = 'red';
//     inputElement.style.boxShadow = '0 0 15px red';
//     errorElement.textContent = message;
//     errorElement.style.color = 'red';
// }
//
// clear the error messages
 function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';

     inputElement.style.border='2px solid green'
    inputElement.style.boxShadow = '0 0 0 white';
    errorElement.textContent = '';

}