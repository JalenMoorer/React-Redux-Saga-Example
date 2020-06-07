export function getResponseFromEndpoint(url) {
    return new Promise(function(resolve,reject) {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }
    fetch(url, options)
        .then((res) => {return res.json()})
        .then((response) => {
            resolve(response)
        })
        .catch(error => {
            reject(error);
        })
    })
}