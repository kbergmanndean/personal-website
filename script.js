let i=0;
let slides=[];
let time=3500;
let captions=[];
let artist=document.getElementById("artist")

slides[0]="wyeth.jpeg"
slides[1]="darger.jpeg"
slides[2]="basquiat.jpg"
slides[3]="bruegel.jpeg"
captions[0]="Andrew Wyeth"
captions[1]="Henry Darger"
captions[2]="Jean-Michel Basquiat"
captions[3]="Pieter Bruegel the Elder"

function nextSlide(){
    document.slide.src=slides[i];
    artist.textContent=captions[i]
    if(i<slides.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("nextSlide()",time);
}

window.onload=nextSlide;

const place=document.getElementById("thePlace");
const end=document.getElementById("end");

let x=1;
function switchImg() {
    if(x===1) {
        place.src="place2.jpg";
        x++;
    } else if (x===2) {
        place.src="place3.jpg";
        x++;
    } else if (x===3) {
        place.src="place4.jpg";
        end.textContent="That's it!";
    }
}









