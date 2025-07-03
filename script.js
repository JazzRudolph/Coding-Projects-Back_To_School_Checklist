const ITEM_CONTAINER = document.getElementById("item");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("checklist") || "[]";
    return JSON.parse(value);
}

function setitems(items) {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("checklist", itemsJson);
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });
}

console.log(items);