Webcam.set({
    width: 350,
    height:350,
    image_format: 'png' ,
    png_quality:90
}) ;

camera = document.getElementById("camera");

Webcam.attach('#camera') ;

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="resultImage" src='+data_uri+' >' ;
    }) ;
}

console.log("ml5 version is:" + ml5.version) ;
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json' , modelLoaded) ;

function modelLoaded() {
    console.log("Model is loaded now!") ;
}

function identifyEmotion()
{
    image = document.getElementById("resultImage") ;
    classifier.classify(image, identify) ;  
}

function identify(error, result) {
    if(error) {
        console.error;
    }
    else{
        console.log(result) ;
        document.getElementById("emotion_name_1").innerHTML = result[0].label ;
        document.getElementById("emotion_name_2").innerHTML = result[1].label ;
        document.getElementById("emotion_name_3").innerHTML = result[2].label;
        result0 = result[0].label;
        result1 = result[1].label ;
        result2 = result[2].label;
        if(result0=="happy") {
            document.getElementById("emoji_symbol_1").innerHTML = "&#128512;" ;
        }
        if(result0=="sad") {
            document.getElementById("emoji_symbol_1").innerHTML = "&#128533;" ;
        }
        if(result0=="angry") {
            document.getElementById("emoji_symbol_1").innerHTML = "&#128545;" ;
        }
        if(result1=="happy") {
            document.getElementById("emoji_symbol_2").innerHTML = "&#128512;" ;
        }
        if(result1=="sad") {
            document.getElementById("emoji_symbol_2").innerHTML = "&#128533;" ;
        }
        if(result1=="angry") {
            document.getElementById("emoji_symbol_2").innerHTML = "&#128545;" ;
        }
        if(result2=="happy") {
            document.getElementById("emoji_symbol_3").innerHTML = "&#128512;" ;
        }
        if(result2=="sad") {
            document.getElementById("emoji_symbol_3").innerHTML = "&#128533;" ;
        }
        if(result2=="angry") {
            document.getElementById("emoji_symbol_3").innerHTML = "&#128545;" ;
        }
        speak() ;
    }
}

function speak()
{
var synthesis = window.speechSynthesis;
var speak_1 = "The first prediction is " + result0 ;
var speak_2 = "The second prediction is " + result1;
var speak_3 = "And the final prediction is" + result2 ;
var utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2 + speak_3);
synthesis.speak(utterThis) ; 
}