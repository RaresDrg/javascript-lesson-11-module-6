/*Task 1 - Create a list of technologies studied in the Fullstack course using js:

  1. Get container element
  2. Create a cycle for sorting array elements
  3. Create a li tag
  4. Write the text from the array inside the list items
  5. Place li inside ul
  6. Place ul tag with items on the page
*/

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node", ""];

const containerEl = document.querySelector("#container");
console.dir(containerEl);

const listEl = document.createElement("ul");
containerEl.append(listEl);

/*
  ^ ==> document.createElemenet (cases):
*/

// *1) for //
for (let i = 0; i < technologies.length; i++) {
  const li = document.createElement("li");
  li.textContent = technologies[i];
  listEl.append(li);
}

// *2) for...of //
for (const technology of technologies) {
  const li = document.createElement("li");
  li.textContent = technology;
  listEl.append(li);
};

// *3) forEach //
technologies.forEach((technology) => {
  const li = document.createElement("li");
  li.textContent = technology;
  listEl.append(li);
});

// *4) map //
technologies.map((technology) => {
  const li = document.createElement("li");
  li.textContent = technology;
  listEl.append(li);
})


/*
  ^ ==> innerHTML / insertAdjacentHTML :
*/

const markup = technologies
  .map((technology) => `<li>${technology}</li>`)
  .join("");

console.log(markup);

listEl.innerHTML += markup;  //! --> Atentie aici ! //
listEl.insertAdjacentHTML("beforeend", markup);