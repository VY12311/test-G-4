function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/v_sl95BzE/model.json',modelLoaded());
}

function modelLoaded() {
  console.log("Model loaded!")
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video,gotResult());
}

function gotResult(error, results) {
  if (error) {
    window.alert("Got error,Please try again");
    console.error(error);
  } else {
    window.alert("Sucessfully Identified");
    console.log(results);
    document.getElementById('result_object_name').innerHTML = results[0].label
    document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(3)
  }
}
