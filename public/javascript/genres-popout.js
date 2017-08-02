(function(){
    document.getElementsByClassName("dropdownbutton").addEventListener("click", openNav);
    document.getElementById("close-button").addEventListener("click", closeNav);

    function openNav(evt){
        evt.preventDefault();
        document.querySelector("#pop-out-nav").classList.remove("closed-nav");
    }
    function closeNav(evt){
        evt.preventDefault();
        document.querySelector("#pop-out-nav").classList.add("closed-nav");
    }
});