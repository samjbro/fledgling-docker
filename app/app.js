require("file-loader?name=index.html!./index.html");
var hello = document.getElementById("root");
hello.innerHTML = "Yes mama!";