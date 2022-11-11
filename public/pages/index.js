let submitBtn = document.getElementById('submitBtn')
let formLogin = document.getElementById('formLogin')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let obj = {}
    let data = new FormData(formLogin)
    data.forEach((value, key) => obj[key]=value)
    console.log(obj)

    fetch('/login', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 400) console.log('error') //modal indicando el error
        else location.replace('./profile.html')
    })
})