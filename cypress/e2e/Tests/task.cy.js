import LoginPage from "../PO/LoginPage";
import MainPage from "../PO/MainPage";

describe ("tasks", () => {
    beforeEach(() => {
        loginPage.loggedIn()
        
    })

  const mainPage = new MainPage()
  const loginPage = new LoginPage()

  it ("my task is visible", function() {

    cy.contains('My Tasks').should('be.visible')
 
  })
//bug id 1269
  it ("message on the top is visible", function() {

    cy.contains('Hey Max, this is your todo list for today:').should('be.visible')
 
  })

  it ("create new task", function() {

    mainPage.inputField()
    .should('be.visible')
    .click({force: true})
    .type('new task')

    mainPage.addBtn()
    .should('be.visible')
    .click({force: true})

    cy.contains('new task').should('be.visible')
 
  })


//bug id 1270
  it (" task with 2 chars not created", function() {

    mainPage.inputField()
    .should('be.visible')
    .click({force: true})
    .type('ne')
    mainPage.addBtn()
    .should('be.visible')
    .click({force: true})
    cy.contains('ne').should('not.exist')
 
  })

 
//bug id 1271
  it (" task with 292 chars not created", function() {

    mainPage.inputField()
    .should('be.visible')
    .click({force: true})
    .type('Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg'+
   ' Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg'+
   ' Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg'+
   ' Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg')
    mainPage.addBtn()
    .should('be.visible')
    .click({force: true})
    cy.contains('Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg'+
    ' Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg'+
    ' Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg'+
    ' Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglwe;knglkenrg').should('not.exist')
 
  })

 

});


