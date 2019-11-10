class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }

    get countSides(){
    return this.sides.length
    }

    get perimeter(){
        if (!Array.isArray(this.sides)) return;
        let sum = 0
        for(let i of this.sides){
            sum += i
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(!Array.isArray(this.sides)) return;
        if(this.count !== 3) return;
        let firstSide = this.sides[0]
        let secondSide = this.sides[1]
        let thirdSide = this.sides[2]
        return ( (firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) )
    }
}


class Square extends Polygon {

    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
        let firstSide = this.sides[0]
        let secondSide = this.sides[1]
        let thirdSide = this.sides[2]
        let fourthSide = this.sides[2]
      return ((firstSide === secondSide) && (firstSide === thirdSide) && (firstSide === fourthSide))
    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0]
      }
}
