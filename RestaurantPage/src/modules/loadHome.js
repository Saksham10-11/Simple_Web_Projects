export default function loadHome() {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("home-container");

  const heading = document.createElement("h1");
  heading.classList.add("home-heading");
  heading.innerHTML = "Welcome to our Restraunt ...";
  container.appendChild(heading);

  const para = document.createElement("p");
  para.classList.add("home-para");
  para.innerHTML = "A place to satisfy all your cravings !!";
  container.appendChild(para);

  mainContainer.appendChild(container);
}
