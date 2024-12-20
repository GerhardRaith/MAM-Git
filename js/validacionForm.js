const formulario = document.getElementById("contactoFormulario");

formulario.addEventListener("submit", event => {
    event.preventDefault(); // Prevenir envío formulario

    // OBTENGO VALORES CAMPO FORMULARIO

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni= document.getElementById("dni").value.trim();
    const edad= document.getElementById("edad").value.trim();
    const telefono= document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // VARIABLES P/ MENSAJES ERROR
    const errorNombre = document.getElementById("errorNombre"); 
    const errorApellido = document.getElementById("errorApellido");
    const errorDNI = document.getElementById("errorDNI");
    const errorEdad = document.getElementById("errorEdad");
    const errorTelefono = document.getElementById("errorTelefono");  
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    // INICIALIZO VALIDACIÓN
    let formularioValido = true;

    // VALIDO NOMBRE
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Contenido solo letras y espacios
    const regexVocales = /[aeiouáéíóúAEIOUÁÉÍÓÚ]/; // Contenido vocales
    const regexConsonantes = /[bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑ]/; // Contenido consonantes
    if (nombre.length < 2) {
        errorNombre.classList.remove("d-none");
        alert("El nombre debe tener al menos 2 letras.");
        formularioValido = false;
    } else if (!nombreRegex.test(nombre)) {
        errorNombre.classList.remove("d-none");
        alert("El nombre solo debe contener letras y espacios sin Nºs");
        formularioValido = false;
    } else if (!regexVocales.test(nombre)) {
        errorNombre.classList.remove("d-none");
        alert("El nombre debe tener al menos una letra vocal");
        formularioValido = false;
    } else if (!regexConsonantes.test(nombre)) {
        errorNombre.classList.remove("d-none");
        alert("El nombre debe tener al menos una letra consonante");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }
    // VALIDO APELLIDO
    if (apellido.length < 2) {
        errorApellido.classList.remove("d-none");
        alert("El apellido debe tener al menos 2 letras.");
        formularioValido = false;
    } else if (!nombreRegex.test(apellido)) {
        errorApellido.classList.remove("d-none");
        alert("El apellido solo debe contener letras y espacios sin Nºs");
        formularioValido = false;
    } else if (!regexVocales.test(apellido)) {
        errorApellido.classList.remove("d-none");
        alert("El apellido debe tener al menos una letra vocal");
        formularioValido = false;
    } else if (!regexConsonantes.test(apellido)) {
        errorApellido.classList.remove("d-none");
        alert("El apellido debe tener al menos una letra consonante");
        formularioValido = false;
    } else {
        errorApellido.classList.add("d-none");
    }
    // VALIDO DNI (Aseguro manipulacion formulario utilizando herramientas desarrollador navegador)
    const dniRegex = /^[0-9]{7,8}$/;
    if (!dniRegex.test(dni)) {
        errorDNI.classList.remove("d-none");
        alert("DNI no válido. Debe tener entre 7 y 8 dígitos.");
        formularioValido = false;
    } else {
        errorDNI.classList.add("d-none");
    }
     // VALIDO EDAD (Aseguro manipulacion formulario utilizando herramientas desarrollador navegador)
    const edadMinima =18;
    if (isNaN(edad) || edad <edadMinima) {
        errorEdad.classList.remove("d-none");
        alert("Debe ser mayor de edad para registrarse.");
        formularioValido = false;
    } else {
        errorEdad.classList.add("d-none");
    }
    // VALIDO TELÉFONO
    const telefonoRegex = /^(\+54)?\d{10,13}$/; //Solo Argentina
    if (!telefonoRegex.test(telefono)) {
        errorTelefono.classList.remove("d-none");
        alert("Número de teléfono no válido. Debe tener entre 10 y 13 dígitos, y opcionalmente el código de país (+54).");
        formularioValido = false;
    } else {
        errorTelefono.classList.add("d-none");
    }

    // VALIDO e-mail
    // Validación con expresión Regular       
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        alert("Por favor, ingrese un correo electrónico con formato válido.");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }
    // VALIDO MENSAJE
    const mensajeRegex = /\b(\w+\s+){3}\w+/; 
    if (!mensajeRegex.test(mensaje)) {
        errorMensaje.classList.remove("d-none")
        alert("'El mensaje debe contener al menos una oración con 4 palabras.")
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }
    // VALIDACIÓN CON API ZEROBOUNCE 
    if (formularioValido) {
        const apiKey = '58db09eef40940d8ab0edb2a4860d756'; // Reemplazo con clave API de ZeroBounce
        fetch(`https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`) 
            .then(response => response.json()) 
            .then(data => {
                if (data.status === "valid") {
                    alert("e-mail verificado.");
                    errorEmail.classList.add("d-none");
                    alert("Formulario enviado correctamente."); // SI FORMULARIO ES VÁLIDO, LO ENVÍO (se debe cumplir todo el flujo anterior)
                    formulario.reset(); // vacío formulario
                } else {
                    alert("El dominio e-mail no es válido.");
                    errorEmail.classList.remove("d-none");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
});