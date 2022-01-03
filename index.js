const croll = document.querySelectorAll('.collapsible');
const box = document.querySelector('.img-box');
const rotate = document.querySelectorAll('.arrow');

for (let i = 0; i < croll.length; i++) {
    croll[i].addEventListener("click", function () {
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            croll[i].style.fontWeight = null;
            box.style.left = null;
            rotate[i].style.transform = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            croll[i].style.fontWeight = "bold";
            box.style.left = "-530px";
            rotate[i].style.transform = "scaleY(-1)";
        }
    })
}
