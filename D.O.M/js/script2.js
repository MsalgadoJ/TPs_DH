window.onload = function(){
    let colorPreferido = prompt('Ingresa tu color preferido (en inglés)');

    let nombre = prompt('ingresa tu nombre, por favor');

    let h1 = document.querySelector("h1");
    h1.innerHTML = "Bienvenido " + '<span>' + nombre + '</span>';

    let aplicarColor = document.querySelector('h1 span');
    
    //agregamos una clase a la nueva etiqueta que creamos y posteriormente, cambamos el color con el que el usuario eligió en el prompt
    aplicarColor.classList.add('color-preferido');

    aplicarColor.style.color = colorPreferido;

    let avatar = prompt('ingresa la ruta de la imagen que quieres como avatar');

    let cambiarAvatar = document.querySelector('.avatar');
    console.log(cambiarAvatar);

    cambiarAvatar.src = avatar;
    
}

/*let confirmacion = confirm('¿Estás seguro de que quieres avanzar?')

if(confirmacion){
    let h2 = document.querySelector("h2")
    h2.innerHTML = "Qué alegría que quieras continuar con tu visita por este maravilloso sitio."

    let nombre = prompt('ingresa tu nombre, por favor')

    let h1 = document.querySelector("h1")
    h1.innerHTML = "Bienvenido " + nombre

    let edadUsuario = prompt('¿Qué edad tienes?')

    if(parseInt(edadUsuario) >= 18){
        let hobbiesUsuario = prompt('Por favor, ingresa tus hobbies separados por coma')
        
        let hobbies = hobbiesUsuario.split(',')
        console.log(hobbies)

        let gustos = hobbies.indexOf('Programar','Programación', 'Programacion')

        let cambiarFondo = document.querySelector('.container.background-img');
        console.log(cambiarFondo);

        if(gustos != -1){
            window.alert('qué bueno que te guste la programación! :)')

            cambiarFondo.style.backgroundImage = "url(img/programmer.jpeg)"

        } else {
            window.alert('qué lástima que no te guste la programacón :(');
            
            cambiarFondo.style.backgroundImage = "url(img/gatito.jpeg)"
        }

        
        let mostrarHobbies = document.querySelector('article ol')
        console.log(mostrarHobbies)
        for(let i = 0; i<hobbies.length; i++){
            mostrarHobbies.innerHTML += '<li>'+ hobbies[i]+ '</li>'
        }
        
        

    } else {
        let containerGeneral = document.querySelector(".container-general")
        containerGeneral.style.display = "none"

        let contenidoBloqueado = document.querySelector("div#accesoDenegado")
        contenidoBloqueado.style.display = "block"
    }
    
} else {
    let h2 = document.querySelector("h2")
    h2.innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}*/