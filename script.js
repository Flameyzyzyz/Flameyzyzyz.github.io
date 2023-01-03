function toggleNav() {
    if (document.getElementById("sidepanel").style.left == "0%"){
        document.getElementById("menubtn").style.left = "0px";
        document.getElementById("sidepanel").style.left = "-100%";
    } else {
        document.getElementById("sidepanel").style.left = "0%";
        document.getElementById("menubtn").style.left = "188px";
    }
}