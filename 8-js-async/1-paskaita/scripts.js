// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log(3)
// }, 1000)
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 1; 1 < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// let request = new XMLHttpRequest();
// // console.log(request)

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         console.log(
//             JSON.parse(request.responseText)
//         )
//     }
// });

// request.open(
//     'get',
//     'https://jsonplaceholder.typicode.com/todos'
// );

// request.send();

// let request = new XMLHttpRequest();
// // console.log(request)

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         console.log(
//             JSON.parse(request.responseText)
//         )
//     }
// });

// request.open(
//     'get',
//     'users.json'
// );

// request.send();
// try {
//     console.log (
//         5 / 2 
//     );
//     throw error('pvz')
//     console.log('kodas vykdomas toliau')
// }
// catch (err) {
//     console.log(err)
// }
// finally {
//     console.log('pabaiga')
// }
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve('some data');
//         reject('some error');
//     })
// }
// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error)
// }).finally(() => {
//     console.log('finaly')
// })

// console.log('pries')

// const getTodos = async () => {

//     let response = await fetch('users')
//     .then(Response =>{ 
//        return Response.json()
//     })
//     const data = await response
//     console.log(data)
//     console.log('po')
//     return response

// }
// getTodos().then(data => console.log(data))
// console.log('po')


fetch('todos/mama.json').then((Response) => {
    console.log('resolved', Response)
    return Response.json() // grazina pazada
}).then(data => {
    console.log(data)// kai resolved, isspausdina
}).catch(err => {
    console.log('rejected', err)
}) 


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response =>{ 
        console.log(Response)
       return Response.json()
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log(error)
    })
    
