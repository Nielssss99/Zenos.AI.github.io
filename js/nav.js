function openNav() {
  const sidebar = document.getElementById("mySidebar");
  const mobileLogo = document.querySelector(".mobile-nav-bar .nav-image");

  // Open the sidebar
  sidebar.style.width = "250px"; 

  // Shift the logo to the right for visibility (adjust '50px' as needed)
  mobileLogo.style.marginLeft = "50px";
  mobileLogo.style.transition = "margin-left 0.5s"; // Smooth transition

  document.body.style.overflow = "hidden";
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  const mobileLogo = document.querySelector(".mobile-nav-bar .nav-image");

  // Close the sidebar
  sidebar.style.width = "0";

  // Reset the logo position
  mobileLogo.style.marginLeft = "0";

  document.body.style.overflow = "";
  document.getElementById("mySidebar").style.width = "0";
}