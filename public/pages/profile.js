fetch('/currentSession')
    .then(result => result.json())
    .then(json => {
        document.getElementById('name').innerHTML = json.name
        document.getElementById('address').innerHTML = json.address
    })