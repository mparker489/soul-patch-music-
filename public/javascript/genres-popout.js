document.getElementById("dropdown-button").addEventListener("click", openNav);
document.getElementById("close-button").addEventListener("click", closeNav);

function openNav(evt){
    evt.preventDefault();
    document.querySelector(".pop-out").classList.remove("close");
    console.log("yay");
}
function closeNav(evt){
    evt.preventDefault();
    document.querySelector(".pop-out").classList.add("close");
    console.log("yay");
}