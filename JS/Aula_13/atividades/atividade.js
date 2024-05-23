let items = [];
const itemForm = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");
const totalList = document.getElementById("totalList");
const grandTotalElement = document.getElementById("grandTotal");

document.getElementById("addItemBtn").addEventListener("click", addItem);

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const itemQty = parseInt(document.getElementById("itemQty").value);
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);

  if (itemName && itemQty > 0 && itemPrice >= 0) {
    const item = { name: itemName, qty: itemQty, price: itemPrice };
    items.push(item);
    updateLists();
    itemForm.reset();
  }
}

function updateLists() {
  itemList.innerHTML = "";
  totalList.innerHTML = "";
  let grandTotal = 0;

  items.forEach((item, index) => {
    const itemTotal = item.qty * item.price;
    grandTotal += itemTotal;

    const listItem = document.createElement("li");
    listItem.className = "list-group-item list-item";
    listItem.innerHTML = `${item.name} - ${item.price.toFixed(2)} 
                              <div>
                                <button class="btn btn-success btn-sm mx-1" onclick="changeQty(${index}, 1)">+</button>
                                <button class="btn btn-warning btn-sm mx-1" onclick="changeQty(${index}, -1)">-</button>
                                <button class="btn btn-danger btn-sm mx-1" onclick="removeItem(${index})">X</button>
                              </div>`;
    itemList.appendChild(listItem);

    const totalItem = document.createElement("li");
    totalItem.className = "list-group-item list-item";
    totalItem.innerHTML = `${item.qty} ${item.name} - ${itemTotal.toFixed(2)}`;
    totalList.appendChild(totalItem);
  });

  const totalItem = document.createElement("li");
  totalItem.className = "list-group-item list-item font-weight-bold";
  totalItem.innerHTML = `Total Geral: ${grandTotal.toFixed(2)}`;
  totalList.appendChild(totalItem);

  grandTotalElement.textContent = `Total Geral: ${grandTotal.toFixed(2)}`;
}

function changeQty(index, change) {
  if (items[index].qty + change > 0) {
    items[index].qty += change;
    updateLists();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  updateLists();
}
