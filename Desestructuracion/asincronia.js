
/* Fetch and asin - await 

In database requests or backend requests, the requests are asynchronous. This means that it doesn't immediately return what is requested, but instead returns a promise that will be passed to another part of the system, and it will continue executing the code and start resolving it. Only when it's resolved, then I can see it. For this, Fetch or Axios can be used.
For the exercide, we'll this API: https://rickandmortyapi.com/documentation*/


// Characters: https://rickandmortyapi.com/api/character (GET)

let url = "https://rickandmortyapi.com/api/character" 

const query = fetch(url) // returns a promise
    .then((response)=> response.json())
    // Results is part of the API
    .then ((response) => console.log(response.results)) 

// Asinc, away

const handleData = async ()=>{

    const query = await  fetch(url);
    let data = await query.json()
    console.log(data)
}

handleData();
