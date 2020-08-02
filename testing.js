
sum(1,100, (sum) => {
    console.log(sum)
    console.log(sum)
    console.log(sum)
})

setTimeout(() => {
    console.log('Two a')
},2000)

setTimeout(() => {
    let result = 0
    for (let i = 0; i < 2000000; i++) {
        result = result + i
    }
    console.log('Two b')
},2000)

setTimeout(() => {
    let result = 0
    for (let i = 0; i < 200000; i++) {
        result = result + i
    }
},1500)

setTimeout(() => {
    console.log('One')
},1000)


setTimeout(() => {
    console.log('Zero')
},0)

setTimeout(() => {
    console.log('1.450')
},1450)

let result = 0
for (let i = 0; i < 200000; i++) {
    result = result + i
}


sum(99,100, (sum) => {
    console.log(sum)
    console.log(sum)
    console.log(sum)
})

function sum(a, b, callback){
    let sum = a + b
    callback(sum)
}

setImmediate(() => {
    console.log('Immediate')
})