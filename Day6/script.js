let ar = [1, 2, 3, 33, 45, 88, 64];
// let new_ar = ar.map((item) => item * 2);
// console.log(new_ar);

// Output: [2, 4, 6, 66, 90]

// let new_ar = ar.filter((x) => x%2 == 0);
// console.log(new_ar);

// Output: [2, 88, 64]

// let new_ar = ar.filter((x) => x % 2 == 0).map((x) => x * 3);
// console.log(new_ar);

// Output: [6, 264, 192]

// let new_ar = ar.reduce((acc , x) => acc + x , 0);
// console.log(new_ar);

// Output: 236

// let new_ar = ar.filter((x) => x % 2 == 0).map((x) => x * 4).reduce((acc , x) => acc + x , 0);
// console.log(new_ar);

const students = [{
    name: "Alice",
    score: 60
},
{
    name: "Bob",
    score: 70
},
{
    name: "Charlie",
    score: 80
},
{
    name: "David",
    score: 90
}
];

let new_ar = students.filter((x) => x.score > 70).map((x) => x.score * 2).reduce((acc, x) => acc + x, 0);
console.log(new_ar);



