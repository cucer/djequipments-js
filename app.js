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
            console.log('players length:', data.players.length);
            console.log('mixers length:', data.mixers.length);
            console.log('controllers length:', data.controllers.length);
            console.log('turntables length:', data.turntables.length);
            
            if(data.players.length === 1) { 
                ui.showPlayer(data.players)            
            } else if (data.mixers.length === 1) {
                ui.showMixer(data.mixers)
            } else if (data.controllers.length === 1) {
                ui.showController(data.controllers)
            } else if (data.turntables.length === 1) {
                ui.showTurntable(data.turntables)
            } else { //if entered equipment doesn't exist
                ui.showAlert('Equipment not found!', 'alert alert-dismissible alert-danger'); //second one is a class name
            }
        }) 
    } else { //if entered user is null
        ui.clearEquipment();
    }
});