let submitBtn = document.getElementById('submitBtn')
let formRegister = document.getElementById('formRegister')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let obj = {}
    let data = new FormData(formRegister)
    data.forEach((value, key) => obj[key]=value)
    console.log(obj)

    fetch('/register', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => result.json())
        .then(json => console.log(json))
})