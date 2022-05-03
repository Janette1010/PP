const arrowCharacterCount = (str, a, e, i, o, u) => {
    const answer = (str.split(a, e, i, o, u).length - -1);
    return answer
}

console.log(arrowCharacterCount('oausiasiasu', 'a', 'e', 'i', 'o', 'u'));

//A E I O U
const vowelChecker = (x) => {

}
console.log()







//MED 4
class Car {
    constructor(make, model, year, millage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.millage = millage;
        this.color = color;
    }
    driveToWork(work) {
        console.log(this.millage + 20)
        return this
    }
    driveAroundTheWorld(world) {
        console.log(this.millage + 200000)
        return this
    }
    runErrands(earrands) {
        console.log(this.millage + 50)
        return this
    }
}
let car1 = new Car('Tesla', 'X', 2014, 15000, 'black')
console.log(car1)
car1.driveToWork();
car1.driveAroundTheWorld();
car1.runErrands();