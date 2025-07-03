const ITEM_CONTAINER = document.getElementById("item");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("checklist") || "[]";
    return JSON.parse(value);
}

console.log(items);