import axios from 'axios'
import qs  from 'qs';
import faker from 'faker';


const baseURL = "http://localhost:8080"


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function sendData(urlDestino,info){
    axios( {
          method: 'POST',
          url: urlDestino,
          data: 
               qs.stringify(info)
          ,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    }).then(res =>{
        console.log(res.data)
    }).catch(err =>{
        console.log("ERROR")
    })
    
}


for (let index = 1; index <= 1000; index++) {
    //Ojo que puede generar URLs no safe, se puede filtrar el protocol para q sea HTTP O HTTPS
    var fakeURL =  faker.internet.protocol() + '://' + faker.internet.domainName();
    const object = {'url': fakeURL}
    
    sendData(baseURL + '/api/testing',object)
    if(index % 10 === 0) {
        await sleep(500)
    }
}

