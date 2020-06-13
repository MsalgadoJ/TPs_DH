window.onload = function(){

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG&limit=25&rating=G')
    
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        console.log(information)

    })
    .catch(function(error){
        console.log("Error: "+error)
    })       
}