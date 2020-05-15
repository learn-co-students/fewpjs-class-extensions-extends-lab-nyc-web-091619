// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, side) => total += side, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {
        if ((this.sides[0] + this.sides[1] > this.sides[2])){
            if ((this.sides[1] + this.sides[2] > this.sides[0])) {
                if ((this.sides[0] + this.sides[2] > this.sides[1])) {
                    return true;
                }
            }
        }
        return false;
    }

}

class Square extends Polygon {

    get area() {
        return this.sides[0] ** 2;                
    }

    get isValid() {
        return this.sides.every(el => el === this.sides[0])
    }

}