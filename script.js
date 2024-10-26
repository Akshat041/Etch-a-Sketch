"use strict";

const container = document.querySelector(".grid-container");

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
  });
};

gridMaker();
