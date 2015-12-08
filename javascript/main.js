document.getElementById("published").addEventListener("click",click);
document.getElementById("inprogress").addEventListener("click",click);
document.getElementById("popular").addEventListener("click",click);
document.getElementById("submit").addEventListener("click",addToPage);
document.getElementById("create_profile").addEventListener("click",create);
document.getElementsByClassName("password_warning")[0].style.visibility = "hidden";
var story = document.getElementById("story");
var userstories = document.getElementById("p");
var paragraphs = document.getElementsByTagName("p");
var title = document.getElementById("myModalLabel");
var start = document.getElementById("start");
var create = document.getElementById("create");
var entry1 = document.getElementsByClassName("entry1");
var entry = document.getElementsByClassName("entry");

for(var i = 0; i < entry1.length; i++) {
    entry1[i].onchange = available;
}

for(var i = 0; i < entry.length; i++) {
    entry[i].onchange = responsiveInput;
}

function available() {
    var row = this.parentNode.parentNode;
    var response = row.getElementsByTagName("p")[0];
    response.innerHTML = 'Available!'
}

function responsiveInput() {
    var row = this.parentNode.parentNode;
    var response = row.getElementsByTagName("p")[0];
}

function create() {
    var password_warning = this.parentNode.getElementsByClassName("password_warning");
    if (entry[0].value === entry[1].value)
        password_warning[0].style.visibility = "hidden";

    else
        password_warning[0].style.visibility = "";
}

function addToPage() {
    var d = 0;
    if(story.value == "")
        alert("You have to enter some text to post your story!");

    else {
        for(var i = 0; i < 10; i++) {
            if (paragraphs[i].innerHTML == "") {
                paragraphs[i].innerHTML = story.value;
                console.log(story.value);
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




