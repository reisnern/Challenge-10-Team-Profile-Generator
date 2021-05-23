// import Intern class
const Intern = require('../lib/Intern');

// create variables to hold Intern Info
const name = "Sydnie Mikelson";
const id = "004";
const email = "sydnie.mikelson@inxpress.com";
const school = "University of Utah";

describe("Intern class", () => {
  it("Should create new Intern object", () => {
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe("Sydnie Mikelson");
    expect(intern.id).toBe("004");
    expect(intern.email).toBe("sydnie.mikelson@inxpress.com");
    expect(intern.school).toBe("University of Utah");
  });

  describe("getSchool method", () => {
    it("Should get the school name of the Intern", () => {
      const intern = new Intern(name, id, email, school);

      expect(intern.getSchool()).toBe("University of Utah");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Intern", () => {
      const intern = new Intern(name, id, email, school);

      expect(intern.getRole()).toBe("Intern");
    })
  });

  describe("createHTML method", () => {
    it("Should output HTML specific to the Intern", () => {
      const intern = new Intern(name, id, email, school);

      expect(intern.createHTML()).toContain(`
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center intern-bg name-font">
              <h4>Sydnie Mikelson</h4>
              <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> 004</li>
              <li class="list-group-item"><b>Email:</b> sydnie.mikelson@inxpress.com</li>
              <li class="list-group-item"><b>School:</b> University of Utah</li>
            </ul>
          </div>
        </div>
      </div>
      `
      );
    })
  })
});