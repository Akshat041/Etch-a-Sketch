"use strict";

const container = document.querySelector(".grid-container");
const popup = document.querySelector(".popup-btn");
const reset = document.querySelector(".reset");
const shade = document.querySelector(".black");
const coloured = document.querySelector(".color");

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
    }px); grid-template-rows: repeat(${size}, ${800 / size}px)`
  );

  const items = document.querySelectorAll(".grid-item");

  items.forEach((item) => {
    item.setAttribute("style", `border: 1px solid black`);

    let r = 0,
      g = 0,
      b = 0;

    shade.addEventListener("click", () => {
      r = 0;
      g = 0;
      b = 0;
    });

    coloured.addEventListener("click", () => {
      r = Math.trunc(Math.random() * 255 + 1);
      g = Math.trunc(Math.random() * 255 + 1);
      b = Math.trunc(Math.random() * 255 + 1);
    });

    let o = 0.1;
    item.addEventListener("mouseover", () => {
      o = o + 0.1;
      item.setAttribute(
        "style",
        `background-color: rgba(${r}, ${g}, ${b}, ${o})`
      );
    });
  });
};

let grid_size;

popup.addEventListener("click", () => {
  grid_size = Number(prompt("Enter new grid size"));
  if (grid_size <= 100) {
    container.innerHTML = "";
    gridMaker(grid_size);
  } else alert("Please enter size between less than 100");
});

reset.addEventListener("click", () => {
  container.innerHTML = "";
  gridMaker(grid_size);
});

gridMaker();
