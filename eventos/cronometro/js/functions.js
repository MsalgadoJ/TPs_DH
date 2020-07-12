window.onload = function(){
    let contadorSegundos = 0;
    let contadorMinutos = 0;

    segundos = document.querySelector('.seconds');
    minutos = document.querySelector('.minutes')

    let cronometro = document.querySelector('.start');
    console.log(cronometro)

    var intervalo;
    cronometro.addEventListener('click', function(){
        intervalo = setInterval(function(){
            if(contadorSegundos == 60){
                contadorSegundos = 0;
                contadorMinutos++;
                minutos.innerHTML = contadorMinutos;
    
                if(contadorMinutos == 0){
                    //lo hacemos así porque no estamos manejand horas
                    contadorMinutos = 0;
                }
            }
    
            segundos.innerHTML = contadorSegundos;
            contadorSegundos++;
        }, 1000);
    }) 

    let pausar = document.querySelector('.pause')
    console.log(pausar)

    pausar.disabled = false;

    pausar.addEventListener('click', function(){
        clearInterval(intervalo)
        console.log(this)
    })

    let resetear = document.querySelector('.reset');
    console.log(resetear)

    resetear.disabled = false;

    resetear.addEventListener('click', function(){
        contadorSegundos = 0;
        contadorMinutos = 0;
    })
}