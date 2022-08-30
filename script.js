/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    // document.getElementById("sidepanel").style.transition = "0.5s";
    // document.getElementById("menubtn").style.transition = "0.5s";
    // document.getElementById("menubtn").style.zIndex = "4";
    if (document.getElementById("sidepanel").style.left == "0%"){
        document.getElementById("menubtn").style.left = "0%";
        // setTimeout(function (){
            document.getElementById("sidepanel").style.left = "-100%";
        // }, 100)
    } else {
        document.getElementById("sidepanel").style.left = "0%";
        // setTimeout(function (){
            document.getElementById("menubtn").style.left = "188px";
        // }, 100)
    }
}
