let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let menu = document.getElementById("menu");

const open = openBtn.addEventListener("click", function () {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  menu.style.display = "block";
menu.setAttribute("transition-style", "in:custom:circle-swoop");

  console.log(menu);
});
const close = closeBtn.addEventListener("click", function () {
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
menu.style.display = "none";
 menu.setAttribute("transition-style", "out:custom:circle-swoop");
  console.log(menu);
});
