





submitbtn.addEventListener("click",async(e)=>{
    e.preventDefault()
    resultcont.innerHTML = `<img width="133" src="loader.svg" alt="">`
    let key = "ema_live_Fu4bILHTfy9C5wc7c2MBeRd9gkSTBu6arOgdQ3Vm"
    let email = document.getElementById("username").value
    
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str =``
    for(key of Object.keys(result)){
        if (result[key] !=="" && result[key]!==" " ){
            str += `<div> ${key} : ${result[key]} </div>  `
        }
       
    }
  
    resultcont.innerHTML = str
})

// let results ={
//     "tag": "",
//     "free": true,
//     "role": false,
//     "user": "jaybhuptani1054",
//     "email": "jaybhuptani1054@gmail.com",
//     "score": 0.64,
//     "state": "deliverable",
//     "domain": "gmail.com",
//     "reason": "valid_mailbox",
//     "mx_found": true,
//     "catch_all": null,
//     "disposable": false,
//     "smtp_check": true,
//     "did_you_mean": "",
//     "format_valid": true
//   }
