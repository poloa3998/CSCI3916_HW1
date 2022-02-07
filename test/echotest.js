//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
const { reset } = require("sinon");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

describe("Echo", () => {
  beforeEach((done) => {
    //Before each
    done();
  });

  describe("/", () => {
    it("it should POST echo", (done) => {
      chai
        .request(server)
        .post("/")
        .send("hello world")
        .end((err, res) => {
          res.should.have.status(200);
          res.resp;
          res.text.should.eq("hello world");
          done();
        });
    });
  });
});
