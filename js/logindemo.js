// To toggle between login and signup form
const login = document.querySelector('.login'),
signup = document.querySelector('.signup'),
signupButton = document.querySelector('#signupbtn'),
loginButton = document.querySelector('#loginbtn');

signupButton.addEventListener('click', function(){
    if(signup.style.display === 'none'){
        login.style.display = 'block';
    }
    else{
        signup.style.display = 'block';
        login.style.display = 'none';
    }
})

