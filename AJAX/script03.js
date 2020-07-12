window.onload = function(){

    /* -- ELEGIR FAVORITOS-- */

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG&limit=25&rating=G')
    
    .then(function(response){
        return response.json()
    })
    .then(function(information){

        // SELECCIONAMOS LA ETIQUETA BODY PARA PODER EDITARLA
        
        let body = document.querySelector('body');
        body.innerHTML += '<ul></ul>';

        let list = document.querySelector("ul");
        
        /* --- RECORREMOS EL ARRAY --- */
        information.data.forEach(gif => {
            let gifSearch = gif.title

            if(gifSearch == ""){
                gifSearch = '<p> <i class="far fa-star"></i> Este gif no tiene nombre </p>'
            } else {
                gifSearch = '<h4><i class="far fa-star" id="'+ gif.id +'"></i> ' + gifSearch + '</h4>'
            }
            
            gifSearch += '<img src=' + gif.images.original.url + '>'
            
            list.innerHTML += '<li>' + gifSearch + '</li>'

        });

        //
        let estrellas = document.querySelectorAll('.far.fa-star')
        
        let favoritos = []
        estrellas.forEach(estrella => {
            estrella.addEventListener('click', function(){
                //favoritos.push(estrella)
                favoritos.push(this.getAttribute('id'))
                console.log(favoritos)
                console.log(typeof(favoritos))
                //vamos a utilizar Storage para guardar los favoritos. Storage es una varibale que ya existe en JS por lo tanto no tengo por qué declararla

                //Si vamos a trabajar con arrays o con objetos literales la información que vamos a guardar hay que pasarla por JSON.stringify para tranformar el array y objeto literal en un texto

                favoritosString = JSON.stringify(favoritos)
                console.log(favoritosString)
                console.log(typeof(favoritos))
                sessionStorage.setItem('favoritos', favoritosString)
            })

        })

    })
    .catch(function(error){
        console.log("Error: "+error)
    })
    
    
}
