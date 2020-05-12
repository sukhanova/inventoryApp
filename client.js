$ (document).ready( onReady );
let inventory = [];
function addObject(){
    console.log('in addObject');
    // get user inputs and put in object
    const newObject = {
        color: $('#colorIn').val(),
        name: $('#nameIn').val(),
        size: $('#sizeIn').val()
    }
    // push object into inventory array
    inventory.push(newObject);
    console.log(inventory);
    // update items list
    showInventory();
}   // end addObject

function onReady(){
    $('#addObjectButton').on('click', addObject );
}

function showInventory(){
    let el = $('#inventoryOut');
    // empty target element
    el.empty();
    // loop through inventory and append each to the element
    for(let i = 0; i<inventory.length; i++){
        const item = inventory[i];
        el.append(`<li>${item.name}: ${item.size} & ${item.color}</li>`);
    } // end for
}