const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const containerFormRegister = document.querySelector(".register");
const containerFormLogin = document.querySelector(".login");

// alternar vistas
btnSignIn.addEventListener("click", () =>{
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide");
})
btnSignUp.addEventListener("click", () =>{
    containerFormLogin.classList.add("hide");
    containerFormRegister.classLists.remove("hide");
})
