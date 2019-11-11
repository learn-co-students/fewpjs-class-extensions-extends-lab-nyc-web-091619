// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }
    
    // return the number of elements
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        // isArray (ES5) determines if an object is an array.  May not be supported
        // by older browsers
        // if (!Array.isArray(this.sides)) return;

        // instanceof only checks if Array.protoype is on an object's
        // prototype chain.
        // if (!(this.sides instanceof Array)) return;

        // preferred solutions, works on ES3 browsers
        if (!Object.prototype.toString.call(this.sides) == '[object Array]') {
             return;
        }
        // let sum = 0 
        // commented out above line (from the solution set) because the initial value 
        // of "sum" is set by the .reduce method.  After we we pass the reducer function 
        // (in this example: 'sum + value' ), the method sets the initial value of sum
        // to the second parameter ('0' in this case)
        return this.sides.reduce((sum, value) => sum + value, 0);
        // use the .reduce method for Array prototype and pass it the arguments(parameters)
        // sum and value.  Then return to caller.
    }
}

class Triangle extends Polygon {
    // inherits constructor, count and perimeter from Polygon.

    // the getter method isValid() checks to see the sides of triangle are valid
    // rules: 
    // a + b > c
    // a + c > b
    // b + c > a

    get isValid() {
        // preferred solutions, works on ES3 browsers
        if (!Object.prototype.toString.call(this.sides) == '[object Array]') {
            return;
        }

        if (this.count !== 3) return;
        // console.log(this.count)  // => 3
        // console.log(this.sides.count)  // => undefined
        // console.log(this.sides)   // => [ 5, 5, 5 ]

        // Assign each of the sides to a variable to make it easier to type :)
        let A = this.sides[0]
        let B = this.sides[1]
        let C = this.sides[2]

        // alternative syntax to assign variables: via HTCicek 
        // const [A, B, C] = this.sides;

        // If any side is less than zero, rejecteroonie. 
        if (A <= 0) return;
        if (B <= 0) return;
        if (C <= 0) return;

        // return the boolean value of the comparision between each condition,
        // chaining them toegher with the logical AND operator to make sure all
        // conditions are met.
        return ((A + B > C) && 
                (A + C > B) &&
                (B + C > A));

    }
}

class Square extends Polygon {
    // inherits constructor, count and perimeter from Polygon.

    // the rules for squares being valid is that all sides are equal
    get isValid() {
        if (!Object.prototype.toString.call(this.sides) == '[object Array]') {
            return;
        }
        if (this.count !== 4) return;
        
        // console.log(this);      // Square { sides: [ 5, 5, 5, 5 ], count: 4 }

        // let A = this.sides[0]
        // let B = this.sides[1]
        // let C = this.sides[2]
        // let D = this.sides[3]
    
        // return  (A === B) &&
        //         (B === C) &&
        //         (C === D)

        // An alternative, succint method for comparing all values.
        // Use the .every() method for Array.prototype to test whether all elements
        // of an array pass the test implemented by the provided function.  Returns
        // Boolean value.  Reference:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
        // https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
        // 
        // We use array[0] (and don't iterate) since every value has to be equal.
        return this.sides.every((value, index, array) => value === array[0])
        // alternative syntax via: HTCicek 
        // return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        if (!Object.prototype.toString.call(this.sides) == '[object Array]') {
            return;
        }
        if (this.count !== 4) return;
        
        // return this.sides[0] * this.sides[0]

        return this.sides[0]**2 
    }

}