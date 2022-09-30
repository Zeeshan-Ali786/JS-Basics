// This process is called Agregating module



// here we import circle.js, triangle.js, square.ja
// and then again export this for calling them inside module.js
export { circle } from "./shapes/circle.js";
export { square } from "./shapes/square.js";
export { triangle } from "./shapes/triangle.js";

// we are not using all modules (circle,tria,square) here just export for use on moddule.js