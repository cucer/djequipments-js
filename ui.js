class UIclass {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(equipment) {
        console.log('user:',equipment);
        // we gonna insert some text into the div profile
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="https://www.pioneerdj.com/-/media/pioneerdj/images/products/player/cdj-2000nxs2/black/cdj-2000nxs2-main.jpg">
            <a href="https://www.pioneerdj.com" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-pill badge-primary">Brand ID Repos: ${equipment[0].brandId}</span>
            <span class="badge badge-pill badge-secondary">Equipment ID: ${equipment[0].id}</span>
            <span class="badge badge-pill badge-success">Dimensions: ${equipment[0].dimensions}</span>
            <span class="badge badge-pill badge-info">Weight: ${equipment[0].weight}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${equipment[0].brandName}</li>
              <li class="list-group-item">Name: ${equipment[0].name}</li>
              <li class="list-group-item">Inputs: ${equipment[0].inputs}</li>
              <li class="list-group-item">Outputs: ${equipment[0].outputs}</li>
              <li class="list-group-item">USB: ${equipment[0].usb}</li>
              <li class="list-group-item">Play Format: ${equipment[0].playFormat}</li>
              <li class="list-group-item">File Support: ${equipment[0].fileSupport}</li>
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
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 2 second
        setTimeout( () => {
            this.clearAlert();
        }, 2000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            console.log('Remaining alert deleted!')
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = ``;
    }
}