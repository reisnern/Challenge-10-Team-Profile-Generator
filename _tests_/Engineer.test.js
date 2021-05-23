// import Engineer class
const Engineer = require('../lib/Engineer');

// create variables to hold Engineer Info
const name = "Itaru Hashida";
const id = "003";
const email = "daru@fglab.com";
const github = "daru";

describe("Engineer class", () => {
  it("Should create new Engineer object", () => {
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toBe("Itaru Hashida");
    expect(engineer.id).toBe("003");
    expect(engineer.email).toBe("daru@fglab.com");
    expect(engineer.github).toBe("daru");
  });

  describe('getGithub method', () => {
    it("Should get the GitHub username of the Engineer", () => {
      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getGithub()).toBe("daru");
    })
  });

  describe("getRole method", () => {
    it("Should get the role of the Engineer", () => {
      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getRole()).toBe("Engineer");
    })
  });

  describe("createHTML method", () => {
    it("Should output HTML specific to the Engineer", () => {
      const engineer = new Engineer(name, id, email, github);

      expect(engineer.createHTML()).toContain(`
      <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center engineer-bg name-font">
              <h4>Itaru Hashida</h4>
              <h4><i class="fas fa-laptop-code"></i> Engineer</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> 003</li>
              <li class="list-group-item"><b>Email:</b> daru@fglab.com</li>
              <li class="list-group-item"><b>GitHub:</b> daru</li>
            </ul>
          </div>
        </div>
      </div>
      `
      );
    })
  });
});