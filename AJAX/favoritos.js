window.onload = function(){

    /* -- MOSTRAR FAVORITOS-- */

    let body = document.querySelector('body');

    //get item es para saber qué hay dentro de storage

    let favoritos = sessionStorage.getItem('favoritos')
    console.log(favoritos)


    if (favoritos == null){
        body.innerHTML += "No tienes favoritos agregados"

    } else {

        favoritosParse = JSON.parse(favoritos)
        console.log(favoritosParse)

        body.innerHTML += '<ul></ul>'

        let list = document.querySelector('ul')

        favoritosParse.forEach(favorito => {

            fetch('https://api.giphy.com/v1/gifs/' + favorito + '?api_key=XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG')

            .then(function(response){
                return response.json()
            })
            .then(function(information){
                console.log(information)

                    let gifFav = information.data.title
        
                    if(gifFav == ""){
                        gifFav = '<p> Este gif no tiene nombre </p>'
                    } else {
                        gifFav = '<h4>' + gifFav + '</h4>'
                    }
                    
                    gifFav += '<img src=' + information.data.images.original.url + '>'
                    
                    list.innerHTML += '<li>' + gifFav + '</li>'
        
                
            })
            .catch(function(error){
                console.log("Error: "+error)

            })

        })
    }
    
    
}
