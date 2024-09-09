//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap";

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const portfolioItems = document.querySelectorAll(".filter-by");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
