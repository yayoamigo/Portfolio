function mobileMenu() {
 if (document.getElementById("Purple").style.display == "none") {
  document.getElementById("Purple").style.display = "flex";
 } else {
  document.getElementById("Purple").style.display = "none"
 }
}
document.getElementById("hamb-btn").addEventListener("click", mobileMenu)
document.getElementById("close").addEventListener("click", mobileMenu)

let anchorElm = document.querySelectorAll(".pop-window");
for(let elem of anchorElm) {
 elem.addEventListener("click", mobileMenu)
}
