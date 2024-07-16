
let addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', () => {
    let itemInput = document.getElementById('item');
    let quantityInput = document.getElementById('quantity');
    let unitPriceInput = document.getElementById('unit-price');

    let item = itemInput.value;
    let quantity = quantityInput.value;
    let unitPrice = unitPriceInput.value;
    console.log(quantityInput.value * unitPriceInput.value) ;

    let itemsTableBody = document.getElementById('items-table-body');
    let newRow = itemsTableBody.insertRow();

    let itemCell = newRow.insertCell();
    let quantityCell = newRow.insertCell();
    let unitPriceCell = newRow.insertCell();
    let totalCell = newRow.insertCell();

    totalCell.textContent = quantity * unitPrice;
    itemCell.textContent = item;
    quantityCell.textContent = quantity;
    unitPriceCell.textContent = unitPrice;


    // Limpar os campos de entrada
    itemInput.value = '';
    quantityInput.value = '';
    unitPriceInput.value = '';
});