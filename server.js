const axios = require('axios');
const env = require('dotenv')
const test = require('node:test');
const assert = require('assert');

env.config()

var username = process.env.TOR_API_USERNAME
var password = process.env.TOR_API_PASSWORD

async function torRoute(path){
    const blah = await axios.get(`https://metrics-api.torproject.org${path}`, {auth: { username: username, password: password }});
    return blah.data
}


test('version test', async (t) => {
    const r =  await torRoute("/details") 
    assert.strictEqual("tor-0.4.8.10",  r["version"]);
});

test('build version test', async (t) => {
    const r =  await torRoute("/details") 
    assert.strictEqual("0.4.8.10",  r["build_version"]);
});