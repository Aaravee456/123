function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}
  
  function preload() {
  }
  
  function modelLoaded() {
    console.log("Ml5 has loaded!");
}

var last_image = " ";

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    if((results[0].confidence > 0.5) && (last_image != results[0].label)) {
      console.log(results);
      previous_result = results[0].label;
      document.getElementById("object_name").innerHTML = results[0].label;
      document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
  }
}