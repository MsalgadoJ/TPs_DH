let axios = require('axios');
let defaults = require('./default');

const url = 'gifs/'

let gifResource = {
    random: function(){
        return axios({
            ...defaults,
            methods: "GET",
            url: url + 'random',
            params: {
                api_key:'XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG', 

            }
        })
    },

    trending: function(){
        return axios({
            ...defaults,
            methods: "GET",
            url: url + 'trending',
            params: {
                api_key:'XWzMnrjcqchXWM6XbtDcf3dANWmWf8TG', 
            }
        })
    }
}

module.exports = gifResource;