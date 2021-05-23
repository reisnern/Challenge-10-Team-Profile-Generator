// import Manager class
const Manager = require('../lib/Manager');

// create variables to hold Manager Info
const name = "Todd Manion";
const id = "001";
const email = "todd.manion@inxpress.com";
const officeNumber = "5100";

describe("Manager class", () => {
  it("Should create new Manager object", () => {
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe("Todd Manion");
    expect(manager.id).toBe("001");
    expect(manager.email).toBe("todd.manion@inxpress.com");
    expect(manager.officeNumber).toBe("5100");
  });

  describe("getOfficeNumber method", () => {
    it("Should get the office number of the Manager", () => {
      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.getOfficeNumber()).toBe("5100");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Manager", () => {
      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.getRole()).toBe("Manager");
    })
  });
  
  describe("createHTML method", () => {
    it("Should output HTML specific to the Manager", () => {
      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.createHTML()).toContain(`
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center manager-bg name-font">
              <h4>Todd Manion</h4>
              <h4><i class="fas fa-briefcase"></i> Manager</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> 001</li>
              <li class="list-group-item"><b>Email:</b> todd.manion@inxpress.com</li>
              <li class="list-group-item"><b>Office Number:</b> 5100</li>
            </ul>
          </div>
        </div>
      </div>
      `
      );
    })
  })
});