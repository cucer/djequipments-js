// Inıt other js classes
const restapi = new RestApi();
const ui = new UIclass();

// Search input
const searchEquipment = document.getElementById("searchEquipment");

// Search input event listener
searchEquipment.addEventListener("keyup", e => {

    // Get input text
    const userText = e.target.value;

    if (userText !== "") {
        ui.clearEquipment(); // if we don't do that, it will append every search value of keyup 

        // Http call
        restapi.getEquipment(userText).then(data => {
            //return a promise
            console.log("data:", data);
            console.log("players length:", data.players.length);
            console.log("mixers length:", data.mixers.length);
            console.log("controllers length:", data.controllers.length);
            console.log("turntables length:", data.turntables.length);

            // We will search all equipment types, so we can not use "if else" conditions but instead of that we must check with "if" condition step by step
            // You need to use "innerHtml +=" in ui.js
            if (data.players.length != 0) {
                console.log('TEST1');
                ui.showPlayer(data.players);
            }

            if (data.mixers.length != 0) {
                console.log('TEST2');
                ui.showMixer(data.mixers);
            }

            if (data.controllers.length != 0) {
                console.log('TEST3');
                ui.showController(data.controllers);
            }

            if (data.turntables.length != 0) {
                console.log('TEST4');
                ui.showTurntable(data.turntables);
            }

            /*
            if (data.players.length != 0) {
                ui.showPlayer(data.players);
            } else if (data.mixers.length != 0) {
                ui.showMixer(data.mixers);
            } else if (data.controllers.length != 0) {
                ui.showController(data.controllers);
            } else if (data.turntables.length != 0) {
                ui.showTurntable(data.turntables);
            } else { // we dont need that condition
                ui.showAlert("Equipment not found!", "alert alert-dismissible alert-danger"); //second one is a class name
            }
            */
        });
    } else {
        ui.showAlert("Enter something dude!", "alert alert-dismissible alert-danger"); //second one is a class name
        ui.clearEquipment();
    }
});