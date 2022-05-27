// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    plus (another) {
        return this.x+another.x, this.y+another.y;
    }
    minus (another) {
        return this.x-another.x, this.y-another.y;
    }
    get length() {
        return ((this.x^2)-(this.y^2))^(-2);
    }
}

aVec = new Vec(2, 3);
console.log(aVec)
aNother = new Vec(5,7);
console.log(aVec.minus(aNother));
console.log(aVec.length);