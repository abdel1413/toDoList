const inputText = document.querySelector(".input-text");
const inputDate = document.querySelector(".input-date");
const addBtn = document.querySelector(".add-btn");
const container = document.querySelector(".container-el");

//const todoListArray = ["youtube", "read"];
const todoListArray = [
  {
    name: "youtube",
    date: "2024-08-30",
  },
  {
    name: "read",
    date: "2024-08-30",
  },
];

function render() {
  let inputString = "";
  for (let i = 0; i < todoListArray.length; i++) {
    inputString += `<p>
    ${todoListArray[i].name} ${todoListArray[i].date}
    <button onclick="deleteElement()">Delete</button>
    </p>`;
  }

  container.innerHTML = inputString;
}
render();
function addElement() {
  console.log("you added value", inputDate.value);
  todoListArray.push({
    name: `${inputText.value}`,
    date: `${inputDate.value}`,
  });

  render();
  inputText.value = "";
}
