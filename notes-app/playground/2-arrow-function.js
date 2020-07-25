// const square = function (x) {
//     return x**2
// }

// console.log(square(90))

// const square = (x) => {
//     return x**2
// }

// console.log(square(8))

// const cube = x => x**3

// console.log(cube(45))

const event = {
    name : 'birthday party',
    guestList : ['a','b','c'],
    printGuestList () {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}

event.printGuestList()