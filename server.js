const axios = require('axios');
const env = require('dotenv')

env.config()

var username = process.env.TOR_API_USERNAME
var password = process.env.TOR_API_PASSWORD

async function torRoute(path){
    const blah = await axios.get(`https://metrics-api.torproject.org${path}`, {auth: { username: username, password: password }});
    console.log(blah)
}

torRoute("/details?type=relay&running=true")