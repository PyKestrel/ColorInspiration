function colorGenerator(){

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var gradient = 'linear-gradient(45deg, #' + randomColor + ',#' + randomColor2 + ')';
    var color = randomColor;
    var dom = document.getElementById("colorBox");

    dom.style.backgroundImage = gradient;
    document.getElementById("colorOne").innerHTML = "#" + randomColor;
    document.getElementById("colorTwo").innerHTML = "#" + randomColor2;
}