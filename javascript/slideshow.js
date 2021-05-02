/*

Assignment: CA2
Purpose: Main slideshow for index.html page

*/

var allFigures = document.getElementsByClassName("mySlides");
var currentFigure = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var dots = document.getElementsByClassName("dot");
var currentDot;


/* 
----------------------------------------------------------------------------------
Navigation
*/
var slideNavControl = document.getElementsByClassName('.slideNavControl');
for(var i = 0; i < slideNavControl.length; i++){
	slideNavControl[i].style.display = 'inline-block';
}

//For Onclick event
function getPreviousFigure() {
    previousFigure();
    pauseSlide();
}

function getNextFigure() {
    nextFigure();
    pauseSlide();
}


function getSlide(n){
    allFigures[currentFigure].className = 'my-0 mySlides';
    dots[currentFigure].className = "dot d-inline-block";
	currentFigure = (n + allFigures.length) % allFigures.length;
    allFigures[currentFigure].className = 'my-0 mySlides showing';
    dots[currentFigure].className = "dot d-inline-block active";


}


//Go back to previous image. If the index is less than the 1 , reset to the last image.
function previousFigure() {

    getSlide(currentFigure-1);

}

//Go to next image. If the index is larger than total image, reset to 1.
function nextFigure() {

    getSlide(currentFigure+1);

}

/* 
----------------------------------------------------------------------------------
Display controls, Animations
*/


var playing = true;
var pauseButton = document.getElementById('pause');
var slideInterval = setInterval(nextFigure, 5000);

function pauseSlide(){
	pauseButton.innerHTML = '&#9658;'; // play character
	playing = false;
	clearInterval(slideInterval);
}

function playSlide(){
	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	playing = true;
	slideInterval = setInterval(nextFigure, 5000);
}

function getPauseFigure() {
    if (playing) {
        pauseSlide();
    } else {
        playSlide();
    }
}