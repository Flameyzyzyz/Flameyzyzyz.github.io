function toggleNav() {
    if (document.getElementById("sidebar").style.left == "0%"){
        document.getElementById("sidemenu").style.left = "0%";
        document.getElementById("sidebar").style.left = "-100%";
    } else {
        document.getElementById("sidebar").style.left = "0%";
        document.getElementById("sidemenu").style.left = "-100%";
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
