var openButton = document.getElementById("menu-opn-btn");
var closeButton = document.getElementById("menu-cls-btn");
var targetDiv = document.getElementById("mob-menu");
var backdropDiv = document.getElementById("backdrop");

openButton.addEventListener("click", function() {
    targetDiv.classList.add("is-open");
});

closeButton.addEventListener("click", function() {
    targetDiv.classList.remove("is-open");
});

var openButtonModal = document.getElementById("subscribe-btn");
var closeButtonModal = document.getElementById("modal-cls-btn");
var targetDivModal = document.getElementById("modal");

openButtonModal.addEventListener("click", function () {
    targetDivModal.classList.add("is-open");
    backdropDiv.classList.add("backdrop-is-open");
});

closeButtonModal.addEventListener("click", function() {
    targetDivModal.classList.remove("is-open");
    backdropDiv.classList.remove("backdrop-is-open");
});