document.addEventListener('DOMContentLoaded', function () {
                
                const form = document.querySelector('form');
            
                form.addEventListener('submit', function (e) {
                    e.preventDefault(); // Prevent form submission
                    clearErrors();
            
                    const isNameValid = validateName();
                    const isEmailValid = validateEmail();
                    const isMessageValid = validateMessage();
            
                    if (isNameValid && isEmailValid && isMessageValid) {
                        alert('Form submitted successfully!');
                        form.submit(); 
                    }
            
                });
            
            
                function validateName() {
                    const nameInput = document.getElementById('name');
                    const nameValue = nameInput.value.trim();
                    
                    if (nameValue === '') { 
                        showError(nameInput, 'Please enter your name');
                        return false;
                    }
                    return true;
                }
            
                function validateEmail() {
                    const emailInput = document.getElementById('email');
                    const emailValue = emailInput.value.trim();
                    
                    if (emailValue === '') { 
                        showError(emailInput, 'Please enter your email address');
                        return false;
                    } else if (!isValidEmail(emailValue)) {
                        showError(emailInput, 'Please enter a valid email address');
                        return false;
                    }
                    return true;
                }
            
                function validateMessage() {
                    const messageInput = document.getElementById('message');
                    const messageValue = messageInput.value.trim();
                    console.log('Message value:', messageValue); 
            
                    if (messageValue === '') {
                        showError(messageInput, 'Please enter a message');
                        return false;
                    }
                    return true;
                }
            
                function isValidEmail(email) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(email);
                }
            
                function showError(input, message) {
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error-message';
                    errorDiv.textContent = message;
                    errorDiv.style.color = 'red';
                    errorDiv.style.fontSize = '14px';
                    errorDiv.style.marginTop = '5px';
                    input.parentNode.insertBefore(errorDiv, input.nextSibling);
                }
            
                function clearErrors() {
                    const errorMessages = document.querySelectorAll('.error-message');
                    errorMessages.forEach(error => error.remove());
                }
            })
       

