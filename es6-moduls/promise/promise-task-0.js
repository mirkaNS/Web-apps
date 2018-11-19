// // Pending
// const myFirstPromise = new Promise((resolve, reject) => {

//     const currentDate = new Date();
//     resolve(currentDate);

// })

// myFirstPromise.then((response) => {
//     console.log(response);
// })



for (let i = 0; i < 100; i++) {

    const interval = Math.random() * 500;

    const promise = new Promise((resolve, reject) => {
        const id = i;
        setTimeout(function () {
            resolve(id);
        }
            , interval);
    })

    promise.then((responseID) => {
        console.log('id: ', responseID)
    })
}
//promise all
