const promise = fetch('https://randomuser.me/api/?results=10')

promise.then(response => response.json())
.then(data => console.log(data.results.forEach( (e) => console.log(e.name.first) )   ))
.catch(error => console.log('Congratulation. You found ERROR here!', error))
//Fetch promise resolved  &&  function passed to then   ===>  function called with resolved data as an argument

//We call .json() on resolvede response object cause we want to parse stream of bytes into JS object (in most of cases)

