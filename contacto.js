export const $ = (sel) => document.querySelector(sel);
const errorMsg_nombre = $('#error-msg_nombre')
const errorMsg_apellido = $('#error-msg_apellido')
const errorMsg_rut = $('#error-msg_rut')
const errorMsg_email = $('#error-msg_email')
const errorMsg_comment = $('#error-msg_comment')

const successful_msg = $('#successful_msg')

$('#boton-enviar').addEventListener('click', () => {
    const nombre = $('#fnombre');
    const apellido = $('#fapellido');
    const rut = $('#rut');
    const email = $('#email');
    const texto_largo = $('#comment_text');

    let isValid = true;

    // INICIO validación nombre
    if (nombre.value === null || nombre.value.trim() === "") {
        errorMsg_nombre.style.display = "flex";
        errorMsg_nombre.textContent = "El nombre debe tener al menos 3 caracteres";
        isValid = false;

    } else if (nombre.value.trim().length < 3 || nombre.value.trim().length > 30) {
        errorMsg_nombre.style.display = "flex";
        errorMsg_nombre.textContent = "El nombre debe tener al menos 3 caracteres o no más de 30";
        isValid = false;

    } else if (/\d/.test(nombre.value)) {   // <-- aquí validamos números
        errorMsg_nombre.style.display = "flex";
        errorMsg_nombre.textContent = "El nombre no puede contener números";
        isValid = false;

    } else {
        errorMsg_nombre.style.display = "none";
        errorMsg_nombre.textContent = "";
    }
    // FIN validación nombre

    // INICIO validación apellido
    if (apellido.value === null || apellido.value.trim() === "") {
        errorMsg_apellido.style.display = "flex";
        errorMsg_apellido.textContent = "El apellido debe tener al menos 3 caracteres";
        isValid = false;

    } else if (apellido.value.trim().length < 3 || apellido.value.trim().length > 30) {
        errorMsg_apellido.style.display = "flex";
        errorMsg_apellido.textContent = "El apellido debe tener al menos 3 caracteres o no más de 30";
        isValid = false;

    } else if (/\d/.test(apellido.value)) {   // <-- aquí validamos números
        errorMsg_apellido.style.display = "flex";
        errorMsg_apellido.textContent = "El apellido no puede contener números";
        isValid = false;

    } else {
        errorMsg_apellido.style.display = "none";
        errorMsg_apellido.textContent = "";
    }
    // FIN validación apellido

    // INICIO validacion rut
    if (rut.value === null || rut.value.trim() === "") {
        errorMsg_rut.style.display = "flex";
        errorMsg_rut.textContent = "coloque su rut";
        isValid = false;

    } else if (rut.value.trim().length < 10 || rut.value.trim().length > 10) {
        errorMsg_rut.style.display = "flex";
        errorMsg_rut.textContent = "El rut debe tener al menos 10 caracteres sin puntos con guion";
        isValid = false;

    } else {
        errorMsg_rut.style.display = "none";
        errorMsg_rut.textContent = "";
    }
    // FIN validacion rut

    //INICIO validacion email
    if (email.value === null || email.value.trim() === "") {
        errorMsg_email.style.display = "flex";
        errorMsg_email.textContent = "Por favor ingrese su correo electrónico";
        isValid = false;

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        errorMsg_email.style.display = "flex";
        errorMsg_email.textContent = "Ingrese un correo electrónico válido (ejemplo@dominio.com)";
        isValid = false;

    } else {
        errorMsg_email.style.display = "none";
        errorMsg_email.textContent = "";
    }
    //FIN validacion email

    //INICIO validacion comment
    if (texto_largo.value === null || texto_largo.value.trim() === "") {
        errorMsg_comment.style.display = "flex";
        errorMsg_comment.textContent = "escriba su mensaje";
        isValid = false;

    } else {
        errorMsg_comment.style.display = "none";
        errorMsg_comment.textContent = "";
    }
    //FIN validacion comment

    // VALIDACION DE TODOS LOS CAMPOS
    if (isValid === true) {
        successful_msg.style.display = "flex";
    } else {
        successful_msg.style.display = "none";
    }




}
)