

class Fet{
   get (url){
    return new Promise(function(resolve,reject){
        fetch (url)

            .then( response => response.json())

            .then(data => resolve(data))

            .catch(error => reject(error))
    })
   }   
}

