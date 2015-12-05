document.getElementById("published").addEventListener("click",click);
document.getElementById("inprogress").addEventListener("click",click);
document.getElementById("popular").addEventListener("click",click);
document.getElementById("submit").addEventListener("click",addToPage);
document.getElementById("create_profile").addEventListener("click",create);
var story = document.getElementById("story");
var userstories = document.getElementById("p");
var para = document.getElementsByTagName('p');
var title = document.getElementById("myModalLabel");
var start = document.getElementById("start");
var create = document.getElementById("create");
var entry = document.getElementsByClassName("entry");

for(var i = 0; i < entry.length; i++) {
    entry[i].onchange = responsiveInput;
}

function create() {
    var password_warning = this.parentNode.getElementsByClassName("password_warning");
   console.log(password_warning);
   password_warning[0].visibility = 
    if (entry[2].value != entry[3].value) {
        // password_warning[0].className = "";
    }

}

function responsiveInput() {
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




