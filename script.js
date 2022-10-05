const sidebar = document.querySelector(".sidebar");
const closeicon = document.querySelector(".menu-icon1");
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", openMenu);
function openMenu() {
  sidebar.classList.add("opensidebar");
alert ("working");
  
}
 menuIcon1.addEventListener("click", closeMenu);
function closeMenu() {
  sidebar.classList.remove("opensidebar");
  
}

