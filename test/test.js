var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Sch00led", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should display error message when no login input", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("https://sch00led.herokuapp.com/")
      .type("#enter_username", "Testing")
      .type("#enter_password", "111111")
      // Evaluate the title
      .click("#take_user")
      .wait(5000)
      .evaluate(function() {
        return document.querySelector("#mainHeading").innerText;
      })
      // Asset the title is as expected
      .then(function(text) {
        expect(text).to.equal("Welcome Test");
        done();
      });
  });

  // it("should present a link to course catalog after login", function(done) {
  //   new Nightmare({ show: true })
  //     .goto("https://www.codecademy.com/login")
  //     // Enter username.
  //     .type("#user_login", "ResilD")
  //     // Enter password.
  //     .type("#login__user_password", "dummy*password")
  //     // Click the login button
  //     .click("#user_submit")
  //     // Evaluate the following selector
  //     .evaluate(function() {
  //       // Assert the "learn" link can be found
  //       return document.querySelector("a[href='/learn']");
  //     })
  //     .then(function(link) {
  //       expect(link).to.not.equal(undefined);
  //       done();
  //     });
  // });

  // it("should throw an error for fun", function() {
  //   throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  // });
});
