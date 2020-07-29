const fetch = require("node-fetch");

async function getApiResponse(){
    let response = await fetch('https://api.mcsrvstat.us/2/43.245.161.226:26785');
    let serverinfo = await response.json();
    return serverinfo;
};

exports.getApiResponse = getApiResponse;
