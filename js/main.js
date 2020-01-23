
var btn = document.getElementById("go-button");
function buttonClicked() {

    console.log("button clicked");
    btn.removeEventListener("click",buttonClicked);
    document.getElementById("text").innerHTML = "button clicked"
}





btn.addEventListener("click",buttonClicked);
