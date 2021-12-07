let title = document.getElementById("Title");

title.addEventListener("mouseenter", function (event) {
    event.target.style.color = "purple";
});

setTimeout(function(event) {
    event.target.style.color = "";
})