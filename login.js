document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginMessage = document.getElementById("loginMessage");
    const registerMessage = document.getElementById("registerMessage");
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    // Evento para mostrar o formulário de registro quando clicado
    showRegister.addEventListener("click", function(event) {
        event.preventDefault();
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    });

    // Evento para mostrar o formulário de login quando clicado
    showLogin.addEventListener("click", function(event) {
        event.preventDefault();
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    });

    const users = [];

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            loginMessage.textContent = "Login bem-sucedido!";
            // Redirecionar para a página após o login
        } else {
            loginMessage.textContent = "Credenciais inválidas. Tente novamente.";
        }//caso nao esteja cadastrado 
        z
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        const existingUser = users.find(user => user.username === newUsername);

        if (existingUser) {
            registerMessage.textContent = "Nome de usuário já existe. Escolha outro.";
        } else {
            users.push({ username: newUsername, password: newPassword });
            registerMessage.textContent = "Cadastro bem-sucedido! Agora você pode fazer login.";
        }
    });
});
const form = {
user: () => document.getElementById("idInputSenha");

    
    const usuario=form.user().Value;
    const password=form.senha().Value;

    firebase.auth().createUserWithEmailAndPassword(
        usuario,password
        ).then(() => {
            window.location.href="login.html";
        }).catch(error{
            alert(getErrorMessage(error))
        })
}
const btnlogin=document.getElementById("idLogin");


btnlogin.addEventListener("click", function(){
    firebase.auth().signInWithEmailAndPassword(
        form.user().value,form.senha().Value)Then(Response =>{
            window.location.href="index.html";
        }).catch(error =>{
            console.log('error');
            alert(getErrorMessage(error));
        }
});

function cadastro(){
    window.location.href="cadastro.html"
}
function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já está em uso";
    }
    return error.message;
}
    
