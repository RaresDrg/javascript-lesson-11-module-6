/*Task 2 - Create several buttons based on an array of objects using createElement:

  1. Iterate through the array of colors using a loop
  2. Create a button
  3. Set the background color of the button
  4. Set the text of the button
  5. Add a button to the document
*/

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

const containerEl = document.querySelector("#container");
console.dir(containerEl);

const divFor = document.createElement("div");
const divForOf = document.createElement("div");
const divForEach = document.createElement("div");
const divMap = document.createElement("div");
const divInnerHTML = document.createElement("div");
const divInsertAdjacentHTML = document.createElement("div");
containerEl.append(divFor, divForOf, divForEach, divMap, divInnerHTML, divInsertAdjacentHTML);

// *for //
for (let i = 0; i < colors.length; i++) {
  const button = document.createElement("button");
  divFor.append(button);
  button.textContent = colors[i].label;
  button.style.backgroundColor = colors[i].color;
  button.style.margin = "10px";
}

// *for...of //
for (const color of colors) {
  const { label: colorLabel, color: colorName } = color;
  const button = document.createElement("button");
  divForOf.append(button);
  button.textContent = colorLabel;
  button.style.backgroundColor = colorName;
  button.style.margin = "10px";
}

// *forEach //
colors.forEach(({ label, color }) => {
  const button = document.createElement("button");
  divForEach.append(button);
  button.textContent = label;
  button.style.backgroundColor = color;
  button.style.margin = "10px";
});

// *map //
colors.map(({ label, color }) => {
  const button = document.createElement("button");
  divMap.append(button);
  button.textContent = label;
  button.style.backgroundColor = color;
  button.style.margin = "10px";
});

// *innerHTML / insertAdjacentHTML //
const markup = colors
  .map(
    ({ label, color }) =>
      `<button style="background-color: ${color}; margin: 10px;">${label}</button>`
  )
  .join("");
console.log(markup);

divInnerHTML.innerHTML += markup;
divInsertAdjacentHTML.insertAdjacentHTML("afterbegin", markup);