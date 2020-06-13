window.onload = function(){
    let abracadabraButton = document.querySelector('a.button')

    abracadabraButton.addEventListener('click', function(){
        
        let nombre = prompt("Ingrese su nombre")

        let saludo = document.querySelector("h1 strong")

        saludo.innerHTML = nombre

    
    })

    let getInTouchButton = document.querySelector('article#portfolio footer a.button')
    
    //dblclick
    getInTouchButton.addEventListener('click', function(){
        let getInParrafo = document.querySelector('.parrafo-color')

        let colores = ["red", "violet", "blue", "green", "orange"];

        let colorAlAzar = colores[Math.round(Math.random()*4)]

        getInParrafo.style.color = colorAlAzar

    })

    let stuffIDo = document.querySelectorAll('section.box')

    for (let i = 0; i < stuffIDo.length; i++) {
        stuffIDo[i].addEventListener('click', function(){
            let stuff = this.querySelector('h3')
            stuff.innerHTML = "Clickeaste sobre "+ stuff.innerHTML
        })
        
    }

    let recentWork = document.querySelector('article#work footer a.button')

    recentWork.addEventListener("mouseover", function(){
        let colores = ["red", "violet", "blue", "green", "orange"];

        let colorAlAzar = colores[Math.round(Math.random()*4)]

        let recentWorkP = document.querySelector('article#work footer p')

        recentWorkP.style.color = colorAlAzar

        recentWork.addEventListener('mouseout', function(){
            recentWorkP.style.color = "#888"
        })
    })

    let lechuza = document.querySelector('#lechuza')
    
    lechuza.addEventListener('click', function(){
        
        alert('Prepárate para el futuro')

        setTimeout(function(){
            alert('Y el futuro ya llegó')
        }, 5000);

    })

    let campoEmail = document.querySelector('#email')

    campoEmail.addEventListener('keypress', function(e){
        
        let estadoSecreto = 0;

        if(estadoSecreto == 0 && e.key == "s"){
            estadoSecreto++
            if(estadoSecreto == 1 && e.key =="e"){
                estadoSecreto++
            }
            if(estadoSecreto == 2 && e.key =="c"){
                estadoSecreto++
            }

        } else {
            estadoSecreto = 0
        }

        

    })


    /* -- ELEGIR LA CAJA GANADORA -- */
    let numeros = [1,2,3,4,5,6];
    
    let numeroAlAzar = numeros[Math.round(Math.random()*5)]

    console.log(numeroAlAzar)

    let cajas = document.querySelectorAll('article.box')
    
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].addEventListener('click', function(){
            let numeroCaja = this.querySelector('article.box h3')
            
            console.log(numeroCaja.innerHTML)

            if(numeroCaja.innerHTML == numeroAlAzar){
                alert('Has elegido correctamte')
            } else {
                alert('Sigue intentando :(')
            }
            
        })
    }

    /* -- CRONÓMETRO -- */

}