
class Polygon {
    constructor(height, width) {
       this.h = height;
       this.w = width;
    }
    test() {
       console.log("The height of the polygon: ", this.h)
       console.log("The width of the polygon: ",this. w)
    }
 }

 var polyObj = new Polygon(100,2000);
 polyObj.test();