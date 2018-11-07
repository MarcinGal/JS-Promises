// const promise = fetch('https://randomuser.me/api')

// const promise2 = promise.then(response => response.json())

// const promise3 = promise2.then(data => console.log(data.results[0].name.first))

fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].name.first)
        return data
    })
    .then(data => {
        console.log(data.results[0].name.last)
    })