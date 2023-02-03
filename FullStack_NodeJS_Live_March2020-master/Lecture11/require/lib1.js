


function sayHello(name) {
    console.log('Hello', name)
}
console.log(module.exports)  // Empty Object.
module.exports = { sayHello }
console.log(module.exports)  // Containing and object sayHello.

setTimeout(() => {
    module.exports.omg = 'wow'
}, 1000)
