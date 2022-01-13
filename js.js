const tabs = document.querySelector(".slide-wrapper");
const tabButton = document.querySelectorAll(".js-btn");
const contents = document.querySelectorAll(".slider-item");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {

      btn.classList.remove("current");
    });
    e.target.classList.add("current");

    contents.forEach(content => {
    content.classList.remove("slide-current");
    });

    const element = document.getElementById(id);
    element.classList.add("slide-current");
  }
}
