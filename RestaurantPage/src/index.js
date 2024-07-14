import loadHome from "./modules/loadHome.js";
import loadAbout from "./modules/loadAbout.js";
import loadMenu from "./modules/loadMenu.js";
import "./style.css";

if (typeof document !== null) {
  const homeButton = document.querySelector(".home-button");
  const menuButton = document.querySelector(".menu-button");
  const aboutButton = document.querySelector(".about-button");

  homeButton.addEventListener(onclick, loadHome);
  menuButton.addEventListener(onclick, loadMenu);
  aboutButton.addEventListener(onclick, loadAbout);

  loadHome();
}
