
document.addEventListener('DOMContentLoaded', function () {
                // implementation of typing effect
                const textE =document.querySelector('#myname');

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

// code for  filltering projects

const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.projects');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => { filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            projects.forEach(project => {
              if (filter ==='all' || project.dataset.category === filter) {
                project.style.display = 'block'; 
              } else {
                project.style.display = 'none'; 
              }
            });
          });
        });
        

      // below is my code on form validation
    document.getElementById('Contactform').addEventListener('submit', function(event) { 
    event.preventDefault(); 


    document.querySelectorAll('.error-message').forEach(error => error.innerHTML = '');

    
    let form = document.getElementById('Contactform');

    
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');


    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();
    let hasErrors = false;

    
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Name is required.';
        hasErrors = true;
    }

    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Email is required.';
        hasErrors = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerHTML = 'Email is not valid.';
        hasErrors = true;
    }

    
    if (message === '') {
        document.getElementById('messageError').innerHTML = 'Message is required.';
        hasErrors = true;
    }


    if (!hasErrors) {
        alert('Form submitted successfully!');
        form.reset(); 

        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

        
           
     })
  