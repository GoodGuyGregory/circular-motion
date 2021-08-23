//  Variables:
var button;
let middleOrbit;
let backgroundColor;
let changedStatus;

// Noise offset
let xMiddleoff = 0.2;
let xOutteroff = 0.6;
let xFarOutteroff = 0.4;

// Speeds

var middleAngle = .95;
var middleSpeed = 0.02;
var outterAngle = .48;
var outterSpeed = 0.004;
var faroutterAngle = .62;
var faroutterSpeed = 0.007;



function setup() {
    createCanvas(windowWidth, windowHeight);
    //  creates button
    button = createImg('adjusttone.png', 'adjust view color button');
    button.position(15, 15);
    button.mousePressed(changeColor);

    changedStatus = false;

}

function changeColor() {
    changedStatus = !changedStatus;
}


function draw() {
    let darkColor = 'rgba(45%,0%,90%,0.06)'

    if (!changedStatus) {
        backgroundColor = 'rgba(100%,100%,100%,0.06)'
        background(backgroundColor);
    } else {
        background(darkColor);
    }



    var middleLineX = (windowWidth / 2) + cos(middleAngle) * 230;
    var middleLineY = (windowHeight / 2) + sin(middleAngle) * 230;
    middleAngle += middleSpeed;

    var outterLineX = (windowWidth / 2) + cos(outterAngle) * 430;
    var outterLineY = (windowHeight / 2) + sin(outterAngle) * 430;
    outterAngle += outterSpeed;

    var faroutterLineX = (windowWidth / 2) + cos(faroutterAngle) * 630;
    var faroutterLineY = (windowHeight / 2) + sin(faroutterAngle) * 630;
    faroutterAngle += faroutterSpeed;


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
    ellipse(faroutterLineX, faroutterLineY, 100, 100);
    noFill();
    stroke(255, 102, 0);
    xFarOutteroff = xFarOutteroff + 0.06;
    let faroutterOrbitLine = noise(xFarOutteroff) * 15;
    strokeWeight(faroutterOrbitLine);
    ellipse(windowWidth / 2, windowHeight / 2, 1250, 1250);
    fill(255, 102, 0);

    //  CENTER 
    ellipse(windowWidth / 2, windowHeight / 2, 120, 120);


}