/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.left = "0%";
    document.getElementById("openbtn").style.transition = "0.5s";
    document.getElementById("openbtn").style.left = "-100%";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.left = "-100%";
    document.getElementById("openbtn").style.transition = "0.5s";
    document.getElementById("openbtn").style.left = "-5px";
  }
  