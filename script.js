const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", openMenu);
function openMenu() {
  sidebar.classList.toggle("opensidebar");
  
}
