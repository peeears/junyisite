window.onload = function () {
  console.log("!");
  const imgContainer = document.querySelector(".worksImg");
  imgContainer.addEventListener("wheel", function (event) {
    if (!event.deltaY) return;
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  });
};

(function showIndex() {
  const index_Btn = document.getElementById("index");
  const indexWrapper = document.querySelector(".textwrapper");
  index_Btn.addEventListener("click", function () {
    indexWrapper.toggleAttribute("hidden");
    index_Btn.classList.toggle("wavy");
  });
})();
