
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
                const textE =document.querySelector('#name');
                const words = ['Esther Kondowe','An aspiring Fullstack Developer' , 'also an Information Technology Student at Malawi University of Business and Applied Sciences'].map(word=> word +'.');
        

                let wordIndex =0;
                let charIndex=0;

                let addingchars= true;
                let shouldWait= false;

                let currentWord= words[wordIndex];
                const updateCurrentWord =()=>{
                    wordIndex ++;
                    if(wordIndex===words.length){
                        wordIndex=0;
                    }
                    currentWord=words[wordIndex]
                }
                const addChar =() =>{
                    let currChar= currentWord[charIndex];
                    const char =document.createElement('span');
                    
                    char.innerText=currChar;
                    char.classList.add('char');
                    textE.appendChild(char);
                    charIndex++
                    if (charIndex===currentWord.length){
                        charIndex--;
                      addingchars=false;
                      shouldWait=true;
                    }
                }
        const removeChar =()=> {
        const char =textE.lastElementChild
        if(char){
            textE.removeChild(char);
        }
        
        charIndex--
        if (charIndex<0){
            charIndex++;
            addingchars=true;
            updateCurrentWord();

     } 
}
const typeRun=()=>{
    const operation= addingchars ? addChar: removeChar
    operation()
        let timeout = addingchars? 200 : 100;
        if(shouldWait){
            timeout=1000
            shouldWait=false;
        }
    setTimeout(typeRun,timeout)
}
setTimeout(typeRun,1500)

const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.projects');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => { filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            projects.forEach(project => {
              if (filter ==='all' || project.dataset.category === filter) {
                project.style.display = 'block'; // Show
              } else {
                project.style.display = 'none'; // Hide
              }
            });
          });
        });
           
     })
     