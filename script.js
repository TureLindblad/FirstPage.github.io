document.getElementById("button").addEventListener('click', changeColor);

function changeColor() {
    const element = document.getElementById("body");
    element.style.backgroundColor = "red";
    return alert("hej");
}