// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides
    }
   
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let acc = this.sides.reduce((acc, curVal) => acc + curVal)
        return acc
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.countSides !== 3) return false
        return !(this.sides[0] + this.sides[1] <= this.sides[2] 
            || this.sides[0] + this.sides[2] <= this.sides[1] 
            || this.sides[1] + this.sides[2] <= this.sides[0])
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides !== 4) return false
        return this.sides[0] === this.sides[1] 
        && this.sides[1] === this.sides[2] 
        && this.sides[2] === this.sides[3]
    }

    get area(){
        if(!this.isValid) return false
        return this.sides[0] ** 2
    }
}