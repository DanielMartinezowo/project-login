const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const containerFormRegister = document.querySelector(".register");
const containerFormLogin = document.querySelector(".login");

const pass = document.getElementById("log-pass")
const iconView = document.querySelector(".bx-show-alt")

const formLogin = document.getElementById("login-f")
const inputs = formLogin.querySelectorAll("input")
const bttonSend = document.getElementById("btnEnviarL")



// alternar vistas
btnSignIn.addEventListener("click", () =>{
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide");
})
btnSignUp.addEventListener("click", () =>{
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide");
})

/*ocultar o mostrar contraseña en el momento de iniciar el login*/
iconView.addEventListener("click", e =>{
    if (pass.type === "password") {
        pass.type = "text"
        iconView.classList.remove('bx-show-alt')
        iconView.classList.add('bx-hide')
    }else{
        pass.type = "password"
        iconView.classList.add('bx-show-alt')
    }
})
/*validacion del llenado del formulario de login y bloqueo del boton hasta que este sea llenado*/

function validForm() {
    const allFull = Array.from(inputs).every(input => input.value.trim() !=='')
    bttonSend.disabled = !allFull;
}
inputs.forEach(input => {
    input.addEventListener('input', validForm)
})


inputs.forEach(i => {
  i.addEventListener("blur", function(){
    this.classList.add("validado");
  })  
})


