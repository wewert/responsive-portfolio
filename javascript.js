function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav_links") {
    x.className += " responsive";
  } else {
    x.className = "nav_links"
  }
}
