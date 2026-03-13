    /*arreglo de usuarios*/
const usuarios = [
  {
    name: "Ana García",
    email: "ana.garcia@email.com",
    password: "token_seguro_123"
  },
  {
    name: "Carlos Ruiz",
    email: "cruiz_dev@web.com",
    password: "miPassword2026"
  },
  {
    name: "Elena Martínez",
    email: "elena.mtz@servicio.com",
    password: "qwerty_987"
  }
];

    /*funcion para mostrar las alertas de inicio de sesion*/

function showAlert(mensaje, tipo){
    const logMessage = document.getElementById('message-log')
    
    logMessage.textContent = mensaje;
    logMessage.className = `alerta-material ${tipo} mostrar`

    setTimeout(() => {
        logMessage.classList.remove('mostrar')
    }, 3000);
}
 /*manejador de evento de envio del formulario*/
document.getElementById('login-f').addEventListener('submit', function(e){
    /*evita que el navegador se recargue*/
    e.preventDefault();
    /*captura de datos del dom y eliminacion de espacios en blanco en el email*/
    const userIn = document.getElementById('log-email').value.trim();
    const passIn = document.getElementById('log-pass').value;
    /*funcion para la sensibilidad de mayusculas y minusculas en el correo, y la comparacion del correo y contrasena*/
    const userValid = usuarios.find(user => user.email.toLowerCase() === userIn.toLowerCase() && user.password === passIn);
    
    /*evaluacion de los resultados, si se cumple o no, mostrando mensajes de exito o error*/
    if(userValid){
        showAlert('inicio de sesion exitoso', 'alerta-exito')
        console.log(`el usuario ${userValid.name}, con el correo ${userValid.email} ha iniciado sesion`)
    }else{
        showAlert('Usuario o contraseña incorrectos, verifica', 'alerta-error')
    }
})