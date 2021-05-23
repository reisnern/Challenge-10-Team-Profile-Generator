// import Employee class
const Employee = require('./Employee');

// create child Intern class by extending parent Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // function to get school name
  getSchool() {
    return this.school;
  }

  // function to get role
  getRole() {
    return "Intern";
  }

  // function to create HTML
  createHTML(){
    return `
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center intern-bg name-font">
              <h4>${this.name}</h4>
              <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> ${this.id}</li>
              <li class="list-group-item"><b>Email:</b> ${this.email}</li>
              <li class="list-group-item"><b>School:</b> ${this.school}</li>
            </ul>
          </div>
        </div>
      </div>
      `
  }
}

// export Intern class
module.exports = Intern;