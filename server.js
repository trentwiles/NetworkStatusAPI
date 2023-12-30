const axios = require('axios');

async function req(url){
    const blah = await axios.get(url);
    console.log(blah.data)
}

console.log(req("https://api.glitch.com"))