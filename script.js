function toggleSocialIcons() {
  var rotateImage = document.querySelector(".rotate-image");
  var iconsOverlay = document.getElementById("social-icons-overlay");
  
  rotateImage.classList.toggle("clicked");
  iconsOverlay.classList.toggle("clicked");
}
