var ClassCircle = /** @class */ (function () {
    function ClassCircle(color, radius) {
        this._color = color;
        this._radius = radius;
    }
    return ClassCircle;
}());
var CircleList = [];
CircleList.push(new ClassCircle('red', 2));
CircleList.push(new ClassCircle('blue', 3));
CircleList.push(new ClassCircle('green', 5));
function showCircle(circle) {
    console.log("This circle is ".concat(circle._color, ", Radius is ").concat(circle._radius));
}
CircleList.forEach(showCircle);
