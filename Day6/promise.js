// const myPromise = new Promise((resolve,reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise is resolved");
//     }
//     else{
//         reject("Promise is rejected");
//     }
// });
// myPromise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });


function task(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data= {
                id:1,
                roll:23,
                name:"Rahul"
            }            
            resolve(data);
        });
    });
}

task().then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});


