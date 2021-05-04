let i=0;
let slides=[];
let time=4000;

slides[0]="wyeth.jpeg"
slides[1]="darger.jpeg"

function nextSlide(){
    document.slide.src=slides[i];
    if(i<slides.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("nextSlide()",time);
}

window.onload=nextSlide;



