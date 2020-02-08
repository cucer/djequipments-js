class UIclass {
  constructor() {
    this.equipment = document.getElementById("equipment");
  }

  // Player function is a PILOT function, you can find 3 method below
  showPlayer(player) {

    // Method 1
    player.forEach(element =>
      this.equipment.innerHTML += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${element.id}.jpg">
          <a href="${element.url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID: ${element.brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${element.id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${element.dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${element.weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${element.brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${element.name}</li>
            <li class="list-group-item"><span style="color:red">Inputs: </span> ${element.inputs}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${element.outputs}</li>
            <li class="list-group-item"><span style="color:red">USB: </span> ${element.usb}</li>
            <li class="list-group-item"><span style="color:red">Play Format: </span> ${element.playFormat}</li>
            <li class="list-group-item"><span style="color:red">File Support: </span> ${element.fileSupport}</li>
          </ul>
        </div>
      </div>
      <br/>
      <br/> `
    );

    /* Method 2 (We can use for loop method instead of forEach)
    for (var i = 0; i < player.length; i++) {
      console.log(i);
      this.equipment.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${player[i].id}.jpg">
          <a href="${player[i].url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID: ${player[i].brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${player[i].id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${player[i].dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${player[i].weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${player[i].brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${player[i].name}</li>
            <li class="list-group-item"><span style="color:red">Inputs: </span> ${player[i].inputs}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${player[i].outputs}</li>
            <li class="list-group-item"><span style="color:red">USB: </span> ${player[i].usb}</li>
            <li class="list-group-item"><span style="color:red">Play Format: </span> ${player[i].playFormat}</li>
            <li class="list-group-item"><span style="color:red">File Support: </span> ${player[i].fileSupport}</li>
          </ul>
        </div>
      </div> `;
    }
    */

    /* Method 3(Only get one element)
            this.equipment.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-3">
                <img class="img-fluid mb-2" src="../img/${player[0].id}.jpg">
                <a href="${player[0].url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
              </div>
              <div class="col-md-9">
                <span class="badge badge-pill badge-primary">Brand ID: ${player[0].brandId}</span>
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
        */
  }

  showMixer(mixer) {
    mixer.forEach(element =>
      this.equipment.innerHTML += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${element.id}.jpg">
          <a href="${element.url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID Repos: ${element.brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${element.id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${element.dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${element.weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${element.brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${element.name}</li>
            <li class="list-group-item"><span style="color:red">Inputs: </span> ${element.inputs}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${element.outputs}</li>
            <li class="list-group-item"><span style="color:red">USB: </span> ${element.usb}</li>
            <li class="list-group-item"><span style="color:red">Channels: </span> ${element.channels}</li>
            <li class="list-group-item"><span style="color:red">Effects: </span> ${element.effects}</li>
          </ul>
        </div>
      </div>
      <br/>
      <br/>`
    );
  }

  showController(controller) {
    controller.forEach(element =>
      this.equipment.innerHTML += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="../img/${element.id}.jpg">
          <a href="${element.url}" target="_blank" class="btn btn-primary btn-block mb-4">View Equipment</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-pill badge-primary">Brand ID Repos: ${element.brandId}</span>
          <span class="badge badge-pill badge-secondary">Equipment ID: ${element.id}</span>
          <span class="badge badge-pill badge-success">Dimensions: ${element.dimensions}</span>
          <span class="badge badge-pill badge-info">Weight: ${element.weight}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item"><span style="color:red">Company: </span> ${element.brandName}</li>
            <li class="list-group-item"><span style="color:red">Name: </span> ${element.name}</li>
            <li class="list-group-item"><span style="color:red">Inputs: </span> ${element.inputs}</li>
            <li class="list-group-item"><span style="color:red">Outputs: </span> ${element.outputs}</li>
            <li class="list-group-item"><span style="color:red">USB: </span> ${element.usb}</li>
            <li class="list-group-item"><span style="color:red">Channels: </span> ${element.channels}</li>
            <li class="list-group-item"><span style="color:red">Effects: </span> ${element.effects}</li>
            <li class="list-group-item"><span style="color:red">Hot Cues: </span> ${element.hotCues}</li>
            <li class="list-group-item"><span style="color:red">Software: </span> ${element.software}</li>
          </ul>
        </div>
      </div>
      <br/>
      <br/>`
    );
  }

  showTurntable(turntable) {
    turntable.forEach(element =>
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
      <br/>
      <br/>`
    );
  }

  showAlert(message, className) {
    // If we don't do this, it will be show in a loop, so we need to clear any remaining alerts
    this.clearAlert();

    const div = document.createElement("div");

    div.className = className;

    // Add text to the div
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert to above search class
    container.insertBefore(div, search);

    // Timeout after 2 second
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      console.log("Remaining alert deleted!");
      currentAlert.remove();
    }
  }

  clearEquipment() {
    this.equipment.innerHTML = ``;
  }
}