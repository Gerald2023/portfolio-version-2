function toggleMenu(){
    //target the object
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //end
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}