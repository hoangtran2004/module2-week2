
class ClassCircle {
     _color:string;
     _radius:number;

    constructor(color: string, radius: number) {
        this._color = color;
        this._radius = radius;
    }
}
let CircleList:ClassCircle[]=[];
 CircleList.push(new ClassCircle('red',2));
 CircleList.push(new ClassCircle('blue',3));
 CircleList.push(new ClassCircle('green',5));

function showCircle(circle:ClassCircle) {
    console.log(`This circle is ${circle._color}, Radius is ${circle._radius}`)
}
    CircleList.forEach(showCircle);