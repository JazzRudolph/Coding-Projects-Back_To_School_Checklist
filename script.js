const ITEM_CONTAINER = document.getElementById("item"); // Get the container element by its ID
// This is the container where the items will be displayed
const ITEM_TEMPLATE = document.getElementById("itemTemplate"); // Get the template element by its ID
const ADD_BUTTON = document.getElementById("add"); // Get the button element by its ID

let items = getItems(); // Retrieve the items from local storage

function getItems() { // Retrieve the items from local storage
    // If no items are found, return an empty array
    const value = localStorage.getItem("checklist") || "[]";
    return JSON.parse(value);
}

function setitems(items) { // Save the items to local storage
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("checklist", itemsJson);
}

function addItem() { // Create a new item and add it to the list
    items.unshift({
        description: "",
        completed: false
    });

    setitems(items);
    refreshList();
}

function updateItem(item, key, value) {
    item[key] = value;
    setitems(items);
    refreashList();
}

function refreshList() {
    // Clear the current list

    ITEM_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        ITEM_CONTAINER.appendChild(itemElement);

    }
}

ADD_BUTTON.addEventListener('click', () => {
    addItem();
});

refreshList();