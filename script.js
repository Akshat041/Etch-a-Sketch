"use strict";

const container = document.querySelector(".grid-container");
const popup = document.querySelector(".popup-btn");
const reset = document.querySelector(".reset");

const gridMaker = function (size = 16) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const grid_item = document.createElement("div");
      grid_item.classList.add("grid-item");
      container.appendChild(grid_item);
    }
  }

  container.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${size}, ${
      800 / size
    }px); grid-template-rows: repeat(${size}, ${
      800 / size
    }px); width: 800px; border: 1px solid black; box-sizing: content-box; margin: 20px auto`
  );

  const items = document.querySelectorAll(".grid-item");

  items.forEach((item) => {
    item.setAttribute("style", `border: 1px solid black`);
    item.addEventListener("mouseover", () => {
      item.setAttribute("style", "background-color: black");
    });
  });
};

popup.addEventListener("click", () => {
  const grid_size = Number(prompt("Enter new grid size"));
  if (grid_size <= 100) {
    container.innerHTML = "";
    gridMaker(grid_size);
  } else alert("Please enter size between less than 100");
});

reset.addEventListener("click", () => {
  const items = document.querySelectorAll(".grid-item");

  items.forEach((item) => {
    item.setAttribute("style", `background: null; border: 1px solid black`);
  });
});

gridMaker();
