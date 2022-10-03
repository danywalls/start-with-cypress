import { MyButtonComponent } from './my-button/my-button.component';
import { AppComponent } from "./app.component"

describe("app component", () => {
  test("it should show the I learn testbed message", () => {
    cy.mount(AppComponent, {
      declarations:[ MyButtonComponent]
    });

    cy.get("h1").contains("I learn TestBed");
  })
  test("on click change text", () => {
    cy.mount(AppComponent, {
      declarations: [MyButtonComponent],
      componentProperties: {
        title: "Lebron"
      }
    });
    cy.get("h1").contains("Lebron");
    cy.get("button").click();
    cy.get("h1").contains("Garland");
  })

})
