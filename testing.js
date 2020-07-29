const obj = {
    multiplier : 2,
    numbers : [1,2,3,4,5],
    method_1() {
        this.numbers.forEach((number) => {
            console.log(number * this.multiplier)
        })
    },
    method_2() {
        this.numbers.forEach(number => console.log(number*this.multiplier))
    }

}

obj.method_2()