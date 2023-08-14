// import Swup from 'swup';
// const swup = new Swup();
var isOpen = true;

function toggleNav() {
    isOpen = !isOpen;
    if (isOpen){
        document.getElementById("sidebar").style.left = "0%";
        document.getElementById("sidemenu").style.left = "-300px";
    } else {
        document.getElementById("sidemenu").style.left = "0%";
        document.getElementById("sidebar").style.left = "-300px";
    }
}

function toggleSide() {
    if (document.getElementById("SidePanel").style.left == "-300px"){
        if (isOpen) {
            document.getElementById("sidebar").style.left = "0%";
        } else {
            document.getElementById("sidemenu").style.left = "0%";
        }
        document.getElementById("SidePanel").style.left = "0%";

        document.getElementById("hidebtn").style.left = "324px";
        document.getElementById("hideicon").src = "Icons/Hide.png";

        document.getElementById("swup").style.left = "300px";
    } else {
        document.getElementById("SidePanel").style.left = "-300px";
        
        document.getElementById("sidebar").style.left = "-300px";
        document.getElementById("sidemenu").style.left = "-300px";

        document.getElementById("hidebtn").style.left = "20px";
        document.getElementById("hideicon").src = "Icons/Show.png";
        
        document.getElementById("swup").style.left = "0%";
    }
}

function fadeMenu(fadeIn) {
    if (fadeIn) {
        var op = 0;
        document.getElementById("fademenu").style.right = "0%";
        var timer = setInterval(function () {
            if (op <= 1){
                document.getElementById("fademenu").style.right = "100%";
                clearInterval(timer);
            }
            document.getElementById("fademenu").style.opacity = op;
            document.getElementById("fademenu").style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 50);
        // document.getElementById("fademenu").style.display = "block";
    } else {
        var op = 1;
        document.getElementById("fademenu").style.right = "0%";
        var timer = setInterval(function () {
            if (op >= 0){
                document.getElementById("fademenu").style.right = "100%";
                clearInterval(timer);
            }
            document.getElementById("fademenu").style.opacity = op;
            document.getElementById("fademenu").style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
        // document.getElementById("fademenu").style.display = "none";
    }
}


// function enlargeImage(img) {
//     if (img.style.transform == "scale(1.5)"){
//         img.style.transform = "scale(1)";
//         img.style.transition = "transform 0.25s ease";
//     } else {
//         img.style.transform = "scale(1.5)";
//         img.style.transition = "transform 0.25s ease";
//     }
// }

// function getPics() {} //just for this demo
// const imgs = document.querySelectorAll('#column a img');
// const fullPage = document.querySelector('#fullpage');

// imgs.forEach(img => {
//   img.addEventListener('click', function() {
//     fullPage.style.backgroundImage = 'url(' + img.src + ')';
//     fullPage.style.display = 'block';
//   });
// });

// setTimeout(function (){
// }, 100)
