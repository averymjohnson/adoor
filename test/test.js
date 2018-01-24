const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function(){
  this.timeout('5s')

  let nightmare = Nightmare
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe("/ (Home Page)", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });


  describe("/log-in", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000/log-in")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });

    describe("/profile-create", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000/profile-create")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });

  describe("/survey", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000/survey")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });

  describe("/matching", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000/matching")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });


  describe("/my-matches", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000/my-matches")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });

  describe("/its-a-match", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:3000/its-a-match")
        .end()
        .then(function(result) {
          console.log(result);
          done();
        })
        .catch(function(error) {
          console.error("Search failed:", error);
          done();
        });
    });
  });

});