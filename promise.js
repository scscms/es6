var p1 = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("p1");
        resolve("Hello");
    }, 3000);
});

var p2 = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("p2");
        resolve("World");
    }, 1000);
});

Promise.all([p1, p2]).then(function (result) {
    console.log(result); // ["Hello", "World"]
});

Promise.resolve(42).then(function(value){
    console.log(value);
});

var promise = new Promise(function (resolve){
    console.log("inner promise"); // 1
    resolve("promise end");
});
promise.then(function(value){
    console.log(value); // 3
});
console.log("outer promise"); // 2

