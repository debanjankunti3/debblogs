function myFunction(x) {
    if (x.matches) {
        document.querySelector(".max-width-1").classList.remove("max-width-1");
        document.querySelector(".max-width").classList.remove("max-width");
    }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x)
x.addListener(myFunction)

