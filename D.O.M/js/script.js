window.alert("Bienvenidos a mi sitio")

let confirmacion = confirm('¿Estás seguro de que quieres avanzar?')

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

        if


    } else {
        let containerGeneral = document.querySelector(".container-general")
        containerGeneral.style.display = "none"

        let contenidoBloqueado = document.querySelector("div#accesoDenegado")
        contenidoBloqueado.style.display = "block"
    }
    
} else {
    let h2 = document.querySelector("h2")
    h2.innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}