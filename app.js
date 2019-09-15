// Inıt other js classes
const restapi = new RestApi;
const ui = new UIclass;

// Search input
const searchEquipment = document.getElementById('searchEquipment');

// Search input event listener
searchEquipment.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') { //if entered equipment is not null
        console.log('Input:' + userText);
        // Http call
        restapi.getEquipment(userText)
        .then(data => {//return a promise
            console.log('data:',data)
            if(data.eq.length === 0) { //if entered equipment doesn't exist
                ui.showAlert('Equipment not found!', 'alert alert-dismissible alert-danger'); //second one is a class name
            } else {
                ui.showEquipment(data.eq)
            }
        }) 
    } else { //if entered user is null
        ui.clearEquipment();
    }
});