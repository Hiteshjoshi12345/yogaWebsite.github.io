function myFunction() {
    setTimeout(function () {
        var loader = document.getElementById('loading');
        loader.style.display = "none";
    }, 3000);
}
myFunction();
