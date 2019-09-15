class UIclass {
    constructor() {
        this.equipment = document.getElementById('equipment');
    }

    showPlayer(player) {
        // we gonna insert some text into the div
        this.equipment.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="../img/${player[0].id}.jpg">
            <a href="${player[0].url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-pill badge-primary">Brand ID Repos: ${player[0].brandId}</span>
            <span class="badge badge-pill badge-secondary">Equipment ID: ${player[0].id}</span>
            <span class="badge badge-pill badge-success">Dimensions: ${player[0].dimensions}</span>
            <span class="badge badge-pill badge-info">Weight: ${player[0].weight}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><span style="color:red">Company: </span> ${player[0].brandName}</li>
              <li class="list-group-item"><span style="color:red">Name: </span> ${player[0].name}</li>
              <li class="list-group-item"><span style="color:red">Inputs: </span> ${player[0].inputs}</li>
              <li class="list-group-item"><span style="color:red">Outputs: </span> ${player[0].outputs}</li>
              <li class="list-group-item"><span style="color:red">USB: </span> ${player[0].usb}</li>
              <li class="list-group-item"><span style="color:red">Play Format: </span> ${player[0].playFormat}</li>
              <li class="list-group-item"><span style="color:red">File Support: </span> ${player[0].fileSupport}</li>
            </ul>
          </div>
        </div>
    `;
    } 

    showMixer(mixer) {
      // we gonna insert some text into the div
      this.equipment.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${mixer[0].id}.jpg">
          <a href="${mixer[0].url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID Repos: ${mixer[0].brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${mixer[0].id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${mixer[0].dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${mixer[0].weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${mixer[0].brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${mixer[0].name}</li>
            <li class="list-group-item"><span style="color:red">Inputs: </span> ${mixer[0].inputs}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${mixer[0].outputs}</li>
            <li class="list-group-item"><span style="color:red">USB: </span> ${mixer[0].usb}</li>
            <li class="list-group-item"><span style="color:red">Channels: </span> ${mixer[0].channels}</li>
            <li class="list-group-item"><span style="color:red">Effects: </span> ${mixer[0].effects}</li>
          </ul>
        </div>
      </div>
    `;
    }  
    
    showController(controller) {
      // we gonna insert some text into the div
      this.equipment.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${controller[0].id}.jpg">
          <a href="${controller[0].url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID Repos: ${controller[0].brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${controller[0].id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${controller[0].dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${controller[0].weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${controller[0].brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${controller[0].name}</li>
            <li class="list-group-item"><span style="color:red">Inputs: </span> ${controller[0].inputs}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${controller[0].outputs}</li>
            <li class="list-group-item"><span style="color:red">USB: </span> ${controller[0].usb}</li>
            <li class="list-group-item"><span style="color:red">Channels: </span> ${controller[0].channels}</li>
            <li class="list-group-item"><span style="color:red">Effects: </span> ${controller[0].effects}</li>
            <li class="list-group-item"><span style="color:red">Hot Cues: </span> ${controller[0].hotCues}</li>
            <li class="list-group-item"><span style="color:red">Software: </span> ${controller[0].software}</li>
          </ul>
        </div>
      </div>
    `;
    }    
    
    showTurntable(turntable) {
      // we gonna insert some text into the div
      this.equipment.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${turntable[0].id}.jpg">
          <a href="${turntable[0].url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID Repos: ${turntable[0].brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${turntable[0].id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${turntable[0].dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${turntable[0].weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${turntable[0].brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${turntable[0].name}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${turntable[0].outputs}</li>
            <li class="list-group-item"><span style="color:red">Arm: </span> ${turntable[0].arm}</li>
            <li class="list-group-item"><span style="color:red">Motor: </span> ${turntable[0].motor}</li>
            <li class="list-group-item"><span style="color:red">Torque: </span> ${turntable[0].torque}</li>
          </ul>
        </div>
      </div>
    `;
    }     

    showAlert(message, className) {
        // If we don't do this, it will be show in a loop, so we need to clear any remaining alerts
        this.clearAlert();

        const div = document.createElement('div');

        div.className = className;

        // Add text to the div
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert to above search class
        container.insertBefore(div, search);

        // Timeout after 2 second
        setTimeout( () => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            console.log('Remaining alert deleted!')
            currentAlert.remove();
        }
    }

    clearEquipment() {
        this.equipment.innerHTML = ``;
    }
}