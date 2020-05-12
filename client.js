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
    $('#searchButton').on('click', search);
}

function search(){
    console.log('in search');
    // get user input
    let matches = [];
    // loop through the inventory
    for(let i=0; i<inventory.length; i++){
        const item = inventory[i];
        // save any matches
        if(item.color === $('#colorSearchIn').val() && item.size === $('#sizeSearchIn').val()){
            matches.push(item);
        } // end match
    } // end for 
    // display matches on DOM
        let el = $('#matchesOut');
        el.empty();
    // loop through matches
    for(let j=0; j<matches.length; j++){
        const item = matches[j];
      // display each in matchesOut ul
      el.append(`<li>${item.name}</li>`);
    } //end for
    
} // end search

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