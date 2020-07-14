window.onload = function(){

/* --- VALIDACIÓN IN TIME --- */

    /* VALIDACIÓN DE NOMBRE */
    var nombre = document.querySelector('input#fullName')

    nombre.addEventListener('blur', function(){
        if(nombre.value == ""){
            nombre.classList.add('is-invalid')
            document.querySelector('.fullName.invalid-feedback').innerHTML = 'Por favor, ingresa tu nombre'
        }
    })

    /* VALIDACIÓN DE E-MAIL */
    let email = document.querySelector('input#email')

    email.addEventListener('blur', function(){
        if(email.value == ""){
            email.classList.add('is-invalid')
            document.querySelector('.email.invalid-feedback').innerHTML = 'Tienes que ingresar tu correo'
        }
    })

    /* VALIDACIÓN DE TELÉFONO */
    let telefono = document.querySelector('input#phone')

    telefono.addEventListener('blur', function(){
        if(telefono.value == ""){
            telefono.classList.add('is-invalid')
            document.querySelector('.phone.invalid-feedback').innerHTML = 'Tienes que ingresar tu numero de teléfono'
        }
    })

    /* VALIDACIÓN DE CONTRASEÑA */
    let contrasenia = document.querySelector('input#password')

    contrasenia.addEventListener('blur', function(){
        if(contrasenia.value == ""){
            contrasenia.classList.add("is-invalid")
            document.querySelector('.password.invalid-feedback').innerHTML = 'Ingresa una contraseña'
        } else if(contrasenia.value < 4){
            contrasenia.classList.add('is-invalid')
            document.querySelector('.password.invalid-feedback').innerHTML = 'La contraseña debe tener mínimo 4 caracteres'
        }
    })

    /* VERIFICAR QUE AMBAS CONTRASEÑAS SEAN IGUALES */
    let recontrasenia = document.querySelector('input#rePassword')

    recontrasenia.addEventListener('blur', function(){
        if(recontrasenia.value == ""){
            recontrasenia.classList.add("is-invalid")
            document.querySelector('.rePassword.invalid-feedback').innerHTML = 'Debes repetir la contraseña'
        } else if(recontrasenia.value != contrasenia.value){
            recontrasenia.classList.add('is-invalid')
            document.querySelector('.rePassword.invalid-feedback').innerHTML = 'Debe ser igual a la anterior'
        }
    })

/* --- VALIDACIÓN LUEGO DEL SUBMIT --- */

    let formulario = document.querySelector('form.contact-form');

    formulario.addEventListener('submit', function(e){

        let errores = [];

        if(nombre.value == ""){
            errores.push('El campo de nombre debe estar lleno')
        }

        let fullName = nombre.value
        
        /* VALIDACIÓN DE E-MAIL */
        
        //para validar un corrreo electrónico se hace con el siguiente patrón:
        let patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


        if(!patron.test(email.value)){
            errores.push('debe ser un correo electrónico')
        }

        let eMail = email.value

        /* VALIDACIÓN DE TELÉFONO */
        let telefono = document.querySelector('input#phone')

        if(isNaN(telefono.value)){
            errores.push('El campo de teléfono no debe contener letras')
        }

        let phone = telefono.value

        /* VALIDACIÓN DE CONTRASEÑA */
        let contrasenia = document.querySelector('input#password')

        if(contrasenia.value.length<4){
            errores.push('la contraseña debe tener mas de cuatro caracteres')
        }

        /* VERIFICAR QUE AMBAS CONTRASEÑAS SEAN IGUALES */
        let recontrasenia = document.querySelector('input#rePassword')

        if(contrasenia.value != recontrasenia.value){
            errores.push('verificar que las constraseñas sean iguales')
        }

        console.log(errores)
        //Verificamos los errores
        if (errores.length > 0){
            //si tenemos errores, evitamos que se envíe el formulario
                e.preventDefault();
    
                let ulErrores = document.querySelector('div.errores ul')
                //recorremos el array de errores
                for (let i = 0; i < errores.length; i++) {
                    
                    ulErrores.innerHTML += '<li>'+ errores[i] + '</li>'
                    
                }
        
        // Si no hay errores
        } else {
            formulario.style.display = "none"
            datos = document.querySelector('.registroCompleto ul')
            datos.innerHTML += '<li>' + fullName + '</li>'
            datos.innerHTML += '<li>' + eMail + '</li>'
            datos.innerHTML += '<li>' + phone + '</li>'

            nuevaPagina = document.querySelector('.registroCompleto')
            nuevaPagina.innerHTML += '<h2> Gracias por registrarte :) </h2>'
        }

    })
}