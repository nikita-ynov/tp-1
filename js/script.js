let imageContainer = document.getElementById('images')
let img = document.getElementById('img')
let modal = document.getElementById('modal')
let modalImage = document.getElementById('modal-image')
// imageContainer.onclick = function (el) {
//     console.log(el);
// }

let imageUrl = null;

imageContainer.onclick = function (el) {
    console.log(1);
    
    modalImage.src = el.target.src
    modal.classList.add('active')
}

modal.onclick = function (el) {
    modal.classList.remove('active')
}