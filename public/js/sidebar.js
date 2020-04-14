function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("myHeader").style.marginLeft = "200px";
  document.getElementById("myHeader").style.marginRight = "0px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("myHeader").style.marginLeft = "0";
  document.getElementById("logoHeader").style.marginRight = "0";
}

