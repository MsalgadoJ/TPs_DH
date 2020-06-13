window.onload = function(){
    let formulario = document.querySelector('form.contact-form');

    formulario.addEventListener('submit', function(e){
        //aquí evitamos que se envíe para trabajar mas cómodos
        e.preventDefault();

        let errores = [];

        let nombre = document.querySelector('input#fullName')

        if(nombre.value == ""){
            alert('El campo de nombre debe estar lleno')
        }
        /* VALIDACIÓN DE E-MAIL */
        let email = document.querySelector('input#email')
        
        //para validar un corrreo electrónico se hace con el siguiente patrón:
        let patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


        if(!patron.test(email.value)){
            alert('debe ser un correo electrónico')
        }

        /* VALIDACIÓN DE TELÉFONO */
        let telefono = document.querySelector('input#phone')

        if(isNaN(telefono.value)){
            alert('El campo de teléfono no debe contener letras')
        }

        /* VALIDACIÓN DE CONTRASEÑA */
        let contrasenia = document.querySelector('input#password')

        if(contrasenia.value.length<4){
            alert('la contraseña debe tener mas de cuatro caracteres')
        }

        /* VERIFICAR QUE AMBAS CONTRASEÑAS SEAN IGUALES */
        let recontrasenia = document.querySelector('input#rePassword')

        if(contrasenia.value != recontrasenia.value){
            alert('verificar que las constraseñas sean iguales')
        }
    })
}