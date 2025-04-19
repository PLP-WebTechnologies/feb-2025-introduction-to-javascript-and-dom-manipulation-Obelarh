const title = document.getElementById("title");
title.textContent = "Welcome to Benue State University";
title.style.fontSize = "50px";

const text = document.getElementById("text");
text.style.color = "blue";
text.style.fontSize = "30px";

const text2 = document.getElementById("text2");
text2.style.color = "red";
text2.style.fontSize = "20px";

const list = document.getElementById("list");
const addButton = document.getElementById("add");

addButton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = "New Item";
    list.appendChild(listItem);
})