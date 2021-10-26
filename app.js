const HEIGHT = 300
const WIDTH = 300

let fractalContainer = document.createElement("div");
fractalContainer.id = "fractal-container";
fractalContainer.style.height = `${HEIGHT}px`;
fractalContainer.style.width = `${WIDTH}px`;
fractalContainer.style.backgroundColor = "lightgray";
document.body.appendChild(fractalContainer);

let fractal = document.createElementNS("http://www.w3.org/2000/svg", "svg");
fractal.style.height = `${HEIGHT}px`;
fractal.style.width = `${WIDTH}px`;
fractalContainer.append(fractal);

let triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
triangle.setAttribute("points", "150,0 300,260 0,260");
triangle.setAttribute("fill", "none");
triangle.setAttribute("stroke", "red");
fractal.appendChild(triangle);


// SVGPolygonElement -> SVGPolygonElement
// makes, renders in the HTML, and returns a new triangle
// drawn inside of and by connecting the midpoints of the 
// sides of the given triangle
// this function ended up being inadequate for a Serpinski triangle
// but it was a good prototype.
function smallTriangle(triangle){
    let points = triangle.points;
    let point1 = points[0];
    let point2 = points[1];
    let point3 = points[2];
    let newX1 = (point1.x + point2.x)/2;
    let newY1 = (point1.y + point2.y)/2
    let newX2 = (point2.x + point3.x)/2
    let newY2 = (point2.y + point3.y)/2
    let newX3 = (point3.x + point1.x)/2
    let newY3 = (point3.y + point1.y)/2
    let newTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newTriangle.setAttribute("points", `${newX1},${newY1} ${newX2},${newY2} ${newX3},${newY3}`);
    newTriangle.setAttribute("fill", "none");
    newTriangle.setAttribute("stroke", "red");
    fractal.appendChild(newTriangle);

    return newTriangle;
}

// SVGPolygonElement -> List of three SVGPolygonElements
function threeNewTriangles(triangle){
    let topTriangle_ = topTriangle(triangle);
    let leftBottomTriangle_ = leftBottom(triangle);
    let rightBottomTriangle_ = rightBottom(triangle);
    return [topTriangle_, leftBottomTriangle_, rightBottomTriangle_];
}

function topTriangle(triangle){
    let points = triangle.points;
    let point1 = points[0];
    let point2 = points[1];
    let point3 = points[2];
    let newX1 = point1.x;
    let newY1 = point1.y;
    let newX2 = (point2.x + point1.x)/2
    let newY2 = (point2.y + point1.y)/2
    let newX3 = (point3.x + point1.x)/2
    let newY3 = (point3.y + point1.y)/2
    let newTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newTriangle.setAttribute("points", `${newX1},${newY1} ${newX2},${newY2} ${newX3},${newY3}`);
    newTriangle.setAttribute("fill", "none");
    newTriangle.setAttribute("stroke", "red");
    fractal.appendChild(newTriangle);
    return newTriangle;
}

function leftBottom(triangle){
    let points = triangle.points;
    let point1 = points[0];
    let point2 = points[1];
    let point3 = points[2];
    let newX1 = point3.x;
    let newY1 = point3.y;
    let newX2 = (point2.x + point3.x)/2
    let newY2 = (point2.y + point3.y)/2
    let newX3 = (point3.x + point1.x)/2
    let newY3 = (point3.y + point1.y)/2
    let newTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newTriangle.setAttribute("points", `${newX1},${newY1} ${newX2},${newY2} ${newX3},${newY3}`);
    newTriangle.setAttribute("fill", "none");
    newTriangle.setAttribute("stroke", "red");
    fractal.appendChild(newTriangle);
    return newTriangle;
}

function rightBottom(triangle){
    let points = triangle.points;
    let point1 = points[0];
    let point2 = points[1];
    let point3 = points[2];
    let newX1 = point2.x;
    let newY1 = point2.y;
    let newX2 = (point2.x + point1.x)/2
    let newY2 = (point2.y + point1.y)/2
    let newX3 = (point3.x + point2.x)/2
    let newY3 = (point3.y + point2.y)/2
    let newTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newTriangle.setAttribute("points", `${newX1},${newY1} ${newX2},${newY2} ${newX3},${newY3}`);
    newTriangle.setAttribute("fill", "none");
    newTriangle.setAttribute("stroke", "red");
    fractal.appendChild(newTriangle);
    return newTriangle;
}

let threeTriangles = threeNewTriangles(triangle);
for (let triangle of threeTriangles){
    threeTriangles = threeNewTriangles(triangle);
    for (let triangle of threeTriangles){
        threeTriangles = threeNewTriangles(triangle);
        for (let triangle of threeTriangles){
            threeTriangles = threeNewTriangles(triangle);
            for (let triangle of threeTriangles){
                threeTriangles = threeNewTriangles(triangle);
                for (let triangle of threeTriangles){
                    threeTriangles = threeNewTriangles(triangle);
                }
            }
        }
    }

}