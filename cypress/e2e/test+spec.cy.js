beforeEach(() => {
    cy.visit("http://localhost:8080/");
}); //executed before every "it" block

it("should have 0's as a start timer", () => {
    cy.get('.stopwatch').contains("00:00:00:00");
});

it("should start, stop and reset the timer", () => {
    cy.get(".start-btn").click();
    cy.wait(1000)
    .get(".stop-btn").click();
    cy.get(".stopwatch").contains("00:00:01");
    cy.wait(2000); //checking if the time in seconds is still same after 2s
    cy.get(".stopwatch").contains("00:00:01");
    cy.get(".reset-btn").click();
    cy.get(".stopwatch").contains("00:00:00:00");
});

it("should start timer, record laps and reset timer", () => {
    cy.get("table").should("not.exist");
    cy.get(".start-btn").click();
    cy.wait(1100) // cypress doesn't always exactly click on the wait time so adding some leeway 
    .get(".lap-btn").click();
    cy.wait(1100)
    .get('.lap-btn').click();
    cy.wait(1100)
    .get('.lap-btn').click();
    cy.wait(1100)
    .get('.stop-btn').click()
    cy.get('table')
    .get("tbody").children().should("have.length", 3)
    cy.get(".laptime").eq(0).contains("00:00:01"); // get all elements with classname "laptime" and evaluate the first child
    cy.get(".laptime").eq(1).contains("00:00:01");
    cy.get(".laptime").eq(2).contains("00:00:01");
    cy.get('.totaltime').eq(0).contains("00:00:03")
    cy.get('.totaltime').eq(1).contains("00:00:02")
    cy.get('.totaltime').eq(2).contains("00:00:01")
    cy.get('.reset-btn').click()
    cy.get('.stopwatch').contains('00:00:00:00')
})
