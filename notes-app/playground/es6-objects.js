
const name = 'Adoniram';
const age = 20

const user = {
    name,
    age,
    location : 'Miami'
}

console.log(user)

const product = {
    label : 'red notebook',
    price : 3,
    stock : 201,
    sale : false,
    rating : 4
}

// const {label:productLabel, price, stock, sale, rating = 0} = product

// console.log(rating)

const transaction = (type, {label, rating}) => {
    console.log(label, rating)
}

transaction('order', product)