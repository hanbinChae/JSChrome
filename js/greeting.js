const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

//내가 생성한 string을 반복해서 사용할 때, 실수를 방지하기 위해 대문자의 변수로 생성
const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY='username';

function onLoginSubmit(event){
    
    event.preventDefault(); //HTML 기본 속성 작동하지 않도록 막기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASS)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);  
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit',onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}
