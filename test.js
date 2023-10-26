document.getElementById("button").addEventListener('click', changeColor);

function changeColor() {
    const element = document.getElementById("body");
    const list = element.classList;
    list.remove("bodyFlex")
    return alert("hej");
}