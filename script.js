var btn = document.getElementById('btn'),
    display = document.getElementById('display');

btn.addEventListener('click', pro)

function pro(){
    const api = new Fet

    api.get("http://api.icndb.com/jokes")

        .then(function(users,id,joke){
            console.log(users)

            // users.forEach(function(user){
            //     var div = document.createElement('div');

            //     div.innerHTML = `This Users ID is ${id} <br/>  This Users Title is ${joke}`;

            //     div.classList.add('mt-3','p-3','card');

            //     div.append(display)
            // })

            let data = users.value

            console.log(data)

            data.forEach((data)=>{
                var div =document.createElement('div');
                div.innerHTML = `This User's Id is ${data.id} <br/> This Users Title is ${data.joke}`;

                div.classList.add('mt-3','p-3','card','text-light', 'bg-transparent');
                display.append(div)
            })
        })

        .catch(function(error){
            console.log(error)
        })
   
}