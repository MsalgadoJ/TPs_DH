window.onload = function(){

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG&limit=25&rating=G')
    
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        //console.log(information)

        /* --- PARA QUE EL USUARIO DECIDAD CUÁNTOS GIFS QUIERE VER --- */
        
        let cantidadGifs = prompt('Ingresa')
        
        /* --- RECORREMOS EL ARRAY --- */
        for(let i = 0; i < cantidadGifs; i++){

            let gif = "<p>" + information.data[i].title + "<p>";

            gif += "<img src=" + information.data[i].images.original.url +">"

            document.querySelector('ul').innerHTML += "<li>" + gif + "</li>"
        }
    })
    .catch(function(error){
        console.log("Error: "+error)
    })       
}