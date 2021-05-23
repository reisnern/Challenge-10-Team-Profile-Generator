// create parent Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // function to get name
  getName() {
    return this.name;
  }

  // function to get id
  getId() {
    return this.id;
  }

  // function to get email
  getEmail() {
    return this.email;
  }

  // function to get role
  getRole() {
    return "Employee";
  }
}

// export Employee class
module.exports = Employee;