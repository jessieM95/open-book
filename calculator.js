var published = document.getElementById("published");
var inprogress = document.getElementById("inprogress");
var popular = document.getElementById("popular");
var submit = document.getElementById("submit");
var story = document.getElementById("story");
var userstories = document.getElementById("p");
var para = document.getElementsByTagName('p');
var title = document.getElementById("myModalLabel");

published.addEventListener("click",click);
inprogress.addEventListener("click",click);
popular.addEventListener("click",click);
submit.addEventListener("click",addToPage);

var stories = 0;

function click() {
    // ideally they would not load different webpages but show the relevant content
}

function editTitle() {

}

function addToPage() {
    var d = 0;
    if(story.value == "") {
        alert("You have to enter some text to post your story!");
    }
    else {
        console.log(story.value);
        for(var i = 0; i < 10; i++) {
            if(para[i].innerHTML == "") {
                para[i].innerHTML = story.value;
                p.className = "";
                story.value = "";
                break;
            }
        }
        console.log(para[0]);
    }

}