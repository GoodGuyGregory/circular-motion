function Obit(noiseOffset, orbitAngle, orbitSpeed, orbitDiameter) {

}



// Noise offset
let xMiddleoff = 0.2;

// Speeds

var middleAngle = .95;
var middleSpeed = 0.02;

var middleLineX = (windowWidth / 2) + cos(middleAngle) * 230;
var middleLineY = (windowHeight / 2) + sin(middleAngle) * 230;
middleAngle += middleSpeed;

// Object and 
// MIDDLE ORBIT:
ellipse(middleLineX, middleLineY, 100, 100);
noFill();
stroke(255, 102, 0);
xMiddleoff = xMiddleoff + 0.05;
let middleOrbitLine = noise(xMiddleoff) * 15;
strokeWeight(middleOrbitLine);
//  orbit line
ellipse(windowWidth / 2, windowHeight / 2, 450, 450);
strokeWeight(1);
fill(255, 102, 0);