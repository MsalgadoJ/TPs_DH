window.onload = function(){
    /* -- BUSCADOR-- */
    //Vamos a hacer un buscador para el usuario. 

    let button = document.querySelector('button');

    function search(){

        //Seleccionamos de dónde va a recibir los valores
        var search = document.querySelector('.search').value;
        var cantidad = document.querySelector('.cantidad').value;
    

        // Utilizamos el endPoint "search" pero lo vamos a modificar con las entradas que hace el usuario desde el front
        fetch('https://api.giphy.com/v1/gifs/search?api_key=XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG&q=' + search + '&limit=' + cantidad + '&offset=0&rating=g&lang=en')
            
        .then(function(response){
            return response.json()
        })
        .then(function(resultado){
            let body = document.querySelector('body');

            body.innerHTML += '<h2>Resultados por buscar: '+ search + '</h2>';
            body.innerHTML += '<ul></ul>';

            let list = document.querySelector("ul");

            /* --- RECORREMOS EL ARRAY --- */
            resultado.data.forEach(gif => {
                let gifSearch = gif.title

                if(gifSearch == ""){
                    gifSearch = '<p> Este gif no tiene nombre </p>'
                } else {
                    gifSearch = '<h4>' + gifSearch + '</h4>'
                }
                
                gifSearch += '<img src=' + gif.images.original.url + '>'
                
                list.innerHTML += '<li>' + gifSearch + '</li>'

            });
        })

        .catch(function(error){
            console.log("Error: "+error)
        })       

    }

    // ejecutamos con el click
    button.addEventListener('click', search)

    
}