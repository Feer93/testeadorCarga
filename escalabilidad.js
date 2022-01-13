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
   console.time("TiempoRespuesta")
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
        console.timeEnd("TiempoRespuesta")
        console.log(res.data)
    }).catch(err =>{
        console.log("ERROR")
    })
    
}


for (let index = 1; index <= 400; index++) {
    //Generamos URLs altearias
    var fakeURL =  faker.internet.protocol() + '://' + faker.internet.domainName();
    var randomNumber = Math.random()
    //Con una probabilidad <0.3 pedimos Qr
    const object = {'url': fakeURL,'createQr': (randomNumber >= 0.7)}
    
    sendData(baseURL + '/api/link',object)
     await sleep(200)
    
}

