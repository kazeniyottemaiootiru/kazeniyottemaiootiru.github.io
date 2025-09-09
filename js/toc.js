document.addEventListener("DOMContentLoaded", function () {
  const toc = document.querySelector(".post-toc");
  const btn = document.querySelector(".toc-collapse");

  if (toc && btn) {
    btn.addEventListener("click", () => {
      toc.classList.toggle("collapsed");
    });
  }
});
