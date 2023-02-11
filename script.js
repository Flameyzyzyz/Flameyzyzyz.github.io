function toggleNav() {
    if (document.getElementById("sidebar").style.left == "0%"){
        document.getElementById("sidemenu").style.left = "0px";
        document.getElementById("sidebar").style.left = "-100%";
    } else {
        document.getElementById("sidebar").style.left = "0%";
        document.getElementById("sidemenu").style.left = "-100%";
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
