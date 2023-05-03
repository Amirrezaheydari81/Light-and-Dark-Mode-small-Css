// Get the container element
var btnContainer = document.getElementById("DivInList");
let mode = document.getElementById("mode");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";

        if (this.textContent == "دارک") {
            document.body.style.colorScheme = "dark";
            mode.innerText = "دارک";
            console.log("dark");
        } else {
            document.body.style.colorScheme = "light"
            mode.innerText = "لایت";
            console.log("light");
        }
    });
}