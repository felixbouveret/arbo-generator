//Write code here
let hello = "hey";

const blocks = document.querySelectorAll(".rootArbo li");
const lists = document.querySelectorAll(".rootArbo ul");
let listItems = [];
console.log(lists);

lists.forEach((list) => {
  let item = list.children;
  listItems.push(item);
  // let line = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // line.setAttribute("width", "100");
  // line.setAttribute("height", "100");
  // block.appendChild(line);
});
console.log(lists);
console.log(listItems);
