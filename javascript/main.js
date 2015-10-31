var published = document.getElementById("published");
var inprogress = document.getElementById("inprogress");
var popular = document.getElementById("popular");
var submit = document.getElementById("submit");
var story = document.getElementById("story");
var userstories = document.getElementById("p");
var para = document.getElementsByTagName('p');
var title = document.getElementById("myModalLabel");
var start = document.getElementById("start");
var create = document.getElementById("create");
var entry = document.getElementsByClassName("entry");

published.addEventListener("click",click);
inprogress.addEventListener("click",click);
popular.addEventListener("click",click);
submit.addEventListener("click",addToPage);
console.log(entry);

for(var i = 0; i < entry.length; i++) {
    entry[i].onchange = responsiveInput;
}


function responsiveInput() {
    console.log(this.value);
    var row = this.parentNode.parentNode;
    var javaS = row.getElementsByTagName("p");
    javaS[0].innerHTML = this.value;
}
function addToPage() {
    var d = 0;
    if(story.value == "") {
        alert("You have to enter some text to post your story!");
    }
    else {
        for(var i = 0; i < 10; i++) {
            if(para[i].innerHTML == "") {
                para[i].innerHTML = story.value;
                p.className = "";
                story.value = "";
                break;
            }
        }
    }
}

function click() {
    // ideally they would not load different webpages but show the relevant content
}

function editTitle() {

}




