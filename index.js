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
    // console.log(todoListArray[i], i);
    const html = `
    <div class="name-div">${todoListArray[i].name} </div> 
    <div class="date-div">${todoListArray[i].date} </div>
        <button onclick="
        deleteElement(${i})
        "
        class="delete-btn"
        >Delete
        </button>
    `;
    inputString += html;
  }
  container.innerHTML = inputString;
}
render();

function addElement() {
  todoListArray.push({
    name: `${inputText.value}`,
    date: `${inputDate.value}`,
  });

  render();
  inputText.value = "";
}

function deleteElement(index) {
  console.log(todoListArray[index]);
  todoListArray.splice(index, 1);
  render();
}
