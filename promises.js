const promise = new Promise((resolve, reject) => {
    var nome = 'Ele'

    if (nome == 1) {
        resolve('Promessa concluida')
    }else {
        reject('Promessa não cumprida')
    }
})

promise.then((data) => {
    return data.ToUpperCase()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

const host = 'https://dattebayo-api.onrender.com'
fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}).then((response) =>{
    return response.json()
}).then((data) => {
    let naruto = data.characters[0];

    for (let count = 0; count < naruto.jutsu.length; count++) {
        console.log(naruto.jutsu[count].toUpperCase());
    }
}).catch((error) => {
    console.log(error);
})