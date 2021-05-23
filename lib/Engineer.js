// import Employee class
const Employee = require('./Employee');

// create child Engineer class by extending parent Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // function to get github username
  getGithub() {
    return this.github;
  }

  // function to get role
  getRole() {
    return "Engineer";
  }

  // function to create HTML
  createHTML(){
    return `
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center engineer-bg name-font">
              <h4>${this.name}</h4>
              <h4><i class="fas fa-laptop-code"></i> Engineer</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> ${this.id}</li>
              <li class="list-group-item"><b>Email:</b> ${this.email}</li>
              <li class="list-group-item"><b>GitHub:</b> ${this.github}</li>
            </ul>
          </div>
        </div>
      </div>
      `
  }
}

// export Engineer class
module.exports = Engineer;