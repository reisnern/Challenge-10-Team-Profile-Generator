// import Employee class
const Employee = require('./Employee');

// create child Manager class by extending parent Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // function to get office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // function to get role
  getRole() {
    return "Manager";
  }

  // function to create HTML
  createHTML(){
    return `
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center manager-bg name-font">
              <h4>${this.name}</h4>
              <h4><i class="fas fa-briefcase"></i> Manager</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> ${this.id}</li>
              <li class="list-group-item"><b>Email:</b> ${this.email}</li>
              <li class="list-group-item"><b>Office Number:</b> ${this.officeNumber}</li>
            </ul>
          </div>
        </div>
      </div>
      `
  }
}

// export Manager class
module.exports = Manager;