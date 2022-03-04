//-== HamburgerMenu Toggle
(function(){
    function hamburgueToggle() {
        document.getElementById('hamb').classList.toggle('open');
        document.getElementById('header-main').classList.toggle('open');
    }
    
    // Select all the elements with example class.
    var hambComponent = document.querySelectorAll('.hamb');
    var itemNavComponent = document.querySelectorAll('.itemNav');
    
    // Loop through the elements.
    for (var i = 0; i < hambComponent.length; i++) {
        hambComponent[i].addEventListener('click', hamburgueToggle);
    }
    for (var i = 0; i < itemNavComponent.length; i++) {
        itemNavComponent[i].addEventListener('click', hamburgueToggle);
    }
})();
//======================== /HamburgerMenu Toggle