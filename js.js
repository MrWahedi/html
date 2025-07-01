function Circle (radius){
  this.radius = radius; 
  this.draw = function(){
    console.log('draw');
  }
}

console.log(Circle.call({}, 1))