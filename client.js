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
}   // end addObject

function onReady(){
    $('#addObjectButton').on('click', addObject );
}