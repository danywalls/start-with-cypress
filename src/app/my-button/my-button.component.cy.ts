import { createOutputSpy } from "cypress/angular";
import { MyButtonComponent } from "./my-button.component";

describe("my button", () => {
  it("should emit hello", () => {
    cy.mount(MyButtonComponent, {
      componentProperties: {
        label: "Lebron"
      },

    });
    cy.get("button").click();
    cy.get("@onClickSpy").should("have.been.called");
  })
})
