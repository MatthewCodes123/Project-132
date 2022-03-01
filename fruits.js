cheeseStatus = ""

function preload() {
    img = "bed_room.jpg"
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelNotLoaded)
    document.getElementById("status").innerHTML = "Status: Object Detecting"
}

function modelNotLoaded() {
    console.log("Model Loaded")
    cheeseStatus = true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    console.log(results)
    objects = results
}