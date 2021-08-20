
//  Variables:

// Noise offset
let xMiddleoff = 0.2;
let xOutteroff = 0.6;

// Speeds

var middleAngle = .95;
var middleSpeed = 0.02;
var outterAngle = .48;
var outterSpeed = 0.004;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background('rgba(80%,0%,100%,0.06)');
    var middleLineX = (windowWidth / 2) + cos(middleAngle) * 230;
    var middleLineY = (windowHeight / 2) + sin(middleAngle) * 230;
    middleAngle += middleSpeed;

    var outterLineX = (windowWidth / 2) + cos(outterAngle) * 430;
    var outterLineY = (windowHeight / 2) + sin(outterAngle) * 430;
    outterAngle += outterSpeed;


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

    // OUTTER ORBIT
    ellipse(outterLineX, outterLineY, 100, 100);
    noFill();
    stroke(255, 102, 0);
    xOutteroff = xOutteroff + 0.06;
    let outterOrbitLine = noise(xOutteroff) * 15;
    strokeWeight(outterOrbitLine);
    ellipse(windowWidth / 2, windowHeight / 2, 850, 850);
    fill(255, 102, 0);


    // FAR-OUTTER ORBIT
    // ellipse(outterFarLineX, outterFarLineY, 100, 100);
    // noFill();
    // stroke(255, 102, 0);
    // xFarOutteroff = xFarOutteroff + 0.06;
    // let faroutterOrbitLine = noise(xOutteroff) * 15;
    // strokeWeight(faroutterOrbitLine);
    // ellipse(windowWidth / 2, windowHeight / 2, 1050, 1050);
    // fill(255, 102, 0);

    //  CENTER 
    ellipse(windowWidth / 2, windowHeight / 2, 100, 100);


}