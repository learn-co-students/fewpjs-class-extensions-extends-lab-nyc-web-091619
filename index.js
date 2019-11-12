// Your code here
class Polygon {
    constructor(array) {
        this.sides = array; 
        this.sidesCount = this.sides.length 
    }

    get countSides () {
       return this.sidesCount 
    }

    get perimeter() {
        return this.sides.reduce(function(total,number) {
            return total + number  
        }, 0)
    }
}


class Triangle extends Polygon {

    get isValid() {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  
  class Square extends Polygon {
  
    get isValid() {
     
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      return this.sides[0] * this.sides[0]
    }
  }