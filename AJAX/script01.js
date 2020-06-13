window.onload = function(){
    /* -- CREAMOS EL BOTÓN-- */
    let boton = document.querySelector('button')

    /* -- HACEMOS LA FUNCIÓN-- */
    function cambiarGif(){
        fetch('https://api.giphy.com/v1/gifs/random?api_key=XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG&tag=&rating=G')
        .then(function(response){
            return response.json()
        })
        .then(function(information){
            console.log(information)       
               
            let nombreGif = information.data.title;
            let urlGif = information.data.image_url
      
            document.querySelector('h1').innerHTML = nombreGif
      
            document.querySelector('img').setAttribute('src', urlGif)

        })

        .catch(function(error){
             console.log("Error: "+error)
        })       
    }

    /* -- EJECUTAMOS AL HACER CLICK-- */
    boton.addEventListener('click', cambiarGif)

}